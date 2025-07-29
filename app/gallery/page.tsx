"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Image as ImageIcon,
  Users,
  GraduationCap,
  BookOpen,
  Award,
  X,
  ZoomIn,
  Download,
  Heart,
  Share2,
} from "lucide-react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Campus Overview",
      category: "campus",
      description: "Beautiful view of our main campus building",
      height: "h-64",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Modern Classroom",
      category: "facilities",
      description: "State-of-the-art classroom with latest technology",
      height: "h-80",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Graduation Ceremony",
      category: "events",
      description: "Annual graduation ceremony celebration",
      height: "h-72",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Faculty Meeting",
      category: "faculty",
      description: "Our dedicated faculty in discussion",
      height: "h-60",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Student Activities",
      category: "students",
      description: "Students engaged in learning activities",
      height: "h-96",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Library Study Area",
      category: "facilities",
      description: "Quiet study spaces in our modern library",
      height: "h-64",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Science Laboratory",
      category: "facilities",
      description: "Well-equipped science lab for practical learning",
      height: "h-80",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Student Presentation",
      category: "students",
      description: "Students presenting their projects",
      height: "h-72",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Computer Lab",
      category: "facilities",
      description: "Modern computer laboratory with latest equipment",
      height: "h-64",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Group Study",
      category: "students",
      description: "Collaborative learning environment",
      height: "h-88",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Awards Ceremony",
      category: "events",
      description: "Recognizing student achievements",
      height: "h-76",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Campus Garden",
      category: "campus",
      description: "Beautiful green spaces on campus",
      height: "h-64",
    },
  ];

  const categories = [
    { id: "all", label: "All Photos", icon: ImageIcon },
    { id: "campus", label: "Campus", icon: GraduationCap },
    { id: "facilities", label: "Facilities", icon: BookOpen },
    { id: "students", label: "Students", icon: Users },
    { id: "faculty", label: "Faculty", icon: Award },
    { id: "events", label: "Events", icon: Camera },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-10 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-400 rounded-full opacity-10 animate-float"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm mb-6 border border-white border-opacity-20">
              <Camera className="w-4 h-4 mr-2 text-pink-400" />
              Visual Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Photo
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore the vibrant life at Aarambha College through our photo
              gallery showcasing campus facilities, student activities, and
              memorable moments.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className={`break-inside-avoid group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-1 relative overflow-hidden ${image.height}`}
                onClick={() => openModal(image)}
              >
                {/* Card Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[1px] bg-white rounded-lg overflow-hidden">
                  <div className="relative h-full">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.category}
                    </Badge>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mt-4 text-white">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                  {selectedImage.category}
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-gray-800 hover:bg-white/70"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Like
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-gray-800 hover:bg-white/70"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-gray-800 hover:bg-white/70"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gallery Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our photo gallery captures the essence of life at Aarambha
              College.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-600 font-medium">Photos</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 font-medium">Events Covered</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-gray-600 font-medium">Years Documented</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-gray-600 font-medium">Memories Captured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
