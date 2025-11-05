import { createContext } from "react";
// import type { ReactNode } from "react";

export interface Accommodation {
  id: string;
  title: string;
  type: "mess" | "room" | "hostel";
  location: string;
  nearestCollege?: string;
  distance: number;
  price: number;
  priceType: "month" | "meal" | "night";
  rating: number;
  reviewCount?: number;
  image?: string;
  amenities: string[];
  availability?: "available" | "limited" | "full" | "";
  description?: string;
  contact?: {
    phone: string;
    email: string;
    owner: string;
  };
  rules?: string[];
  photos?: string[];
  capacity: number;
  status?: "approved" | "pending" | "rejected";
}

export interface AccommodationContextType {
  accommodations: Accommodation[];
  setAccommodations: React.Dispatch<React.SetStateAction<Accommodation[]>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredAccommodations: Accommodation[];
  getAccommodationById: (id: string) => Accommodation | undefined;
  addAccommodation: (newAccommodation: Omit<Accommodation, "id">) => void;
}

// ✅ Create the context with default `undefined`
export const AccommodationContext = createContext<AccommodationContextType | undefined>(undefined);
