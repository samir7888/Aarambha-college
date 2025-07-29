"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, GraduationCap, Clock, Users } from "lucide-react";
import { teamMembers } from "@/data/mockData";

const TeamPage = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (
      category &&
      ["bods", "principal", "academics", "admins", "support"].includes(category)
    ) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const filteredMembers = (category: string) => {
    if (category === "all") return teamMembers;
    return teamMembers.filter((member) => member.category === category);
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "bods":
        return "Board of Directors";
      case "principal":
        return "Principal";
      case "academics":
        return "Academic Faculty";
      case "admins":
        return "Administrative Staff";
      case "support":
        return "Support Staff";
      default:
        return "All Team Members";
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "bods":
        return "Meet our distinguished board members who provide strategic leadership and governance.";
      case "principal":
        return "Our principal leads the institution with vision and dedication to educational excellence.";
      case "academics":
        return "Our experienced faculty members are committed to providing quality education and mentorship.";
      case "admins":
        return "Our administrative team ensures smooth operations and excellent student services.";
      case "support":
        return "Our support staff provides essential services that enhance the learning environment.";
      default:
        return "Meet the dedicated professionals who make Aarambha College a center of educational excellence.";
    }
  };

  const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="text-center">
        <div className="relative mx-auto mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
            {getCategoryTitle(member.category)}
          </Badge>
        </div>
        <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
        <p className="text-blue-600 font-medium">{member.position}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-gray-600">
          <GraduationCap className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{member.qualification}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{member.experience} experience</span>
        </div>
        {member.specialization && (
          <div className="text-sm text-gray-600">
            <strong>Specialization:</strong> {member.specialization}
          </div>
        )}
        <div className="pt-4 border-t space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
            <a
              href={`mailto:${member.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              {member.email}
            </a>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
            <a
              href={`tel:${member.phone}`}
              className="hover:text-blue-600 transition-colors"
            >
              {member.phone}
            </a>
          </div>
        </div>
      </CardContent>
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
              'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
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
              <Users className="w-4 h-4 mr-2 text-purple-400" />
              Expert Professionals
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Meet the dedicated professionals who are committed to your
              educational success and personal growth through excellence in
              teaching.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="bods">BODs</TabsTrigger>
              <TabsTrigger value="principal">Principal</TabsTrigger>
              <TabsTrigger value="academics">Faculty</TabsTrigger>
              <TabsTrigger value="admins">Admins</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            {["all", "bods", "principal", "academics", "admins", "support"].map(
              (category) => (
                <TabsContent key={category} value={category}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {getCategoryTitle(category)}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {getCategoryDescription(category)}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredMembers(category).map((member) => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
