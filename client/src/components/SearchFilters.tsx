import { useState } from "react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Filter, X } from "lucide-react";

const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([5000, 25000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenities = [
    "Wi-Fi",
    "AC",
    "Parking",
    "Meals",
    "Laundry",
    "24/7 Security",
    "Study Room",
    "Common Area",
    "Single Room",
    "Shared Room",
  ];

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    setPriceRange([5000, 25000]);
    setSelectedAmenities([]);
  };

  return (
    <Card className="sticky top-20 border border-gray-200 shadow-md bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg font-semibold text-gray-800">
            <Filter className="h-5 w-5 mr-2 text-[#1E90FF]" />
            Filters
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-[#1E90FF] hover:text-[#1873CC]"
          >
            Clear All
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-4">
        {/* Property Type */}
        <div>
          <Label className="text-sm font-medium mb-2 block text-gray-700">
            Property Type
          </Label>
          <Select>
            <SelectTrigger className="border-gray-300 focus:ring-[#1E90FF]/30 focus:border-[#1E90FF]">
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="mess">Mess</SelectItem>
              <SelectItem value="room">Room</SelectItem>
              <SelectItem value="hostel">Hostel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Distance */}
        <div>
          <Label className="text-sm font-medium mb-2 block text-gray-700">
            Distance from College
          </Label>
          <Select>
            <SelectTrigger className="border-gray-300 focus:ring-[#26D07C]/30 focus:border-[#26D07C]">
              <SelectValue placeholder="Any distance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1km">Within 1 km</SelectItem>
              <SelectItem value="2km">Within 2 km</SelectItem>
              <SelectItem value="5km">Within 5 km</SelectItem>
              <SelectItem value="10km">Within 10 km</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block text-gray-700">
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={1000}
            max={50000}
            step={1000}
            className="w-full accent-[#1E90FF]"
          />
        </div>

        {/* Rating */}
        <div>
          <Label className="text-sm font-medium mb-2 block text-gray-700">
            Minimum Rating
          </Label>
          <Select>
            <SelectTrigger className="border-gray-300 focus:ring-[#1E90FF]/30 focus:border-[#1E90FF]">
              <SelectValue placeholder="Any rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
              <SelectItem value="2">2+ Stars</SelectItem>
              <SelectItem value="1">1+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amenities */}
        <div>
          <Label className="text-sm font-medium mb-3 block text-gray-700">
            Amenities
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity) => (
              <Badge
                key={amenity}
                variant={
                  selectedAmenities.includes(amenity) ? "default" : "outline"
                }
                className={`cursor-pointer justify-center py-2 transition-all ${
                  selectedAmenities.includes(amenity)
                    ? "bg-linear-to-r from-[#1E90FF] to-[#26D07C] text-white shadow-md"
                    : "border-gray-300 text-gray-600 hover:bg-[#1E90FF] hover:text-white"
                }`}
                onClick={() => toggleAmenity(amenity)}
              >
                {amenity}
                {selectedAmenities.includes(amenity) && (
                  <X className="h-3 w-3 ml-1" />
                )}
              </Badge>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <Label className="text-sm font-medium mb-2 block text-gray-700">
            Availability
          </Label>
          <Select>
            <SelectTrigger className="border-gray-300 focus:ring-[#26D07C]/30 focus:border-[#26D07C]">
              <SelectValue placeholder="Any availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available Now</SelectItem>
              <SelectItem value="limited">Limited Availability</SelectItem>
              <SelectItem value="upcoming">Available Soon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full h-11 bg-linear-to-r from-[#1E90FF] to-[#26D07C] hover:from-[#1873CC] hover:to-[#1FB268] text-white font-semibold shadow-md"
        >
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
