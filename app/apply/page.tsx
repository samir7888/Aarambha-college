"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, FileText } from "lucide-react";
import { courses } from "@/data/mockData";
import { ApplicationData } from "@/types";

const ApplyPageContent = () => {
  const searchParams = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    course: "",
    previousEducation: "",
    guardianName: "",
    guardianPhone: "",
    emergencyContact: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const courseId = searchParams.get("course");
    if (courseId) {
      const course = courses.find((c) => c.id === courseId);
      if (course) {
        setSelectedCourse(course.id);
        setFormData((prev) => ({ ...prev, course: course.name }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCourseChange = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      setSelectedCourse(courseId);
      setFormData((prev) => ({ ...prev, course: course.name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Application submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-700">
              Application Submitted!
            </CardTitle>
            <CardDescription>
              Thank you for your application. We will review your information
              and contact you within 3-5 business days.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Application ID:{" "}
              <strong>AC{Date.now().toString().slice(-6)}</strong>
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Please save this ID for future reference.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
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
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Start Your Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Apply
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Online
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards your future. Complete our online
              application form to join Aarambha College and unlock your
              potential.
            </p>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Course Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Course Selection
                </CardTitle>
                <CardDescription>
                  Choose the program you wish to apply for.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="course">Select Course *</Label>
                    <Select
                      value={selectedCourse}
                      onValueChange={handleCourseChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{course.name}</span>
                              <Badge variant="outline" className="ml-2">
                                {course.category}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedCourse && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      {(() => {
                        const course = courses.find(
                          (c) => c.id === selectedCourse
                        );
                        return course ? (
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2">
                              {course.name}
                            </h4>
                            <p className="text-sm text-blue-700 mb-2">
                              {course.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <strong>Duration:</strong> {course.duration}
                              </div>
                              <div>
                                <strong>Fees:</strong> {course.fees}
                              </div>
                              <div className="md:col-span-2">
                                <strong>Eligibility:</strong>{" "}
                                {course.eligibility}
                              </div>
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your personal details accurately.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) =>
                        handleInputChange("gender", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Full Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educational Background */}
            <Card>
              <CardHeader>
                <CardTitle>Educational Background</CardTitle>
                <CardDescription>
                  Information about your previous education.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="previousEducation">
                    Previous Education Details *
                  </Label>
                  <Textarea
                    id="previousEducation"
                    placeholder="Please provide details about your previous education (School name, Board, Year of completion, Grade/Percentage)"
                    value={formData.previousEducation}
                    onChange={(e) =>
                      handleInputChange("previousEducation", e.target.value)
                    }
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Guardian Information */}
            <Card>
              <CardHeader>
                <CardTitle>Guardian Information</CardTitle>
                <CardDescription>
                  Details of your parent or guardian.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="guardianName">Guardian Name *</Label>
                    <Input
                      id="guardianName"
                      type="text"
                      value={formData.guardianName}
                      onChange={(e) =>
                        handleInputChange("guardianName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                    <Input
                      id="guardianPhone"
                      type="tel"
                      value={formData.guardianPhone}
                      onChange={(e) =>
                        handleInputChange("guardianPhone", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="emergencyContact">
                      Emergency Contact *
                    </Label>
                    <Input
                      id="emergencyContact"
                      type="text"
                      placeholder="Name and phone number"
                      value={formData.emergencyContact}
                      onChange={(e) =>
                        handleInputChange("emergencyContact", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Required Documents
                </CardTitle>
                <CardDescription>
                  Please prepare the following documents for submission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Documents Required:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
                    <li>SLC/SEE Certificate (Scanned Copy)</li>
                    <li>SLC/SEE Mark Sheet (Scanned Copy)</li>
                    <li>Character Certificate</li>
                    <li>Passport Size Photos (2 copies)</li>
                    <li>Citizenship Certificate (Scanned Copy)</li>
                    <li>Transfer Certificate (if applicable)</li>
                  </ul>
                  <p className="text-sm text-yellow-700 mt-2">
                    <strong>Note:</strong> Please bring original documents
                    during the admission process.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 px-8"
                  >
                    Submit Application
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    By submitting this application, you agree to our terms and
                    conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

const ApplyPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading application form...</p>
          </div>
        </div>
      }
    >
      <ApplyPageContent />
    </Suspense>
  );
};

export default ApplyPage;
