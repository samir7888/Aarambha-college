import { TeamMember, Course, Alumni } from '@/types';

export const teamMembers: TeamMember[] = [
  // BODs
  {
    id: '1',
    name: 'Dr. Rajesh Sharma',
    position: 'Chairman',
    category: 'bods',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'chairman@aarambha.edu.np',
    phone: '+977-1-4567890',
    qualification: 'PhD in Education Management',
    experience: '25 years',
    specialization: 'Educational Leadership'
  },
  {
    id: '2',
    name: 'Mrs. Sunita Pradhan',
    position: 'Vice Chairman',
    category: 'bods',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'vicechairman@aarambha.edu.np',
    phone: '+977-1-4567891',
    qualification: 'MBA in Finance',
    experience: '20 years',
    specialization: 'Financial Management'
  },
  
  // Principal
  {
    id: '3',
    name: 'Dr. Kiran Thapa',
    position: 'Principal',
    category: 'principal',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'principal@aarambha.edu.np',
    phone: '+977-1-4567892',
    qualification: 'PhD in Computer Science',
    experience: '18 years',
    specialization: 'Academic Administration'
  },

  // Academics
  {
    id: '4',
    name: 'Prof. Ravi Kumar',
    position: 'Head of Science Department',
    category: 'academics',
    image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'ravi.kumar@aarambha.edu.np',
    phone: '+977-1-4567893',
    qualification: 'MSc in Physics',
    experience: '15 years',
    specialization: 'Physics & Mathematics'
  },
  {
    id: '5',
    name: 'Dr. Meera Joshi',
    position: 'English Department Head',
    category: 'academics',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'meera.joshi@aarambha.edu.np',
    phone: '+977-1-4567894',
    qualification: 'PhD in English Literature',
    experience: '12 years',
    specialization: 'English Literature & Communication'
  },

  // Admins
  {
    id: '6',
    name: 'Mr. Ashok Rai',
    position: 'Administrative Officer',
    category: 'admins',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'ashok.rai@aarambha.edu.np',
    phone: '+977-1-4567895',
    qualification: 'MBA in Administration',
    experience: '10 years',
    specialization: 'Administrative Management'
  },
  {
    id: '7',
    name: 'Ms. Priya Tamang',
    position: 'Admission Officer',
    category: 'admins',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'priya.tamang@aarambha.edu.np',
    phone: '+977-1-4567896',
    qualification: 'Bachelor in Management',
    experience: '8 years',
    specialization: 'Student Admissions'
  },

  // Support Staff
  {
    id: '8',
    name: 'Mr. Sanjay Lama',
    position: 'IT Support Manager',
    category: 'support',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'sanjay.lama@aarambha.edu.np',
    phone: '+977-1-4567897',
    qualification: 'Bachelor in Computer Engineering',
    experience: '6 years',
    specialization: 'IT Infrastructure'
  },
  {
    id: '9',
    name: 'Mrs. Maya Gurung',
    position: 'Library Manager',
    category: 'support',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    email: 'maya.gurung@aarambha.edu.np',
    phone: '+977-1-4567898',
    qualification: 'Master in Library Science',
    experience: '9 years',
    specialization: 'Library Management'
  }
];

