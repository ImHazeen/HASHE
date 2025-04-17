import type { RoomCategory, Room } from "./types"

// Room categories data
export const roomCategories: RoomCategory[] = [
  {
    name: "Premium Rooms",
    slug: "premium",
    description:
      "Our premium rooms offer the ultimate luxury experience with stunning views, spacious interiors, and exclusive amenities.",
    shortDescription: "Ultimate luxury with stunning views and exclusive amenities",
    price: 350,
    image: "/images/premium-room.jpg",
    size: 55,
    view: "Ocean View",
    bedType: "King Size",
    maxGuests: 3,
  },
  {
    name: "Deluxe Rooms",
    slug: "deluxe",
    description:
      "Experience comfort and elegance in our deluxe rooms, featuring modern amenities and beautiful city views.",
    shortDescription: "Comfort and elegance with modern amenities",
    price: 250,
    image: "/images/deluxe-room.jpg",
    size: 40,
    view: "City View",
    bedType: "Queen Size",
    maxGuests: 2,
  },
  {
    name: "Standard Rooms",
    slug: "standard",
    description: "Our standard rooms provide a cozy and comfortable stay with all the essential amenities you need.",
    shortDescription: "Cozy and comfortable with essential amenities",
    price: 150,
    image: "/images/standard-room.jpg",
    size: 30,
    view: "Garden View",
    bedType: "Double Bed",
    maxGuests: 2,
  },
]

// Generate rooms for each category
const generateRooms = (category: string, count: number): Room[] => {
  return Array.from({ length: count }, (_, i) => {
    const categoryData = roomCategories.find((c) => c.slug === category)!
    const priceVariation = (i % 3) * (category === "premium" ? 20 : category === "deluxe" ? 15 : 10)

    return {
      id: `${category}-${i + 1}`,
      name: `${categoryData.name.slice(0, -1)} ${i + 1}`,
      category: category,
      description: `Experience the perfect blend of comfort and luxury in our ${category} room. This ${categoryData.size} sqm room features a ${categoryData.bedType.toLowerCase()}, a ${category === "premium" ? "private balcony" : category === "deluxe" ? "balcony" : "window"} with ${categoryData.view.toLowerCase()}, and a modern bathroom with a ${category === "premium" ? "jacuzzi" : category === "deluxe" ? "bathtub" : "shower"}. Enjoy amenities including ${category === "premium" ? "a mini bar, espresso machine, and 24/7 room service" : category === "deluxe" ? "a mini fridge, coffee maker, and room service" : "a mini fridge and tea & coffee making facilities"}.`,
      shortDescription: `${categoryData.size} sqm room with ${categoryData.view.toLowerCase()} and ${category === "premium" ? "luxury" : category === "deluxe" ? "premium" : "essential"} amenities`,
      price: categoryData.price + priceVariation,
      image: categoryData.image,
      roomNumber: `${category.charAt(0).toUpperCase()}${i + 1}`,
      bedType: categoryData.bedType,
      view: categoryData.view,
      maxGuests: categoryData.maxGuests,
      isAvailable: Math.random() > (category === "premium" ? 0.3 : category === "deluxe" ? 0.4 : 0.2),
    }
  })
}

// All rooms
const allRooms: Room[] = [
  ...generateRooms("premium", 10),
  ...generateRooms("deluxe", 10),
  ...generateRooms("standard", 10),
]

// Helper functions
export function getRoomsByCategory(categorySlug: string): Room[] {
  return allRooms.filter((room) => room.category === categorySlug)
}

export function getRoomById(categorySlug: string, roomId: string): Room | undefined {
  return allRooms.find((room) => room.category === categorySlug && room.id === roomId)
}
