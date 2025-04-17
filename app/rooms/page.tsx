import type { Metadata } from "next"
import RoomCategories from "@/components/room-categories"
import { roomCategories } from "@/lib/data"

export const metadata: Metadata = {
  title: "Rooms & Suites - HASHE Hotel",
  description: "Explore our premium, deluxe, and standard rooms at HASHE Hotel in Colombo, Sri Lanka.",
}

export default function RoomsPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Our Rooms & Suites</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Discover our carefully designed rooms and suites, each offering a unique blend of comfort and elegance.
      </p>

      <RoomCategories categories={roomCategories} />
    </main>
  )
}
