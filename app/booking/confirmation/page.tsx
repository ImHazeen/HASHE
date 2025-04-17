"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

export default function BookingConfirmation() {
  const searchParams = useSearchParams()

  const roomName = searchParams.get("roomName")
  const checkIn = searchParams.get("checkIn")
  const checkOut = searchParams.get("checkOut")
  const guests = searchParams.get("guests")
  const bookingId = searchParams.get("bookingId") || `HASHE-${Math.floor(Math.random() * 10000)}`

  if (!roomName || !checkIn || !checkOut || !guests) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Booking Information Missing</h1>
        <p className="mb-6">We couldn't find your booking information.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600 dark:text-green-400"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <CardTitle className="text-2xl text-green-800 dark:text-green-400">Booking Confirmed!</CardTitle>
          <CardDescription className="text-green-700 dark:text-green-500">
            Your reservation at HASHE Hotel has been successfully confirmed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-white dark:bg-black/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Booking Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Booking ID:</div>
              <div className="font-medium">{bookingId}</div>
              <div className="text-muted-foreground">Room:</div>
              <div className="font-medium">{roomName}</div>
              <div className="text-muted-foreground">Check-in:</div>
              <div className="font-medium">{formatDate(checkIn)}</div>
              <div className="text-muted-foreground">Check-out:</div>
              <div className="font-medium">{formatDate(checkOut)}</div>
              <div className="text-muted-foreground">Guests:</div>
              <div className="font-medium">{guests}</div>
            </div>
          </div>

          <div className="text-sm text-green-700 dark:text-green-500">
            <p>A confirmation email has been sent to your email address with all the details of your booking.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
          <Link href="/rooms">
            <Button>Browse More Rooms</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
