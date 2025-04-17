import type { RoomCategory, Room } from "./types"

// Room categories data
const roomCategories: RoomCategory[] = [
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

// Rooms data
const rooms: Room[] = [
  // Premium Rooms
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `premium-${i + 1}`,
    name: `Premium Room ${i + 1}`,
    category: "premium",
    description:
      "Indulge in the ultimate luxury experience in our Premium Room. This spacious accommodation features a king-size bed, a private balcony with breathtaking ocean views, and a luxurious bathroom with a jacuzzi. Enjoy exclusive amenities including a mini bar, espresso machine, and 24/7 room service.",
    shortDescription: "Spacious room with ocean view and luxury amenities",
    price: 350 + (i % 3) * 20,
    image: "/images/premium-room.jpg",
    roomNumber: `P${i + 1}`,
    bedType: "King Size",
    view: "Ocean View",
    maxGuests: 3,
    isAvailable: Math.random() > 0.3, // 70% chance of being available
  })),

  // Deluxe Rooms
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `deluxe-${i + 1}`,
    name: `Deluxe Room ${i + 1}`,
    category: "deluxe",
    description:
      "Experience comfort and elegance in our Deluxe Room. This well-appointed room features a queen-size bed, a balcony with city views, and a modern bathroom with a bathtub. Enjoy amenities including a mini fridge, coffee maker, and room service.",
    shortDescription: "Elegant room with city view and modern amenities",
    price: 250 + (i % 3) * 15,
    image: "/images/deluxe-room.jpg",
    roomNumber: `D${i + 1}`,
    bedType: "Queen Size",
    view: "City View",
    maxGuests: 2,
    isAvailable: Math.random() > 0.4, // 60% chance of being available
  })),

  // Standard Rooms
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `standard-${i + 1}`,
    name: `Standard Room ${i + 1}`,
    category: "standard",
    description:
      "Our Standard Room provides a cozy and comfortable stay with all the essential amenities you need. This room features a double bed, a shower, and a garden view. Basic amenities include a TV, mini fridge, and tea & coffee making facilities.",
    shortDescription: "Cozy room with garden view and essential amenities",
    price: 150 + (i % 3) * 10,
    image: "/images/standard-room.jpg",
    roomNumber: `S${i + 1}`,
    bedType: "Double Bed",
    view: "Garden View",
    maxGuests: 2,
    isAvailable: Math.random() > 0.2, // 80% chance of being available
  })),
]

// Helper functions
export function getRoomCategories(): RoomCategory[] {
  return roomCategories
}

export function getRoomCategory(slug: string): RoomCategory | undefined {
  return roomCategories.find((category) => category.slug === slug)
}

export function getRoomsByCategory(categorySlug: string): Room[] {
  return rooms.filter((room) => room.category === categorySlug)
}

export function getRoom(categorySlug: string, roomId: string): Room | undefined {
  return rooms.find((room) => room.category === categorySlug && room.id === roomId)
}
