export interface TeamMember {
  id: string;
  name: string;
  position: string;
  category: 'bods' | 'principal' | 'academics' | 'admins' | 'support';
  image: string;
  email: string;
  phone: string;
  qualification: string;
  experience: string;
  specialization?: string;
}

export interface Course {
  id: string;
  name: string;
  category: '+2' | 'diploma';
  duration: string;
  description: string;
  image: string;
  subjects: string[];
  eligibility: string;
  fees: string;
}

export interface Alumni {
  id: string;
  name: string;
  graduationYear: number;
  course: string;
  currentPosition: string;
  company: string;
  image: string;
  testimonial: string;
  achievements: string[];
}

export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  course: string;
  previousEducation: string;
  guardianName: string;
  guardianPhone: string;
  emergencyContact: string;
}