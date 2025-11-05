import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Trash2, Loader2, Upload, Star, CheckCircle } from "lucide-react";
import { usePropertyListing } from "../hooks/usePropertyListing";

const ListYourProperty = () => {
  const {
    formData,
    setFormData,
    handleSubmit,
    handleSaveDraft,
    isSubmitting,
    draftLoading,
    // amenitiesList,
    // handleAmenityChange,
    fileInputRef,
    handlePhotoButtonClick,
    handlePhotoUpload
  } = usePropertyListing();

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#374151]">
      <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#22C55E]/10 to-[#1D4ED8]/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[#374151] mb-4">List Your Property</h1>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Join our platform and start earning by listing your mess, hostel, or rental room.
            Reach thousands of students looking for accommodation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-[#FFFFFF] border border-[#E5E7EB]">
              <CardHeader>
                <CardTitle className="flex items-center text-[#374151]">
                  <Star className="h-5 w-5 text-[#F59E0B] mr-2" />
                  Why List With Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Reach More Students",
                    desc: "Connect with students from 50+ partner colleges",
                  },
                  {
                    title: "Easy Management",
                    desc: "Manage bookings and inquiries from one dashboard",
                  },
                  {
                    title: "Verified Listings",
                    desc: "Build trust with our verification process",
                  },
                  {
                    title: "No Hidden Fees",
                    desc: "Transparent pricing with no surprise charges",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#22C55E] mt-0.5" />
                    <div>
                      <h3 className="font-medium text-[#374151]">{item.title}</h3>
                      <p className="text-sm text-[#6B7280]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="bg-[#FFFFFF] border border-[#E5E7EB]">
              <CardHeader>
                <CardTitle className="text-[#374151]">Property Registration Form</CardTitle>
                <p className="text-[#6B7280]">Fill in the details below to list your property</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#374151]">Basic Information</h3>
                    <div>
                      <Label htmlFor="property-name">Property Name *</Label>
                      <Input
                        id="property-name"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Green View Boys Hostel, Raj Mess"
                        className="mt-1 border border-[#E5E7EB]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="property-type">Property Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                        required
                      >
                        <SelectTrigger className="mt-1 border border-[#E5E7EB]">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mess">Mess</SelectItem>
                          <SelectItem value="hostel">Hostel</SelectItem>
                          <SelectItem value="room">Private Room</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        placeholder="Describe your property, facilities, and what makes it special..."
                        className="mt-1 min-h-[100px] border border-[#E5E7EB]"
                        required
                      />
                    </div>
                  </div>

                  {/* Photos */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#374151]">Photos</h3>
                    <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-[#6B7280] mx-auto mb-4" />
                      <h4 className="text-lg font-medium text-[#374151] mb-2">Upload Property Photos</h4>
                      <p className="text-[#6B7280] mb-4">
                        Add high-quality photos to attract more students. Maximum 10 photos allowed.
                      </p>
                      <Button
                        variant="outline"
                        type="button"
                        onClick={handlePhotoButtonClick}
                        className="border border-[#E5E7EB] cursor-pointer"
                      >
                        Choose Files
                      </Button>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handlePhotoUpload}
                      />
                    </div>

                    {formData.photos.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {formData.photos.map((photo, index) => (
                          <div key={index} className="relative">
                            <img
                              src={URL.createObjectURL(photo)}
                              alt={`Preview ${index}`}
                              className="h-24 w-full object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  photos: formData.photos.filter((_, i) => i !== index),
                                })
                              }
                              className="absolute top-1 right-1 bg-[#EF4444] text-[#FFFFFF] rounded-full p-1"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Terms & Submit */}
                  <div className="space-y-4 pt-6 border-t border-[#E5E7EB]">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, agreeToTerms: Boolean(checked) })
                        }
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-[#374151]">
                        I agree to the{" "}
                        <span className="text-[#1D4ED8]">Terms of Service</span> and{" "}
                        <span className="text-[#1D4ED8]">Privacy Policy</span>
                      </Label>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        className="flex-1 border border-[#E5E7EB]"
                        type="button"
                        onClick={handleSaveDraft}
                        disabled={draftLoading || isSubmitting}
                      >
                        {draftLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Save as Draft
                      </Button>

                      <Button
                        className="flex-1 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white disabled:cursor-not-allowed disabled:pointer-events-auto"
                        type="submit"
                        disabled={isSubmitting || !formData.agreeToTerms}
                      >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Submit for Review
                      </Button>
                    </div>

                    <p className="text-sm text-[#6B7280] text-center">
                      Your property will be reviewed within 24–48 hours before going live.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListYourProperty;
