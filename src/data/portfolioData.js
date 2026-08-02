import adarshAvatar from '../assets/adarsh_profile.jpg';

export const personalInfo = {
  name: "Adarsh Pandey",
  title: "Software Engineer | Full Stack Developer | Problem Solver",
  tagline: "Building scalable web applications, crafting efficient database systems, and solving complex algorithmic problems.",
  location: "Assam / Ghaziabad, India",
  openTo: "Software Development Engineer (SDE) Roles | Full Stack Developer | Backend Developer",
  email: "adarshpandey0873@gmail.com",
  phone: "+91-8076996494",
  github: "https://github.com/adarsh7624",
  linkedin: "https://www.linkedin.com/in/adarsh-pandey",
  leetcode: "https://leetcode.com/u/2EEwyv6rtJ/",
  codeforces: "https://codeforces.com/profile/adarsh7624",
  resumeUrl: "#resume",
  avatar: adarshAvatar,
  batch: "NIT SILCHAR '27",
  typingRoles: [
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "LeetCode Rating 1738",
    "Azure DevOps Intern",
    "Competitive Programmer"
  ],
  stats: [
    { label: "DSA Problems Solved", value: 500, suffix: "+", color: "from-blue-500 to-cyan-400" },
    { label: "SQL Problems Solved", value: 50, suffix: "+", color: "from-purple-500 to-indigo-400" },
    { label: "LeetCode Max Rating", value: 1738, suffix: "", color: "from-amber-400 to-orange-500" },
    { label: "CGPA (NIT Silchar '27)", value: 8.27, suffix: "/10", color: "from-emerald-400 to-teal-500", isDecimal: true }
  ]
};

export const aboutMe = {
  paragraph1: "I am a B.Tech Electrical Engineering undergraduate at National Institute of Technology Silchar (NIT Silchar, Class of 2027) with a CGPA of 8.27, passionate about Software Engineering, Azure DevOps practices, and Algorithmic Problem Solving.",
  paragraph2: "I specialize in building full-stack web applications using the MERN Stack and Next.js, while maintaining strong expertise in Azure DevOps, CI/CD pipelines, REST APIs, SQL database design, and Data Structures & Algorithms.",
  paragraph3: "I have hands-on experience as an Application Engineering Intern at Accenture working with Azure DevOps, as well as leadership roles including Technical Head of Esports Club and Development Wing Member at Electra Society, NIT Silchar.",
  paragraph4: "Currently seeking Software Development Engineer opportunities where I can solve high-impact engineering problems and build robust applications.",
  highlights: [
    { title: "DevOps & CI/CD Pipelines", desc: "Hands-on with Azure DevOps, Azure Boards, Repos, Pipelines & GitHub Actions", icon: "Server" },
    { title: "Full-Stack Development", desc: "Building scalable web apps using MERN Stack, Next.js, Razorpay & JWT Auth", icon: "Layout" },
    { title: "Algorithmic Excellence", desc: "LeetCode Max Rating 1738 | 500+ DSA & 50+ SQL Problems Solved", icon: "Code2" },
    { title: "Leadership & Events", desc: "Technical Head of Esports Club & Co-organizer of Hack-O-Verse Hackathon", icon: "Database" }
  ]
};

export const education = {
  institution: "National Institute of Technology, Silchar (NIT Silchar)",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Electrical Engineering",
  cgpa: "8.27 / 10",
  period: "Aug 2023 – May 2027",
  batch: "Class of 2027",
  location: "Assam, India",
  schooling: [
    { school: "Durgawati Hemraj Tah Saraswati Vidya Mandir", level: "Class 12", score: "90%", period: "2020 – 2022", location: "Ghaziabad, India" },
    { school: "Durgawati Hemraj Tah Saraswati Vidya Mandir", level: "Class 10", score: "83%", period: "2018 – 2020", location: "Ghaziabad, India" }
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management System (DBMS)",
    "Operating Systems (OS)",
    "Computer Networks (CN)",
    "Object Oriented Programming (OOP)",
    "Software Engineering"
  ]
};

