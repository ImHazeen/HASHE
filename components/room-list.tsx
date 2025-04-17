import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Room } from "@/lib/types"

export default function RoomList({ rooms }: { rooms: Room[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              <div className="relative h-48 md:h-full">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {room.isAvailable ? (
                  <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">Available</Badge>
                ) : (
                  <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">Booked</Badge>
                )}
              </div>

              <div className="md:col-span-2 flex flex-col">
                <CardContent className="p-4 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{room.name}</h3>
                    <div className="text-amber-600 font-semibold">
                      ${room.price} <span className="text-xs text-muted-foreground font-normal">/ night</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{room.shortDescription}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-amber-600"
                      >
                        <path d="M3 14h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3z" />
                        <path d="M21 14h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3z" />
                        <path d="M12 14v4" />
                        <path d="M12 6v4" />
                        <path d="M8 18h8" />
                      </svg>
                      <span>{room.bedType}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-amber-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{room.view}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-amber-600"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                      <span>Max: {room.maxGuests} Guests</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-amber-600"
                      >
                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                      </svg>
                      <span>Room {room.roomNumber}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Link href={`/rooms/${room.category}/${room.id}`} className="w-full">
                    <Button
                      variant={room.isAvailable ? "default" : "outline"}
                      className="w-full"
                      disabled={!room.isAvailable}
                    >
                      {room.isAvailable ? "Book Now" : "Not Available"}
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
