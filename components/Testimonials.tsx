import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sita Sharma",
    course: "+2 Science Graduate",
    year: "2023",
    image:
      "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
    testimonial:
      "Aarambha College provided me with an excellent foundation in science. The teachers were incredibly supportive and the practical labs were well-equipped. I couldn't have asked for a better start to my academic journey.",
    rating: 5,
    achievement: "Now studying Medicine at KU",
  },
  {
    id: 2,
    name: "Raj Thapa",
    course: "Diploma in Computer Engineering",
    year: "2022",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    testimonial:
      "The hands-on approach to learning at Aarambha College helped me develop practical skills that are directly applicable in the industry. The project-based learning was exceptional.",
    rating: 5,
    achievement: "Software Engineer at Tech Company",
  },
  {
    id: 3,
    name: "Maya Gurung",
    course: "+2 Management Graduate",
    year: "2023",
    image:
      "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
    testimonial:
      "The management program opened up numerous opportunities for me. The career guidance and placement support were exceptional. I learned both theory and practical business skills.",
    rating: 5,
    achievement: "Business Analyst at MNC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Student Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates about their transformative experience at
            Aarambha College and how it shaped their successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] bg-white rounded-lg"></div>

              <CardContent className="relative p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-blue-600" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current mr-1"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500 font-medium">
                    5.0
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic relative z-10">
                  "{testimonial.testimonial}"
                </p>

                {/* Student Info */}
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <ThumbsUp className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {testimonial.course}
                    </p>
                    <p className="text-sm text-gray-500">
                      Class of {testimonial.year}
                    </p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-sm font-medium text-blue-800">
                    🎉 {testimonial.achievement}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-600 font-medium">
                Student Satisfaction
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <div className="text-gray-600 font-medium">Placement Rate</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                2500+
              </div>
              <div className="text-gray-600 font-medium">Alumni Network</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                4.9
              </div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