export const experiences = [
  {
    company: "Accenture",
    role: "Application Engineering Intern",
    category: "Internships",
    duration: "May 2026 – Present",
    location: "Assam / Remote, India",
    type: "Enterprise Engineering Internship",
    badge: "Microsoft Azure DevOps",
    featuredMetric: "Enterprise SDLC & CI/CD",
    color: "from-blue-600 via-indigo-600 to-cyan-500",
    glowColor: "border-blue-500/50 shadow-blue-500/20",
    responsibilities: [
      "Gaining hands-on exposure to enterprise DevOps practices and the SDLC using Azure Boards, Repos, Pipelines, and Test Plans.",
      "Learning Agile/Scrum practices (sprint planning, backlog management) and using Git with CI/CD pipelines.",
      "Collaborating with cross-functional teams to implement scalable backend services and automated deployment flows.",
      "Participating in code reviews, architectural debugging sessions, and optimizing software deployment quality."
    ],
    tech: ["Azure DevOps", "Azure Pipelines", "Git", "Agile/Scrum", "CI/CD", "Testing"]
  },
  {
    company: "IEEE Student Branch, NIT Silchar",
    role: "Winter Intern (IS3IP-2024)",
    category: "Internships",
    duration: "Dec 2024 – Jan 2025",
    location: "NIT Silchar, Assam",
    type: "Research & Systems Internship",
    badge: "Under Prof. Ambrish Devanshu",
    featuredMetric: "Dual-Axis Tracking Systems",
    color: "from-purple-600 via-indigo-600 to-blue-500",
    glowColor: "border-purple-500/50 shadow-purple-500/20",
    responsibilities: [
      "Built a dual-axis solar tracker using Arduino and LDR sensors to improve solar energy capture.",
      "Integrated servo motors for real-time two-axis tracking, improving energy capture compared to a static panel in testing.",
      "Learned practical embedded systems software development and hardware testing workflows."
    ],
    tech: ["C++", "Arduino", "Embedded Systems", "LDR Sensors", "Hardware Prototyping"]
  },
  {
    company: "Esports Club, NIT Silchar",
    role: "Technical Head & Founding Member",
    category: "Leadership",
    duration: "Jul 2025 – Present",
    location: "NIT Silchar, Assam",
    type: "Executive Leadership & Tech Operations",
    badge: "Founding Member",
    featuredMetric: "30+ Member Team Managed",
    color: "from-amber-500 via-orange-600 to-red-600",
    glowColor: "border-amber-500/50 shadow-amber-500/20",
    responsibilities: [
      "Founding Member of the Esports Club; helped establish the club and build its early event and technical infrastructure.",
      "Coordinate a team of 30+ members responsible for event infrastructure, live broadcasts, and tournament management.",
      "Lead technical operations for campus-level esports tournaments, ensuring smooth execution and low-latency stream routing."
    ],
    tech: ["Team Leadership", "Live Streaming Infrastructure", "Event Operations", "Technical Management"]
  },
  {
    company: "Electra Society, NIT Silchar",
    role: "Development Wing Member",
    category: "Leadership",
    duration: "Jul 2024 – May 2025",
    location: "NIT Silchar, Assam",
    type: "Departmental Software Engineering",
    badge: "Web Dev & Hackathon Ops",
    featuredMetric: "300+ Students Impacted",
    color: "from-emerald-500 via-teal-600 to-cyan-600",
    glowColor: "border-emerald-500/50 shadow-emerald-500/20",
    responsibilities: [
      "Collaborated with a 5-member team to build internal tools and maintain the official Electra Society website.",
      "Helped organize the flagship inter-college hackathon Hack-O-Verse, coordinating logistics and technical setup.",
      "Engineered automated registration systems and user management portals."
    ],
    tech: ["React.js", "Next.js", "Web Development", "Hackathon Logistics"]
  }
];

