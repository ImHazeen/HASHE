import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { RoomCategory } from "@/lib/types"

export default function RoomCategoryList({ categories }: { categories: RoomCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Card key={category.slug} className="overflow-hidden border-0 shadow-lg">
          <div className="relative h-64">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-amber-600 hover:bg-amber-700">From ${category.price}</Badge>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{category.description}</p>

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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                <span>{category.size} sqm</span>
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
                <span>{category.view}</span>
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
                  <path d="M3 14h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3z" />
                  <path d="M21 14h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3z" />
                  <path d="M12 14v4" />
                  <path d="M12 6v4" />
                  <path d="M8 18h8" />
                </svg>
                <span>{category.bedType}</span>
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
                <span>Max: {category.maxGuests} Guests</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Link href={`/rooms/${category.slug}`} className="w-full">
              <Button className="w-full">View Rooms</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
