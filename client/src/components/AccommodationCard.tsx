import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Star, Wifi, Car, UtensilsCrossed, Clock, Users, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AccommodationCardProps {
  id: string;
  title: string;
  type: "mess" | "room" | "hostel";
  location: string;
  nearestCollege?: string;
  distance: number | string;
  price: number;
  priceType: "month" | "meal" | "night";
  rating: number;
  reviewCount?: number;
  image?: string;
  amenities: string[];
  availability?: "available" | "limited" | "full";
  description?: string;
  contact?: {
    phone: string;
    email: string;
    owner: string;
  };
  rules?: string[];
  photos?: string[];
  status?: "pending" | "approved" | "rejected";
  capacity: number;
  isPending?: boolean;
}

const AccommodationCard = ({
  id,
  title,
  type,
  location,
  nearestCollege,
  distance,
  price,
  priceType,
  rating,
  reviewCount,
  image,
  amenities,
  availability,
  isPending = false,
}: AccommodationCardProps) => {
  const navigate = useNavigate();

  // Tailwind color codes (converted from your HSL)
  const typeColors = {
    mess: "bg-[#22C55E] text-white", // success green
    room: "bg-[#1E90FF] text-white", // primary blue
    hostel: "bg-[#10B981] text-white", // secondary teal-green
  };

  const availabilityColors: Record<"available" | "limited" | "full", string> = {
    available: "bg-[#22C55E] text-white", // success
    limited: "bg-[#FACC15] text-black", // warning yellow
    full: "bg-[#EF4444] text-white", // destructive red
  };

  const colorClass =
    availability && availabilityColors[availability]
      ? availabilityColors[availability]
      : "bg-gray-200 text-gray-600";

  const amenityIcons = {
    "Wi-Fi": Wifi,
    "Parking": Car,
    "Meals": UtensilsCrossed,
    "24/7": Clock,
    "Shared": Users,
  };

  return (
    <Card
      className={`group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        isPending ? "opacity-70" : ""
      }`}
    >
      {isPending && (
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
          <p className="text-sm bg-[#10B981] text-white px-2 py-1 rounded">
            Pending Approval
          </p>
        </div>
      )}

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={typeColors[type]} variant="secondary">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          {availability && (
            <Badge className={colorClass} variant="secondary">
              {availability.charAt(0).toUpperCase() + availability.slice(1)}
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>

        <div>
          <div className="flex items-center text-gray-500 mb-1">
            <Building2 className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {nearestCollege} → {distance}km
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 text-[#FACC15] mr-1 fill-current" />
          <span className="font-medium text-gray-900">{rating}</span>
          <span className="text-gray-500 text-sm ml-1">
            ({reviewCount} reviews)
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {amenities.slice(0, 3).map((amenity) => {
            const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
            return (
              <div
                key={amenity}
                className="flex items-center text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1"
              >
                {IconComponent && <IconComponent className="h-3 w-3 mr-1" />}
                {amenity}
              </div>
            );
          })}
          {amenities.length > 3 && (
            <div className="text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1">
              +{amenities.length - 3} more
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">₹{price}</span>
            <span className="text-gray-500 text-sm">/{priceType}</span>
          </div>
          <Button
            className="bg-[#1E90FF] hover:bg-[#187bcd] text-white"
            variant="default"
            size="sm"
            onClick={() => navigate(`/accommodation/${id}`)}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccommodationCard;
