import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Play,
  Star,
  GraduationCap,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient-x"></div>

      {/* Background Image with Modern Overlay */}
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
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-indigo-400 rounded-full opacity-10 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm mb-6 border border-white border-opacity-20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Ranked #1 College in Nepal
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Shape Your
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Future Today
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              Join Aarambha College and unlock your potential with world-class
              education, cutting-edge facilities, and industry-focused programs
              designed for tomorrow's leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Link href="/apply">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white border-2 text-white hover:bg-white hover:text-purple-900 backdrop-blur-md bg-white bg-opacity-10"
              >
                <Link href="/courses" className="flex items-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Video
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">2,500+</div>
                <div className="text-blue-200 text-sm">Happy Students</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-purple-200 text-sm">Programs</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-pink-400 to-red-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-pink-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Expert Faculty
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Learn from industry professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Modern Curriculum
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Updated with latest industry trends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Career Support
                      </h3>
                      <p className="text-gray-300 text-sm">
                        100% placement assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
