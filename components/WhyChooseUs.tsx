import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  Briefcase,
  Globe,
  Heart,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description:
      "Learn from industry professionals and experienced educators who bring real-world knowledge to the classroom.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description:
      "Stay ahead with cutting-edge curriculum designed to meet tomorrow's industry demands and technological advances.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "100% placement assistance with dedicated career counseling, interview preparation, and industry connections.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Target,
    title: "Practical Learning",
    description:
      "Hands-on experience through projects, internships, and real-world applications that prepare you for success.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "International quality education with globally recognized certifications and industry-standard practices.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Heart,
    title: "Student-Centric",
    description:
      "Personalized attention with small class sizes, mentorship programs, and comprehensive student support services.",
    color: "from-red-500 to-red-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-4 border border-white border-opacity-20">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            Excellence in Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aarambha College?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the preferred choice for thousands of
            students seeking quality education and successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <div className="text-gray-300 font-medium">
                Years of Excellence
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-300 font-medium">Expert Faculty</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                12+
              </div>
              <div className="text-gray-300 font-medium">Programs Offered</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-300 font-medium">Placement Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
