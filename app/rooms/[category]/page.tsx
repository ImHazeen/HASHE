import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { roomCategories, getRoomsByCategory } from "@/lib/data"
import RoomList from "@/components/room-list"

type Props = {
  params: { category: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = roomCategories.find((c) => c.slug === params.category)

  if (!category) {
    return {
      title: "Room Not Found - HASHE Hotel",
    }
  }

  return {
    title: `${category.name} - HASHE Hotel`,
    description: category.description,
  }
}

export function generateStaticParams() {
  return roomCategories.map((category) => ({
    category: category.slug,
  }))
}

export default function CategoryPage({ params }: Props) {
  const category = roomCategories.find((c) => c.slug === params.category)

  if (!category) {
    notFound()
  }

  const rooms = getRoomsByCategory(params.category)

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-muted-foreground mb-6">{category.description}</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <span>Room Size: {category.size} sqm</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>View: {category.view}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 14h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3z" />
                  <path d="M21 14h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3z" />
                  <path d="M12 14v4" />
                  <path d="M12 6v4" />
                  <path d="M8 18h8" />
                </svg>
              </div>
              <span>Bed Type: {category.bedType}</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span>Starting at ${category.price} per night</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <RoomList rooms={rooms} />
    </main>
  )
}
