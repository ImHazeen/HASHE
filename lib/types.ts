export interface RoomCategory {
  name: string
  slug: string
  description: string
  shortDescription: string
  price: number
  image: string
  size: number
  view: string
  bedType: string
  maxGuests: number
}

export interface Room {
  id: string
  name: string
  category: string
  description: string
  shortDescription: string
  price: number
  image: string
  roomNumber: string
  bedType: string
  view: string
  maxGuests: number
  isAvailable: boolean
}
