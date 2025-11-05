import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFilters from "../components/SearchFilters";
import AccommodationGrid from "../components/AccommodationGrid";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import { useAccommodation } from "../hooks/useAccommodation";

const BrowseAccommodation = () => {
  const { searchQuery, setSearchQuery } = useAccommodation();

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#374151]">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1D4ED8]/10 to-[#22C55E]/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#374151] mb-4">
              Browse Accommodations
            </h1>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Find the perfect place to stay during your college journey.
              Choose from messes, hostels, and private rooms near your campus.
            </p>
          </div>

          {/* Quick Search */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-[#6B7280]" />
                  <Input
                    placeholder="Search by location, college, or accommodation name..."
                    className="pl-10 h-12 border border-[#E5E7EB] bg-[#F6F8FB] text-[#374151]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="h-12 px-6 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SearchFilters />
            </div>
          </div>

          {/* Accommodation Grid */}
          <div className="lg:col-span-3">
            <AccommodationGrid />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseAccommodation;
