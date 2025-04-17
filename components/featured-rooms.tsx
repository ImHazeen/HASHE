import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { roomCategories } from "@/lib/data"

export default function FeaturedRooms() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Rooms & Suites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of comfort and luxury with our carefully designed rooms and suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomCategories.map((category) => (
            <Card key={category.slug} className="overflow-hidden border-0 shadow-lg">
              <div className="relative h-64">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <div className="text-amber-600 font-semibold">
                    From ${category.price} <span className="text-xs text-muted-foreground font-normal">/ night</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
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
                      className="mr-1"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {category.view}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/rooms/${category.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms">
            <Button size="lg">View All Rooms</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