export const skillsData = {
  "Programming Languages": [
    { name: "C++", level: 92, icon: "FileCode", experience: "Advanced DSA, Competitive Programming & LeetCode 1738" },
    { name: "C", level: 85, icon: "Code", experience: "Procedural Programming & Systems Logic" },
    { name: "JavaScript (ES6+)", level: 90, icon: "Js", experience: "Asynchronous JS, Event Loop, Full Stack Web Apps" },
    { name: "HTML5", level: 95, icon: "Code", experience: "Semantic HTML, Accessibility" },
    { name: "CSS3", level: 90, icon: "Palette", experience: "Flexbox, Grid, Animations" }
  ],
  "Frameworks": [
    { name: "React.js", level: 92, icon: "Atom", experience: "State Management, Hooks, Custom UI Components" },
    { name: "Next.js", level: 88, icon: "Zap", experience: "App Router, Role-based Auth, Clerk & MongoDB" },
    { name: "Node.js", level: 90, icon: "Server", experience: "Asynchronous I/O, REST APIs, Express Middleware" },
    { name: "Express.js", level: 90, icon: "Cpu", experience: "Backend Routing, JWT Auth, Razorpay Payment Gateway" }
  ],
  "Databases": [
    { name: "MongoDB", level: 88, icon: "Leaf", experience: "Document Schemas, Mongoose ODM, Aggregations" },
    { name: "SQL", level: 92, icon: "Database", experience: "50+ SQL Problems Solved, Relational DBs & PostgreSQL" }
  ],
  "Tools & DevOps": [
    { name: "Azure DevOps", level: 88, icon: "Cloud", experience: "Azure Boards, Repos, Pipelines & Test Plans" },
    { name: "Git & GitHub", level: 94, icon: "GitBranch", experience: "CI/CD Workflows, GitHub Actions & Version Control" },
    { name: "VS Code", level: 95, icon: "Monitor", experience: "Development Workflow, Extension Ecosystem" },
    { name: "Postman", level: 90, icon: "Send", experience: "API Endpoint Testing, Environment Configurations" }
  ],
  "Core CS & Electives": [
    { name: "Data Structures & Algorithms", level: 95, icon: "Brain", experience: "500+ Solved, LeetCode Max 1738, Codeforces Pupil" },
    { name: "Database Management System", level: 90, icon: "Database", experience: "50+ Solved, ER Modeling, Indexing & Normalization" },
    { name: "Object-Oriented Programming", level: 90, icon: "Box", experience: "Classes, Inheritance, Polymorphism in C++ & JS" },
    { name: "Operating Systems", level: 85, icon: "Cpu", experience: "Processes, Threads, Memory Management" },
    { name: "Computer Networks", level: 85, icon: "Wifi", experience: "TCP/IP, HTTP/REST Protocols" }
  ]
};

export const projects = [
  {
    id: "hungryhub",
    title: "HungryHub – Food Delivery Platform",
    subtitle: "Full-Stack Web App with Multi-Role Portals & Live Tracking",
    category: "Full Stack",
    featured: true,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT"],
    description: "Built a food delivery web application with separate flows for User, Shop Owner, and Delivery Partner roles, integrated with Razorpay payments and live location suggestions.",
    highlights: [
      "Built separate authenticated flows for User, Shop Owner, and Delivery Partner roles",
      "Implemented location-based restaurant suggestions and real-time delivery tracking",
      "Integrated Razorpay payment gateway for seamless digital transactions",
      "Developed REST APIs with Express.js and implemented JWT-based authentication"
    ],
    demoType: "food_sandbox",
    githubUrl: "https://github.com/adarsh7624/hungryhub-food-delivery",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "onecart",
    title: "OneCart – E-Commerce Website",
    subtitle: "Voice-Assisted Navigation & Advanced Product Search E-Commerce",
    category: "Full Stack",
    featured: true,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT"],
    description: "Built an e-commerce platform with voice-assisted navigation, advanced search filters, Razorpay payments, and an admin analytics dashboard.",
    highlights: [
      "Built e-commerce platform with voice-assisted navigation & advanced search filters",
      "Integrated Razorpay payment gateway & JWT-based authentication",
      "Admin Dashboard for inventory management and basic sales analytics",
      "Responsive MERN Stack architecture"
    ],
    demoType: "ai_sandbox",
    aiPromptSample: "Suggest high-performance laptops for competitive programming.",
    githubUrl: "https://github.com/adarsh7624/onecart-ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0a6756da99ec?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "electra",
    title: "Electra Society Portal – Academic Resource System",
    subtitle: "Academic Portal for 300+ Students @ NIT Silchar",
    category: "Next.js",
    featured: true,
    tech: ["Next.js", "MongoDB", "Clerk", "GitHub Actions", "Tailwind CSS"],
    description: "Built an academic portal used by 300+ students with role-based access control, event management, resource sharing, and GitHub Actions CI/CD.",
    highlights: [
      "Built academic portal serving 300+ students with role-based access control",
      "Integrated Clerk Authentication & MongoDB database",
      "Automated CI/CD pipeline using GitHub Actions",
      "Modules for event management, resource sharing, and user dashboards"
    ],
    demoType: "portal_sandbox",
    githubUrl: "https://github.com/adarsh7624/electra-society-portal",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "carepulse",
    title: "CarePulse – Healthcare Relational System",
    subtitle: "3NF Relational Database & Analytical Python Engine",
    category: "SQL / Database",
    featured: true,
    tech: ["SQL", "Python", "PostgreSQL", "SQLite", "Git"],
    description: "Designed a 3NF normalized relational database system for hospital management featuring 10+ interconnected tables, SQL triggers, B-Tree indexes, and CTE queries.",
    highlights: [
      "Designed a 3NF normalized relational database schema",
      "Implemented automated SQL Triggers for patient log auditing",
      "B-Tree Indexing for sub-millisecond query performance",
      "Window Functions & Common Table Expressions (CTEs)"
    ],
    demoType: "sql_sandbox",
    sqlQuerySample: `SELECT doctor_name, specialization, COUNT(appointment_id) AS total FROM doctors GROUP BY doctor_id;`,
    githubUrl: "https://github.com/adarsh7624/carepulse-healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
  }
];

