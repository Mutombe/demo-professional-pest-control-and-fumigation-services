export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Professional Pest Control",
    legalName: "Professional Pest Control and Fumigation Services",
    tagline: "Your Space. Pest-Free. Guaranteed.",
    description:
      "Professional Pest Control and Fumigation Services delivers expert pest management solutions for homes and businesses across Harare. Licensed, insured, and committed to safe, effective treatments.",
    phone: "+263 77 683 9678",
    phoneRaw: "+263776839678",
    whatsappNumber: "263776839678",
    email: "info@propestcontrol.co.zw",
    address: "59 Central Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 9,
    established: "2016",
    yearsExperience: "8+",
    projectsCompleted: "10,000+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "professional-pest-control-and-fumigation-services-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Professional",
    logoLine2: "Pest Control",
  },

  hero: {
    badge: "Harare's Licensed Pest Control Specialists",
    titleParts: [
      { text: "YOUR SPACE " },
      { text: "PEST-FREE", highlight: true },
      { text: " GUARANTEED." },
    ],
    subtitle:
      "Licensed technicians, eco-safe treatments, and guaranteed results. 10,000+ properties treated across Harare with a 100% satisfaction rate.",
    ctaPrimary: "Book Treatment",
    ctaSecondary: "Get Free Quote",
    trustBadge: "10,000+ Properties Treated",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85", alt: "Professional Pest Control professional image 1" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85", alt: "Professional Pest Control professional image 2" },
      { url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85", alt: "Professional Pest Control showcase" },
    ],
  },

  stats: [
    { number: "10000+", label: "Treatments Done" },
    { number: "8+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "5.0", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "General Pest Control",
      desc: "Comprehensive treatment for cockroaches, ants, spiders, and general household pests using eco-safe formulations.",
      icon: "Shield",
    },
    {
      title: "Termite Treatment",
      desc: "Pre-construction and post-construction termite barriers. Soil treatment, wood treatment, and baiting systems.",
      icon: "Buildings",
    },
    {
      title: "Fumigation Services",
      desc: "Professional fumigation for warehouses, grain stores, and commercial premises using certified fumigants.",
      icon: "Leaf",
    },
    {
      title: "Rodent Control",
      desc: "Strategic baiting, trapping, and proofing solutions for rat and mouse infestations in homes and businesses.",
      icon: "Star",
    },
    {
      title: "Bed Bug Elimination",
      desc: "Heat treatment and chemical applications for complete bed bug elimination. Hotel and residential specialist.",
      icon: "HardHat",
    },
    {
      title: "Sanitization",
      desc: "Deep sanitization and disinfection services for offices, restaurants, and public spaces. COVID-era protocols maintained.",
      icon: "Lightbulb",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "General Pest Control",
        slug: "general-pest-control",
        desc: "Comprehensive treatment for cockroaches, ants, spiders, and general household pests using eco-safe formulations.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      },
      {
        title: "Termite Treatment",
        slug: "termite-treatment",
        desc: "Pre-construction and post-construction termite barriers. Soil treatment, wood treatment, and baiting systems.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
      {
        title: "Fumigation Services",
        slug: "fumigation-services",
        desc: "Professional fumigation for warehouses, grain stores, and commercial premises using certified fumigants.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      },
      {
        title: "Rodent Control",
        slug: "rodent-control",
        desc: "Strategic baiting, trapping, and proofing solutions for rat and mouse infestations in homes and businesses.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
      {
        title: "Bed Bug Elimination",
        slug: "bed-bug-elimination",
        desc: "Heat treatment and chemical applications for complete bed bug elimination. Hotel and residential specialist.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
      },
      {
        title: "Sanitization",
        slug: "sanitization",
        desc: "Deep sanitization and disinfection services for offices, restaurants, and public spaces. COVID-era protocols maintained.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Professional",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in general pest control.",
        client: "Commercial Client",
        services: ["General Pest Control", "Termite Treatment"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Professional",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in termite treatment.",
        client: "Residential Client",
        services: ["Termite Treatment", "Fumigation Services"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Professional",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in fumigation services.",
        client: "Industrial Client",
        services: ["Fumigation Services", "Rodent Control"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Professional",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in rodent control.",
        client: "Institutional Client",
        services: ["Rodent Control", "Bed Bug Elimination"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Professional",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in bed bug elimination.",
        client: "Commercial Client",
        services: ["Bed Bug Elimination", "Sanitization"],
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Professional",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in sanitization.",
        client: "Residential Client",
        services: ["Sanitization", "General Pest Control"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Professional Pest Control eliminated our cockroach problem permanently. After years of DIY attempts, one professional treatment solved everything.",
      name: "Chipo Mawere",
      role: "Homeowner, Avondale",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "We contract them for quarterly treatments at all our restaurants. The service is reliable, the products are safe, and we have zero pest issues.",
      name: "Tawanda Nyika",
      role: "Restaurant Chain Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "The termite treatment they did on our warehouse saved us from what could have been structural disaster. Thorough, professional, and affordable.",
      name: "Bernard Moyo",
      role: "Warehouse Manager",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Discrete, professional, and effective. They treated our bed bug problem with heat treatment and it was resolved completely in one visit.",
      name: "Nyasha Gumbo",
      role: "Hotel Manager, Avenues",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Professional Pest Control was founded on Central Avenue with a mission to bring world-class pest management to Zimbabwe. Our team of licensed technicians combines scientific knowledge with practical experience to deliver guaranteed results.",
      "With over 10,000 treatments completed and a perfect Google rating, we have become Harare's most trusted name in pest control. Our eco-safe approach protects your health while eliminating the problem.",
    ],
    values: [
      { title: "Licensed & Insured", desc: "Fully licensed by Environmental Management Agency. Professional indemnity insurance for total peace of mind." },
      { title: "Eco-Safe Products", desc: "WHO-approved treatments that are safe for children, pets, and the environment while being lethal to pests." },
      { title: "Guaranteed Results", desc: "If the pests return within our warranty period, we retreat at no additional cost. Your satisfaction is guaranteed." },
      { title: "Discreet Service", desc: "Unmarked vehicles and professional technicians in plain clothes. Your privacy is respected at all times." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Professional Pest Control eliminated our cockroach problem permanently. After years of DIY attempts, one professional treatment solved everything.", name: "Chipo Mawere", role: "Homeowner, Avondale", rating: 5 },
      { text: "We contract them for quarterly treatments at all our restaurants. The service is reliable, the products are safe, and we have zero pest issues.", name: "Tawanda Nyika", role: "Restaurant Chain Owner", rating: 5 },
      { text: "The termite treatment they did on our warehouse saved us from what could have been structural disaster. Thorough, professional, and affordable.", name: "Bernard Moyo", role: "Warehouse Manager", rating: 5 },
      { text: "Discrete, professional, and effective. They treated our bed bug problem with heat treatment and it was resolved completely in one visit.", name: "Nyasha Gumbo", role: "Hotel Manager, Avenues", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Professional Pest Control",
        address: "59 Central Ave, Harare, Zimbabwe",
        phone: "+263 77 683 9678",
        email: "info@propestcontrol.co.zw",
      },
    ],
  },

  homeCta: {
    title: "RECLAIM YOUR SPACE",
    subtitle: "Licensed technicians, guaranteed results, and eco-safe treatments. Book your pest control treatment today.",
    ctaPrimary: "Book Treatment",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello! I need pest control/fumigation services for my property.",
    backgroundImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=85",
  },

  footer: {
    description: "Professional Pest Control and Fumigation Services delivers expert pest management solutions for homes and businesses across Harare. Licensed, insured,...",
    copyright: "Professional Pest Control",
  },
};

export default siteData;
