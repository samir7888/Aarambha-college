"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, ArrowRight, BookOpen, DollarSign } from "lucide-react";
import { courses } from "@/data/mockData";

const CoursesPage = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && ["+2", "diploma"].includes(category)) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const filteredCourses = (category: string) => {
    if (category === "all") return courses;
    return courses.filter((course) => course.category === category);
  };

  const CourseCard = ({ course }: { course: (typeof courses)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
          {course.category}
        </Badge>
      </div>
      <CardHeader className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{course.name}</CardTitle>
          <Badge variant="outline" className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {course.duration}
          </Badge>
        </div>
        <CardDescription className="text-gray-600">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>
              <strong>Eligibility:</strong> {course.eligibility}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="w-4 h-4 mr-2" />
            <span className="text-lg font-semibold text-blue-600">
              {course.fees}
            </span>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <BookOpen className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">
                Subjects:
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {course.subjects.map((subject, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href={`/apply?course=${course.id}`}>
            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
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
              <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
              Quality Programs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Courses
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed to prepare
              you for success in your chosen career path and future endeavors.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="+2">+2 Programs</TabsTrigger>
              <TabsTrigger value="diploma">Diploma Programs</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses("all").map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="+2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  +2 Programs
                </h2>
                <p className="text-gray-600 text-lg">
                  Our +2 programs provide a strong foundation for higher
                  education and career development. Choose from Science,
                  Management, and Humanities streams.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses("+2").map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diploma">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Diploma Programs
                </h2>
                <p className="text-gray-600 text-lg">
                  Our diploma programs offer specialized technical education
                  with hands-on training to prepare you for immediate entry into
                  the workforce.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses("diploma").map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who started their careers at
            Aarambha College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
