import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import { useAccommodation } from "../hooks/useAccommodation";
import heroImage from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const { searchQuery, setSearchQuery } = useAccommodation();

  const handleSearch = () => {
    const resultsSection = document.getElementById("results-section");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#1E90FF0D] to-[#26D07C0D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Campus accommodation"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF1A] to-[#26D07C1A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-[#1E90FF] to-[#26D07C] bg-clip-text text-transparent">
              Student Accommodation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover nearby messes, hostels, and rental rooms with ease.
            Book instantly, read reviews, and find your home away from home.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter your college or location..."
                    className="pl-10 h-12 border border-gray-200 focus:border-[#1E90FF] focus:ring-2 focus:ring-[#1E90FF]/30 bg-gray-50 transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Move-in date"
                    className="pl-10 h-12 border border-gray-200 focus:border-[#26D07C] focus:ring-2 focus:ring-[#26D07C]/30 bg-gray-50 transition"
                  />
                </div>
              </div>

              <div>
                <Button
                  className="w-full h-12 bg-gradient-to-r from-[#1E90FF] to-[#26D07C] hover:from-[#1873CC] hover:to-[#1FB268] text-white font-semibold shadow-md"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E90FF] mb-1">500+</div>
              <div className="text-sm text-gray-600">Verified Properties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#26D07C] mb-1">50+</div>
              <div className="text-sm text-gray-600">Partner Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E90FF] mb-1">10k+</div>
              <div className="text-sm text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#26D07C] mb-1">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
