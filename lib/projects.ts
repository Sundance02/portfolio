export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  techStack: string[];
  role: string;
  duration: string;
  heroImage: string;
  galleryImages: string[];
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'aerocast',
    title: 'Aerocast',
    subtitle: 'Next-generation atmospheric intelligence. Bridging the gap between raw data and actionable health safety.',
    description: 'Developed a comprehensive weather forecast website using Next.js and MongoDB, integrating the OpenWeather API to provide data including temperature, PM2.5 levels, and daily forecasts.',
    challenge: 'The core challenge was to translate abstract environmental metrics into meaningful human experience. The website incorporates an interactive global map using Open Street Map to visualize environmental metrics worldwide, while allowing users to search for cities and save favorite locations for personalized tracking. This project delivers weather and PM2.5 data into actionable health and safety recommendations. It optimizes daily planning and enhances public awareness of environmental conditions.',
    techStack: ['Next.js', 'MongoDB Atlas', 'Tailwind CSS', 'OpenWeather API', 'Leaflet.js'],
    role: 'Full-stack Developer & UI Designer',
    duration: '1 Month (Dec 2024)',
    heroImage: '/projects/Aerocast/Aero.png',
    galleryImages: [
        '/projects/Aerocast/Aero.png'
    ],
    category: 'Full Stack',
    year: '2024'
  },
  {
    id: 'offlearn',
    title: 'OFFlearn',
    subtitle: 'Offline accessible learning management system. Empowering education without boundaries.',
    description: 'Developed a learning management system (LMS) using Django, with a user interface built with HTML, CSS (Tailwind CSS), and JavaScript.',
    challenge: 'The system enabled instructors to create and manage courses, including adding learning topics, uploading files, and creating quizzes with various question types (multiple-choice, essay). Students could search for courses, enroll, access learning materials, and take quizzes. The goal was to provide a seamless learning experience that remains performant and user-friendly.',
    techStack: ['Django', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3', 'MySQL'],
    role: 'Full-stack Developer',
    duration: '2 Months (Sep 2024 - Oct 2024)',
    heroImage: '/projects/OFFlearn/2.png',
    galleryImages: [
        '/projects/OFFlearn/2.png',
        '/projects/OFFlearn/3.png',
        '/projects/OFFlearn/4.png',
        '/projects/OFFlearn/5.png'
    ],
    category: 'E-Learning • Web',
    year: '2024'
  },
  {
    id: 'thesis-project',
    title: 'Thesis Project',
    subtitle: 'AI-Powered Waste Classification. Transforming waste management through computer vision.',
    description: 'Developed a mobile waste classification app with a React Native frontend and an Express.js backend.',
    challenge: 'Evaluated and integrated optimized deep learning models (such as MobileNetV3 and GhostNetV2), utilizing fine-tuning and data augmentation to ensure high-precision automated sorting. The project functions as an educational guide to cultivate proper disposal habits and eliminate sorting errors. This ensures high-purity recycling streams, optimizes waste management workflows, and significantly reduces the need for manual post-sorting.',
    techStack: ['React Native', 'Express.js', 'Deep Learning (MobileNetV3/GhostNetV2)', 'Node.js', 'PostgreSQL'],
    role: 'Lead Researcher & Developer',
    duration: 'Current (Started July 2025)',
    heroImage: '/projects/Thesis Project/application/Screenshot_20260325_131427.png',
    galleryImages: [
        '/projects/Thesis Project/application/Screenshot_20260325_131427.png',
        '/projects/Thesis Project/application/Screenshot_20260325_131505.png',
        '/projects/Thesis Project/application/Screenshot_20260325_131741.png',
        '/projects/Thesis Project/application/Screenshot_20260325_131750.png',
        '/projects/Thesis Project/application/Screenshot_20260325_131849.png',
        '/projects/Thesis Project/application/Screenshot_20260325_131918.png',
        '/projects/Thesis Project/administrator website/Screenshot 2026-03-25 130549.png',
        '/projects/Thesis Project/administrator website/Screenshot 2026-03-25 130643.png',
        '/projects/Thesis Project/administrator website/Screenshot 2026-03-25 130712.png',
        '/projects/Thesis Project/administrator website/Screenshot 2026-03-25 130738.png'
    ],
    category: 'Academic • Mobile App',
    year: '2025'
  }
];