export const courses: Course[] = [
  // +2 Courses
  {
    id: '1',
    name: '+2 Science',
    category: '+2',
    duration: '2 years',
    description: 'Comprehensive science program preparing students for higher education in science and technology fields.',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Nepali'],
    eligibility: 'SLC/SEE passed with minimum 2.0 GPA',
    fees: 'NPR 50,000 per year'
  },
  {
    id: '2',
    name: '+2 Management',
    category: '+2',
    duration: '2 years',
    description: 'Business and management focused program developing entrepreneurial and leadership skills.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    subjects: ['Accountancy', 'Economics', 'Business Studies', 'Marketing', 'English', 'Nepali'],
    eligibility: 'SLC/SEE passed with minimum 2.0 GPA',
    fees: 'NPR 45,000 per year'
  },
  {
    id: '3',
    name: '+2 Humanities',
    category: '+2',
    duration: '2 years',
    description: 'Liberal arts program focusing on social sciences, literature, and human culture.',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=600',
    subjects: ['English', 'Nepali', 'History', 'Geography', 'Sociology', 'Psychology'],
    eligibility: 'SLC/SEE passed with minimum 2.0 GPA',
    fees: 'NPR 40,000 per year'
  },

  // Diploma Courses
  {
    id: '4',
    name: 'Diploma in Computer Engineering',
    category: 'diploma',
    duration: '3 years',
    description: 'Technical program covering computer hardware, software, and networking technologies.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    subjects: ['Programming', 'Computer Networks', 'Database Management', 'Web Development', 'System Analysis'],
    eligibility: 'SLC/SEE passed with minimum 2.5 GPA in Science/Mathematics',
    fees: 'NPR 80,000 per year'
  },
  {
    id: '5',
    name: 'Diploma in Electrical Engineering',
    category: 'diploma',
    duration: '3 years',
    description: 'Comprehensive electrical engineering program with practical and theoretical components.',
    image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=600',
    subjects: ['Circuit Analysis', 'Power Systems', 'Electronics', 'Control Systems', 'Electrical Machines'],
    eligibility: 'SLC/SEE passed with minimum 2.5 GPA in Science/Mathematics',
    fees: 'NPR 85,000 per year'
  },
  {
    id: '6',
    name: 'Diploma in Civil Engineering',
    category: 'diploma',
    duration: '3 years',
    description: 'Civil engineering program focusing on construction, infrastructure, and project management.',
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
    subjects: ['Structural Engineering', 'Surveying', 'Construction Management', 'Environmental Engineering', 'Hydraulics'],
    eligibility: 'SLC/SEE passed with minimum 2.5 GPA in Science/Mathematics',
    fees: 'NPR 75,000 per year'
  }
];

export const alumni: Alumni[] = [
  {
    id: '1',
    name: 'Bikash Shrestha',
    graduationYear: 2022,
    course: '+2 Science',
    currentPosition: 'Software Engineer',
    company: 'TechHub Nepal',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'Aarambha College provided me with a strong foundation in science that helped me excel in my engineering studies.',
    achievements: ['Dean\'s List Graduate', 'Best Student Award 2022', 'Inter-college Science Competition Winner']
  },
  {
    id: '2',
    name: 'Sneha Maharjan',
    graduationYear: 2021,
    course: 'Diploma in Computer Engineering',
    currentPosition: 'Full Stack Developer',
    company: 'CloudTech Solutions',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The practical approach of teaching at Aarambha College helped me gain real-world experience.',
    achievements: ['Outstanding Graduate', 'Project Excellence Award', 'Industry Internship Recognition']
  },
  {
    id: '3',
    name: 'Arjun Thapa',
    graduationYear: 2020,
    course: '+2 Management',
    currentPosition: 'Business Analyst',
    company: 'Himalayan Bank',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The management program at Aarambha College equipped me with essential business skills.',
    achievements: ['Valedictorian', 'Business Plan Competition Winner', 'Leadership Excellence Award']
  },
  {
    id: '4',
    name: 'Priyanka Rai',
    graduationYear: 2023,
    course: 'Diploma in Civil Engineering',
    currentPosition: 'Junior Engineer',
    company: 'Construction Company Ltd.',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The hands-on training and industry exposure at Aarambha College was invaluable.',
    achievements: ['Technical Excellence Award', 'Best Final Year Project', 'Industry Collaboration Certificate']
  },
  {
    id: '5',
    name: 'Rohit Poudel',
    graduationYear: 2019,
    course: '+2 Humanities',
    currentPosition: 'Content Writer',
    company: 'Digital Marketing Agency',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The diverse curriculum in humanities opened up many career opportunities for me.',
    achievements: ['Creative Writing Award', 'Cultural Program Coordinator', 'Alumni Ambassador']
  },
  {
    id: '6',
    name: 'Anita Gurung',
    graduationYear: 2021,
    course: 'Diploma in Electrical Engineering',
    currentPosition: 'Electrical Engineer',
    company: 'Nepal Electricity Authority',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimonial: 'The strong technical foundation from Aarambha College helped me secure a government position.',
    achievements: ['Merit-based Scholarship Recipient', 'Technical Innovation Award', 'Women in Engineering Recognition']
  }
];