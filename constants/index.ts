import { slugify } from "@/lib/utils";
import { CheckCircle, Clock, Layers, Palette, Search, Target, Users, Zap } from "lucide-react";

 export const images = [
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
      alt: "Future Vision",
      gradient: "from-cyan-500/20 via-blue-600/30 to-indigo-800/40"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face", 
      alt: "Innovation Vision",
      gradient: "from-purple-500/20 via-pink-600/30 to-red-800/40"
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
      alt: "Technology Vision", 
      gradient: "from-green-500/20 via-emerald-600/30 to-teal-800/40"
    }
  ];



  //  our services 
  export const services = [
    {
      icon: Search,
      title: "Research",
      items: [
        "Qualitative and quantitative user research",
        "User journey design", 
        "Rapid prototyping"
      ]
    },
    {
      icon: Target,
      title: "Strategy",
      items: [
        "Product strategy",
        "Business strategy",
        "Systems design"
      ]
    },
    {
      icon: Layers,
      title: "Product design",
      items: [
        "Platform architecture",
        "Information architecture",
        "User interface design"
      ]
    },
    {
      icon: Palette,
      title: "Visual design",
      items: [
        "Data visualization",
        "Internal proposal",
        "Brand identity"
      ]
    }
  ];





export const allProjects = [
  {
    pageTitle: "Explore Our Work",
    featured: true,
    title: "Anthem",
    subtitle: "Helping teams make decisions with real-time health data",
    description: "How TM designed a data-driven platform during COVID.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop&crop=face",
    slug: slugify("Anthem"),
  },
  {
    title: "Pulse AI working",
    subtitle: "Visualizing patient data to optimize outcomes",
    description: "An intelligent dashboard for medical professionals.",
    imageUrl: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    reverseColumn: true,
    reverse: true,
    color: "text-red-500",
    slug: slugify("Pulse AI working"),
  },
  {
    title: "Anthem",
    subtitle: "Helping teams make decisions with real-time health data",
    description: "How TM designed a data-driven platform during COVID.",
    imageUrl: "https://media.istockphoto.com/id/1979289151/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=GrvCSFwQFUuKN6batVV8RGDLAY3YMIxj_bJ4xdsVbGw=",
    reverseColumn: true,
    reverse: true,
    slug: slugify("Anthem 2"), // Unique slug
  },
  {
    title: "Forethought",
    subtitle: "Visualizing patient data to optimize outcomes",
    description: "An intelligent dashboard for medical professionals.",
    imageUrl: "https://media.istockphoto.com/id/2158919442/photo/digital-eye-ai-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=3pPriny2ZmQK4fq289jwODHuKg94Lytr5_S13JVi-h8=",
    reverseColumn: true,
    reverse: true,
    color: "text-[#0bbba9]",
    slug: slugify("Forethought"),
  },
  {
    title: "PulseAI",
    subtitle: "Visualizing patient data to optimize outcomes",
    description: "An intelligent dashboard for medical professionals.",
    imageUrl: "https://media.istockphoto.com/id/1889510378/photo/ai-enhanced-social-networking.webp?a=1&b=1&s=612x612&w=0&k=20&c=sk0WLDB408NZU5Vr_XLrk1z8FcoVSkenMwxNut1R2Pw=",
    reverseColumn: true,
    reverse: true,
    color: "text-red-500",
    slug: slugify("PulseAI"),
  },
  {
    title: "Anthem",
    subtitle: "Helping teams make decisions with real-time health data",
    description: "How TM designed a data-driven platform during COVID.",
    imageUrl: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
    reverseColumn: true,
    reverse: true,
    slug: slugify("Anthem 3"), // Unique slug
  },
  {
    title: "Forethought",
    subtitle: "Visualizing patient data to optimize outcomes",
    description: "An intelligent dashboard for medical professionals.",
    imageUrl: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
    reverseColumn: true,
    reverse: true,
    color: "text-[#0bbba9]",
    slug: slugify("Forethought 2"), // Unique slug
  },
  {
    title: "PulseAI",
    subtitle: "Visualizing patient data to optimize outcomes",
    description: "An intelligent dashboard for medical professionals.",
    imageUrl: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    reverse: true,
    color: "text-red-500",
    slug: slugify("PulseAI 2"), // Unique slug
  },
];


