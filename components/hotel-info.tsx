import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HotelInfo() {
  return (
    <section className="py-16 px-4 bg-muted/30" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">About HASHE Hotel</h2>
            <p className="text-muted-foreground mb-4">
              Nestled in the heart of Colombo, HASHE Hotel offers a perfect blend of luxury, comfort, and exceptional
              service. Our prime location provides easy access to the city's business district, cultural attractions,
              and shopping destinations.
            </p>
            <p className="text-muted-foreground mb-6">
              With our elegant rooms, world-class amenities, and dedicated staff, we ensure that every moment of your
              stay is memorable. Whether you're visiting for business or leisure, HASHE Hotel provides the perfect
              setting for an unforgettable experience in Sri Lanka.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <h3 className="font-medium">Central Location</h3>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <h3 className="font-medium">Luxury Rooms</h3>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" x2="6" y1="1" y2="4" />
                    <line x1="10" x2="10" y1="1" y2="4" />
                    <line x1="14" x2="14" y1="1" y2="4" />
                  </svg>
                </div>
                <h3 className="font-medium">Fine Dining</h3>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 10h4" />
                    <path d="M6 14h4" />
                    <path d="M12 2v20" />
                    <path d="M8.5 2h7" />
                    <path d="M14 4h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" />
                    <path d="M14 16h3a2 2 0 0 1 2 2v2" />
                    <path d="M8.5 22h7" />
                  </svg>
                </div>
                <h3 className="font-medium">Spa & Wellness</h3>
              </div>
            </div>

            <Link href="#contact">
              <Button variant="outline" className="mr-4">
                Contact Us
              </Button>
            </Link>
            <Link href="/rooms">
              <Button>Book Now</Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/images/hotel-lobby.jpg" alt="HASHE Hotel Lobby" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/hotel-restaurant.jpg" alt="HASHE Hotel Restaurant" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/hotel-pool.jpg" alt="HASHE Hotel Pool" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/images/hotel-spa.jpg" alt="HASHE Hotel Spa" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
