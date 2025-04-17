import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { roomCategories, getRoomById } from "@/lib/data"
import RoomAmenities from "@/components/room-amenities"
import BookingForm from "@/components/booking-form"

type Props = {
  params: { category: string; roomId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = getRoomById(params.category, params.roomId)

  if (!room) {
    return {
      title: "Room Not Found - HASHE Hotel",
    }
  }

  return {
    title: `${room.name} - HASHE Hotel`,
    description: `Book the ${room.name} at HASHE Hotel in Colombo, Sri Lanka.`,
  }
}

export default function RoomPage({ params }: Props) {
  const room = getRoomById(params.category, params.roomId)

  if (!room) {
    notFound()
  }

  const category = roomCategories.find((c) => c.slug === params.category)

  if (!category) {
    notFound()
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
            <Image
              src={room.image || "/placeholder.svg"}
              alt={room.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Room Description</h2>
            <p className="text-muted-foreground mb-4">{room.description}</p>
            <p className="text-muted-foreground">
              Experience the perfect blend of comfort and luxury in our {category.slug} room. Enjoy stunning views of{" "}
              {room.view} and take advantage of our premium amenities.
            </p>
          </div>

          <RoomAmenities category={params.category} />
        </div>

        <div>
          <BookingForm room={room} />
        </div>
      </div>
    </main>
  )
}
