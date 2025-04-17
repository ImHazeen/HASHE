export default function RoomAmenities({ category }: { category: string }) {
  // Different amenities based on room category
  const amenities = {
    premium: [
      { name: "King Size Bed", icon: "bed" },
      { name: "Private Balcony", icon: "door-open" },
      { name: "Jacuzzi", icon: "droplets" },
      { name: '55" Smart TV', icon: "tv" },
      { name: "Mini Bar", icon: "wine" },
      { name: "Espresso Machine", icon: "coffee" },
      { name: "Luxury Toiletries", icon: "spray-can" },
      { name: "Bathrobe & Slippers", icon: "shirt" },
      { name: "24/7 Room Service", icon: "bell" },
      { name: "Free Breakfast", icon: "utensils" },
      { name: "Complimentary Wine", icon: "glass-water" },
      { name: "Turndown Service", icon: "bed" },
    ],
    deluxe: [
      { name: "Queen Size Bed", icon: "bed" },
      { name: "Balcony", icon: "door-open" },
      { name: "Bathtub", icon: "bath" },
      { name: '43" Smart TV', icon: "tv" },
      { name: "Mini Fridge", icon: "refrigerator" },
      { name: "Coffee Maker", icon: "coffee" },
      { name: "Premium Toiletries", icon: "spray-can" },
      { name: "Bathrobe & Slippers", icon: "shirt" },
      { name: "Room Service", icon: "bell" },
      { name: "Free Breakfast", icon: "utensils" },
    ],
    standard: [
      { name: "Double Bed", icon: "bed" },
      { name: "Shower", icon: "shower" },
      { name: '32" TV', icon: "tv" },
      { name: "Mini Fridge", icon: "refrigerator" },
      { name: "Tea & Coffee", icon: "coffee" },
      { name: "Basic Toiletries", icon: "spray-can" },
      { name: "Housekeeping", icon: "broom" },
    ],
  }

  const categoryAmenities =
    category === "premium" ? amenities.premium : category === "deluxe" ? amenities.deluxe : amenities.standard

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Room Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categoryAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-700 mr-3">
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
              >
                {amenity.icon === "bed" && (
                  <>
                    <path d="M2 9V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3" />
                    <path d="M2 11v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
                    <path d="M4 11h16" />
                    <path d="M12 9V4" />
                  </>
                )}
                {amenity.icon === "door-open" && (
                  <>
                    <path d="M13 4h3a2 2 0 0 1 2 2v14" />
                    <path d="M2 20h3" />
                    <path d="M13 20h9" />
                    <path d="M10 12v.01" />
                    <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
                  </>
                )}
                {amenity.icon === "droplets" && (
                  <>
                    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
                  </>
                )}
                {amenity.icon === "tv" && (
                  <>
                    <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                    <polyline points="17 2 12 7 7 2" />
                  </>
                )}
                {amenity.icon === "wine" && (
                  <>
                    <path d="M8 22h8" />
                    <path d="M7 10h10" />
                    <path d="M12 15v7" />
                    <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
                  </>
                )}
                {amenity.icon === "coffee" && (
                  <>
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <line x1="6" x2="6" y1="2" y2="4" />
                    <line x1="10" x2="10" y1="2" y2="4" />
                    <line x1="14" x2="14" y1="2" y2="4" />
                  </>
                )}
                {amenity.icon === "spray-can" && (
                  <>
                    <path d="M3 3h.01" />
                    <path d="M7 5h.01" />
                    <path d="M11 7h.01" />
                    <path d="M3 7h.01" />
                    <path d="M7 9h.01" />
                    <path d="M3 11h.01" />
                    <rect width="4" height="4" x="15" y="5" />
                    <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
                    <path d="m13 14 8-2" />
                    <path d="m13 19 8-2" />
                  </>
                )}
                {amenity.icon === "shirt" && (
                  <>
                    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                  </>
                )}
                {amenity.icon === "bell" && (
                  <>
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </>
                )}
                {amenity.icon === "utensils" && (
                  <>
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </>
                )}
                {amenity.icon === "glass-water" && (
                  <>
                    <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
                    <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
                  </>
                )}
                {amenity.icon === "bath" && (
                  <>
                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                    <line x1="10" x2="8" y1="5" y2="7" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <line x1="7" x2="7" y1="19" y2="21" />
                    <line x1="17" x2="17" y1="19" y2="21" />
                  </>
                )}
                {amenity.icon === "refrigerator" && (
                  <>
                    <rect width="14" height="20" x="5" y="2" rx="2" />
                    <path d="M5 10h14" />
                    <path d="M15 15v-3" />
                  </>
                )}
                {amenity.icon === "shower" && (
                  <>
                    <circle cx="12" cy="18" r="4" />
                    <path d="M10 18a2 2 0 1 0 4 0" />
                    <path d="m8 18-5-5" />
                    <path d="M16 18h.01" />
                    <path d="m16 18 5-5" />
                    <path d="M12 14v.01" />
                    <path d="M12 2v4" />
                    <path d="M6 6a6 6 0 0 1 12 0" />
                    <path d="M6 10a6 6 0 0 0 12 0" />
                  </>
                )}
                {amenity.icon === "broom" && (
                  <>
                    <path d="M19.36 2.72 12 10.09l-1.08 6.48a2 2 0 0 0 3.95.74l.86-4.74 7.37-7.36a1.02 1.02 0 0 0-1.37-1.37z" />
                    <path d="m5 22 14-14" />
                    <path d="m2 22 14-14" />
                  </>
                )}
              </svg>
            </div>
            <span className="text-sm">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