export const achievements = [
  {
    title: "LeetCode Rating 1738",
    desc: "Achieved max rating of 1738 on LeetCode. Solved 500+ DSA and 50+ SQL problems across LeetCode, GeeksforGeeks, and Codeforces.",
    badge: "Max Rating 1738",
    icon: "Trophy",
    value: 1738,
    prefix: "Rating ",
    link: "https://leetcode.com/u/2EEwyv6rtJ/"
  },
  {
    title: "500+ DSA Problems Solved",
    desc: "Extensive problem-solving record mastering Data Structures & Algorithms in C++.",
    badge: "Algorithms Master",
    icon: "Brain",
    value: 500,
    suffix: "+",
    link: "https://leetcode.com/u/2EEwyv6rtJ/"
  },
  {
    title: "Codeforces Pupil (Max 1240)",
    desc: "Achieved Pupil rank on Codeforces (max rating 1240), regularly competing in timed contest rounds.",
    badge: "Pupil Rank",
    icon: "Zap",
    value: 1240,
    prefix: "Rating ",
    link: "https://codeforces.com/profile/adarsh7624"
  },
  {
    title: "Founding Member - Esports Club",
    desc: "Helped establish the Esports Club at NIT Silchar and build its early event & technical infrastructure.",
    badge: "Technical Head",
    icon: "Database",
    value: "Lead",
    suffix: "",
    link: "https://github.com/adarsh7624"
  }
];

export const codingProfiles = [
  {
    name: "GitHub",
    handle: "@adarsh7624",
    description: "Open Source Projects, Next.js & MERN Stack Repositories",
    link: "https://github.com/adarsh7624",
    icon: "Github",
    color: "from-slate-700 to-slate-900",
    badgeColor: "bg-slate-800 text-slate-200",
    stats: "github.com/adarsh7624"
  },
  {
    name: "LeetCode",
    handle: "@2EEwyv6rtJ",
    description: "Max Rating 1738 | 500+ DSA & 50+ SQL Solved",
    link: "https://leetcode.com/u/2EEwyv6rtJ/",
    icon: "Code2",
    color: "from-amber-600 to-orange-700",
    badgeColor: "bg-amber-900/50 text-amber-300",
    stats: "Rating 1738"
  },
  {
    name: "Codeforces",
    handle: "adarsh7624",
    description: "Pupil Rank | Max Rating 1240",
    link: "https://codeforces.com/profile/adarsh7624",
    icon: "BarChart3",
    color: "from-blue-600 to-cyan-700",
    badgeColor: "bg-blue-900/50 text-blue-300",
    stats: "Pupil 1240"
  },
  {
    name: "LinkedIn",
    handle: "Adarsh Pandey",
    description: "Connect for Software Engineering, Azure DevOps & SDE Roles",
    link: "https://www.linkedin.com/in/adarsh-pandey",
    icon: "Linkedin",
    color: "from-sky-600 to-blue-800",
    badgeColor: "bg-sky-900/50 text-sky-300",
    stats: "NIT Silchar '27"
  }
];

export const certifications = [
  {
    title: "IEEE Winter Internship Certificate (IS3IP-2024)",
    issuer: "IEEE Student Branch, NIT Silchar (Prof. Ambrish Devanshu)",
    date: "Dec 2024 – Jan 2025",
    description: "Built a dual-axis solar tracker using Arduino and LDR sensors with servo motor tracking to improve solar energy capture.",
    badge: "IEEE Certificate",
    credentialId: "IEEE-IS3IP-2024-NITS"
  },
  {
    title: "Finalist, DSA Coding Competition",
    issuer: "Knowvy Perks and Events",
    date: "2024",
    description: "Secured Finalist position in competitive Data Structures & Algorithms coding challenge.",
    badge: "Competition Finalist",
    credentialId: "KPE-DSA-FINALIST"
  }
];
