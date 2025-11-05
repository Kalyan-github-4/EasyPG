import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { useAccommodation } from "../hooks/useAccommodation";
import {
  ArrowLeft,
  MapPin,
  Star,
  Phone,
  Mail,
  User,
  CheckCircle,
  Info,
  Building2,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AccommodationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAccommodationById } = useAccommodation();

  const accommodation = getAccommodationById(id!);

  if (!accommodation) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4 text-rose-600">
            Accommodation not found
          </h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Search
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const typeColors = {
    mess: "bg-emerald-100 text-emerald-700",
    room: "bg-blue-100 text-blue-700",
    hostel: "bg-purple-100 text-purple-700",
  };

  const availabilityColors = {
    available: "bg-emerald-100 text-emerald-700",
    limited: "bg-amber-100 text-amber-700",
    full: "bg-rose-100 text-rose-700",
  };

  const colorClass =
    accommodation.availability && availabilityColors[accommodation.availability]
      ? availabilityColors[accommodation.availability]
      : "bg-gray-100 text-gray-700";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Search
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={accommodation.image}
                alt={accommodation.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  className={`${typeColors[accommodation.type]} font-medium px-3 py-1 rounded-full`}
                >
                  {accommodation.type.charAt(0).toUpperCase() +
                    accommodation.type.slice(1)}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge
                  className={`${colorClass} font-medium px-3 py-1 rounded-full`}
                >
                  {accommodation.availability
                    ? accommodation.availability.charAt(0).toUpperCase() +
                      accommodation.availability.slice(1)
                    : "Unknown"}
                </Badge>
              </div>
            </div>

            {accommodation.photos && accommodation.photos.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {accommodation.photos.slice(1).map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${accommodation.title} - ${index + 2}`}
                    className="w-full h-20 sm:h-24 object-cover rounded-lg shadow-sm"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            {/* Title and Location */}
            <div>
              <h1 className="text-3xl font-bold mb-2 text-slate-900">
                {accommodation.title}
              </h1>

              <div className="mb-4">
                <div className="flex items-center text-slate-600 mb-1">
                  <Building2 className="h-5 w-5 mr-2 text-blue-500" />
                  <span>
                    {accommodation.nearestCollege} → {accommodation.distance}km
                  </span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>{accommodation.location}</span>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-amber-400 mr-1 fill-current" />
                <span className="font-medium text-lg text-slate-900">
                  {accommodation.rating}
                </span>
                <span className="text-slate-500 ml-2">
                  ({accommodation.reviewCount} reviews)
                </span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  ₹{accommodation.price}
                </span>
                <span className="text-slate-600 text-lg">
                  /{accommodation.priceType}
                </span>
              </div>
            </div>

            {/* Amenities */}
            <Card className="border border-slate-200 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-slate-900">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {accommodation.amenities.map((amenity) => (
                    <Badge
                      key={amenity}
                      variant="outline"
                      className="text-slate-700 border-slate-300"
                    >
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            {accommodation.description && (
              <Card className="border border-slate-200 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-slate-900">
                    Description
                  </h3>
                  <p className="text-slate-600">
                    {accommodation.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Contact Information */}
            {accommodation.contact && (
              <Card className="border border-slate-200 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-slate-900">
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-slate-700">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{accommodation.contact.owner}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{accommodation.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{accommodation.contact.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Rules */}
            {accommodation.rules && accommodation.rules.length > 0 && (
              <Card className="border border-slate-200 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-slate-900">
                    Rules & Policies
                  </h3>
                  <div className="space-y-2 text-slate-600">
                    {accommodation.rules.map((rule, index) => (
                      <div key={index} className="flex items-start">
                        <Info className="h-4 w-4 mr-2 mt-0.5 text-blue-500" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white">
                <CheckCircle className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccommodationDetail;
