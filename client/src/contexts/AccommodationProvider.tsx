import { useState, useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { AccommodationContext } from "./AccommodationContext";
import type { Accommodation } from "./AccommodationContext";

export const AccommodationProvider = ({ children }: { children: ReactNode }) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch data when provider mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties");
        const data: Accommodation[] = await response.json();
        setAccommodations(data);
      } catch (error) {
        console.error("Failed to fetch accommodations:", error);
      }
    };
    fetchData();
  }, []);

  // Filter based on searchQuery
  const filteredAccommodations = useMemo(() => {
    if (!searchQuery.trim()) return accommodations;
    return accommodations.filter(
      (acc) =>
        acc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.nearestCollege?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [accommodations, searchQuery]);

  // Find accommodation by ID
  const getAccommodationById = (id: string) =>
    accommodations.find((acc) => acc.id === id);

  // Add new accommodation (auto-generate ID)
  const addAccommodation = (newAccommodation: Omit<Accommodation, "id">) => {
    const accommodationWithId: Accommodation = {
      ...newAccommodation,
      id: crypto.randomUUID(),
    };
    setAccommodations((prev) => [...prev, accommodationWithId]);
  };

  return (
    <AccommodationContext.Provider
      value={{
        accommodations,
        setAccommodations,
        searchQuery,
        setSearchQuery,
        filteredAccommodations,
        getAccommodationById,
        addAccommodation,
      }}
    >
      {children}
    </AccommodationContext.Provider>
  );
};
