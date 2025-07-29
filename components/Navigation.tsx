"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Sparkles,
  Phone,
  Users,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamCategories = [
    { label: "Board of Directors", value: "bods", icon: "👥" },
    { label: "Principal", value: "principal", icon: "🎓" },
    { label: "Academics", value: "academics", icon: "📚" },
    { label: "Admins", value: "admins", icon: "💼" },
    { label: "Support Staff", value: "support", icon: "🤝" },
  ];

  const courseCategories = [
    { label: "+2 Courses", value: "+2", icon: "📖" },
    { label: "Diploma Courses", value: "diploma", icon: "🎯" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Aarambha
                </span>
                <div className="text-xs text-gray-500 font-medium -mt-1">
                  Excellence in Education
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 group"
            >
              <span>Home</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link
              href="/about"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 group"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Enhanced Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => setIsCoursesDropdownOpen(false)}
            >
              <button className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 flex items-center group">
                <span>Courses</span>
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isCoursesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
              {isCoursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl py-2 z-50 border border-gray-200/20 animate-fadeInUp">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    Our Programs
                  </div>
                  {courseCategories.map((category) => (
                    <Link
                      key={category.value}
                      href={`/courses?category=${category.value}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 group"
                    >
                      <span className="text-lg mr-3">{category.icon}</span>
                      <div>
                        <div className="font-medium">{category.label}</div>
                        <div className="text-xs text-gray-500">
                          Explore programs
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2">
                    <Link
                      href="/courses"
                      className="flex items-center px-4 py-3 text-sm font-medium text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    >
                      <span className="text-lg mr-3">🎓</span>
                      View All Courses
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Team Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsTeamDropdownOpen(true)}
              onMouseLeave={() => setIsTeamDropdownOpen(false)}
            >
              <button className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 flex items-center group">
                <span>Our Team</span>
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isTeamDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </button>
              {isTeamDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl py-2 z-50 border border-gray-200/20 animate-fadeInUp">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    Meet Our Team
                  </div>
                  {teamCategories.map((category) => (
                    <Link
                      key={category.value}
                      href={`/team?category=${category.value}`}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 group"
                    >
                      <span className="text-lg mr-3">{category.icon}</span>
                      <div>
                        <div className="font-medium">{category.label}</div>
                        <div className="text-xs text-gray-500">Our experts</div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2">
                    <Link
                      href="/team"
                      className="flex items-center px-4 py-3 text-sm font-medium text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    >
                      <Users className="w-4 h-4 mr-3" />
                      View All Team
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/alumni"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 group"
            >
              <span>Alumni</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link
              href="/gallery"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 group flex items-center"
            >
              <Camera className="w-4 h-4 mr-1" />
              <span>Gallery</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link
              href="/contact"
              className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50 group flex items-center"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span>Contact</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Button
              asChild
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-lg"
            >
              <Link href="/apply" className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Apply Now
              </Link>
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fadeInUp">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-b-xl border-t border-gray-200/20 shadow-lg">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg mr-3">🏠</span>
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg mr-3">ℹ️</span>
                About
              </Link>
              <Link
                href="/courses"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg mr-3">📚</span>
                Courses
              </Link>
              <Link
                href="/team"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg mr-3">👥</span>
                Our Team
              </Link>
              <Link
                href="/alumni"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg mr-3">🎓</span>
                Alumni
              </Link>
              <Link
                href="/gallery"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Camera className="w-5 h-5 mr-3" />
                Gallery
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 mr-3" />
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <Link
                  href="/apply"
                  className="flex items-center px-4 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