// work sections

export const works = [
  {
    slug: "ai-analytics-platform",
    title: "AI Analytics Platform",
    shortDescription: "Enterprise-grade analytics with ML insights.",
    longDescription:
      "An AI-powered analytics dashboard built for large-scale enterprise reporting. Includes custom data pipelines, predictive modeling, and real-time visualizations using D3.js and Next.js.",
    imageCover: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    images: [
       "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
    ],
    //   label: "Duration", 
    //   value: "3 months", 
    //   icon: Clock, 
    // Team: "Team", 
    // members: "5+ members", 
    // Users: Users ,
    //  Status: "Status", 
    //  Completed: "Completed",
    //   CheckCircle: CheckCircle ,
    //  Impact: "Impact",
    //   performance: "+40% performance",
    //    Zap: Zap ,
  },
  {
    slug: "ecommerce-optimization",
    title: "E-commerce Optimization Engine",
    shortDescription: "AI-driven personalization engine increasing conversions by 15%",
    longDescription:
      "We designed and implemented a personalization engine using OpenAI embeddings and real-time user behavior tracking. It integrates into Shopify/Custom stacks and includes A/B testing tools.",
    imageCover: "https://www.aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    images: [
"https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    ],
  },
  {
    slug: "fintech-app",
    title: "FinTech Mobile App",
    shortDescription: "AI-powered financial planning with user-centric mobile design.",
    longDescription:
      "We built a FinTech platform that uses AI to analyze spending behavior and deliver personalized financial recommendations. Delivered a full-stack React Native + Supabase solution in under 3 weeks.",
    imageCover: "https://assets.aceternity.com/pro/aceternity-landing.webp",
    images: [
     "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png"
    ],
  },
  {
    slug: "healthcare-dashboard",
    title: "Healthcare Dashboard",
    shortDescription: "Real-time patient monitoring with predictive alerts.",
    longDescription:
      "We developed a HIPAA-compliant dashboard to visualize real-time patient vitals and use AI models for anomaly detection. Used Next.js, D3, and TensorFlow Lite for edge processing.",
    imageCover: "https://www.aceternity.com/images/products/thumbnails/new/renderwork.png",
    images: [
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    ],
  },
  {
    slug: "product-design-system",
    title: "Product Design System",
    shortDescription: "A reusable UI/UX system to scale product velocity.",
    longDescription:
      "We delivered a responsive, themeable design system for a SaaS startup. Includes over 40 components with accessibility, variants, and Tailwind theming support.",
    imageCover: "https://aceternity.com/images/products/thumbnails/new/designkit.png",
    images: [
       "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
      


    ],
  },
  {
    slug: "ai-chat-integration",
    title: "AI Chat Integration",
    shortDescription: "ChatGPT-powered onboarding assistant for SaaS users.",
    longDescription:
      "We built a context-aware AI assistant integrated into a B2B SaaS dashboard. Users can query documentation, get guided workflows, and generate reports via natural language.",
    imageCover: "https://aceternity.com/images/products/thumbnails/new/autopilot.png",
    images: [
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    ],
  },
  {
    slug: "startup-ai-strategy",
    title: "AI Strategy for Startups",
    shortDescription: "AI use case discovery and GTM plan — delivered in 7 days.",
    longDescription:
      "We ran a 7-day sprint with a fast-growing EdTech startup to define their AI use cases, build a proof-of-concept, and deliver a complete product roadmap. Included GPT-powered mockups and Figma prototypes.",
    imageCover: "https://aceternity.com/images/products/thumbnails/new/brainstorm.png",
    images: [
       "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    ],
  },
  {
    slug: "recruitment-platform",
    title: "AI Recruitment Platform",
    shortDescription: "Automated candidate matching using LLM embeddings.",
    longDescription:
      "Built a hiring platform that screens resumes, analyzes intent, and ranks applicants using embeddings and fine-tuned OpenAI models. Delivered in under 10 days with Supabase + LangChain.",
    imageCover: "https://aceternity.com/images/products/thumbnails/new/hireai.png",
    images: [
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    ],
  }
];
