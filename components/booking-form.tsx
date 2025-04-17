"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Room } from "@/lib/types"
import { formatDate } from "@/lib/utils"

export default function BookingForm({ room }: { room: Room }) {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date())
  const [checkOut, setCheckOut] = useState<Date | undefined>(new Date(new Date().setDate(new Date().getDate() + 2)))
  const [guests, setGuests] = useState("2")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!checkIn || !checkOut) {
      return
    }

    setIsLoading(true)

    // Simulate booking process
    setTimeout(() => {
      const params = new URLSearchParams({
        roomName: room.name,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
        guests: guests,
      })

      router.push(`/booking/confirmation?${params.toString()}`)
    }, 1500)
  }

  // Calculate number of nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const nights = calculateNights()
  const roomTotal = nights * room.price
  const taxesAndFees = Math.round(roomTotal * 0.15)
  const total = roomTotal + taxesAndFees

  return (
    <Card className="sticky top-24">
      <CardHeader className="bg-muted/50">
        <CardTitle className="text-xl">Book This Room</CardTitle>
        <CardDescription>Fill in the details to reserve your stay</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="check-in">Check-in Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal" id="check-in">
                  {checkIn ? formatDate(checkIn) : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="check-out">Check-out Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal" id="check-out">
                  {checkOut ? formatDate(checkOut) : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) =>
                    !checkIn ||
                    date <= new Date(checkIn.getTime() - 86400000) ||
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger id="guests">
                <SelectValue placeholder="Select number of guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Room Rate:</span>
              <span>${room.price} / night</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">{nights} Nights:</span>
              <span>${roomTotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Taxes & Fees:</span>
              <span>${taxesAndFees}</span>
            </div>

            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit} disabled={isLoading || !checkIn || !checkOut || nights <= 0}>
          {isLoading ? "Processing..." : "Book Now"}
        </Button>
      </CardFooter>
    </Card>
  )
}
