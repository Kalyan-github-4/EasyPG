import {
  Home,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f9fafb] border-t border-[#e5e7eb] mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-[#1E90FF]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#1E90FF] to-[#28C76F] bg-clip-text text-transparent">
                CampusHub
              </span>
            </div>
            <p className="text-[#6b7280]">
              Connecting students with quality accommodations across India. <br />
              Find your perfect home away from home.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-[#6b7280] hover:text-[#1E90FF] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-[#6b7280] hover:text-[#1E90FF] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-[#6b7280] hover:text-[#1E90FF] cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-[#6b7280] hover:text-[#1E90FF] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Students */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#111827]">For Students</h3>
            <ul className="space-y-2">
              {["Browse Accommodations", "How It Works", "Safety Guidelines", "Student Reviews"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#6b7280] hover:text-[#1E90FF] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* For Owners */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#111827]">For Property Owners</h3>
            <ul className="space-y-2">
              {["List Your Property", "Owner Dashboard", "Pricing Guide", "Success Stories"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#6b7280] hover:text-[#1E90FF] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#111827]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#6b7280]" />
                <span className="text-[#6b7280]">+91 98837 85143</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#6b7280]" />
                <span className="text-[#6b7280]">
                  kalyanmanna.icv@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#6b7280] mt-0.5" />
                <span className="text-[#6b7280]">
                  ICV Polytechnic,
                  <br />
                  Sevayatan, Jhargram 721514
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#e5e7eb] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6b7280] text-sm">
            © 2025 CampusHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#6b7280] hover:text-[#1E90FF] text-sm transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
