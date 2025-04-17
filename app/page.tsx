import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HotelInfo from "@/components/hotel-info"
import FeaturedRooms from "@/components/featured-rooms"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/images/hotel-exterior.jpg" alt="HASHE Hotel Exterior" fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-amber-400">HASHE</span> Hotel
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
            Experience luxury and comfort in the heart of Colombo, Sri Lanka
          </p>
          <Link href="/rooms">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Explore Rooms
            </Button>
          </Link>
        </div>
      </section>

      {/* Hotel Information */}
      <HotelInfo />

      {/* Featured Rooms */}
      <FeaturedRooms />
    </main>
  )
}
