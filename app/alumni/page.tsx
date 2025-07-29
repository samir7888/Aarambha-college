import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building, Award, Quote, Users } from "lucide-react";
import { alumni } from "@/data/mockData";

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
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
              <Award className="w-4 h-4 mr-2 text-yellow-400" />
              Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Alumni
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Celebrating the success stories of our graduates who are making a
              difference in their fields and communities worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Graduates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                95%
              </div>
              <div className="text-gray-600">Employment Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Profiles */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet some of our outstanding alumni who have achieved remarkable
              success in their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alum) => (
              <Card
                key={alum.id}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {alum.name}
                  </CardTitle>
                  <p className="text-blue-600 font-medium">
                    {alum.currentPosition}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{alum.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>
                      Graduated in {alum.graduationYear} - {alum.course}
                    </span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <Quote className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600 italic">
                        "{alum.testimonial}"
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 mr-2 text-orange-600" />
                      <span className="text-sm font-medium text-gray-700">
                        Achievements:
                      </span>
                    </div>
                    <div className="space-y-1">
                      {alum.achievements.map((achievement, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs mr-1 mb-1"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Alumni Network
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Are you an Aarambha College graduate? Connect with us and be part of
            our growing alumni community.
          </p>
          <div className="space-y-4">
            <p className="text-blue-100">
              Contact us at:{" "}
              <a
                href="mailto:alumni@aarambha.edu.np"
                className="text-white font-semibold hover:underline"
              >
                alumni@aarambha.edu.np
              </a>
            </p>
            <p className="text-blue-100">
              Phone:{" "}
              <a
                href="tel:+977-1-4567890"
                className="text-white font-semibold hover:underline"
              >
                +977-1-4567890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
