import { slugify } from "@/lib/utils";
import { BarChart, CheckCircle, Clock, Code, Layers, Palette, Search, Target, Users, Zap } from "lucide-react";

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
        "Qualitative and quantitativ",
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
     keyFeatures: [
      "Real-time patient data aggregation from multiple sources",
      "AI-powered diagnostic assistance and recommendations",
      "Predictive risk analysis and early warning systems",
      "Intuitive clinical dashboard with customizable views",
      "Automated reporting and compliance documentation",
      "HIPAA-compliant security and data protection"
    ],
   challenge: "Healthcare providers struggled with lengthy diagnosis processes due to fragmented data sources and manual analysis workflows. Patient data existed across multiple systems without centralized intelligence, leading to delayed diagnoses and increased costs.",
    solution: "We developed a comprehensive AI-powered analytics platform that aggregates data from multiple healthcare systems, applies machine learning models for pattern recognition, and provides real-time diagnostic assistance through an intuitive dashboard interface.",
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
     challenge: "E-commerce platform suffering from poor mobile experience and low conversion rates. Mobile traffic represented 70% of visitors but only 15% of conversions. Revenue was declining despite increased traffic, and competitors were gaining market share with superior user experiences.",
    solution: "We implemented a comprehensive mobile-first redesign with AI-powered personalization, intelligent product recommendations, and conversion-optimized checkout flows. The solution included real-time A/B testing and automated optimization based on user behavior patterns.",
    keyFeatures: [
      "Mobile-optimized responsive design with thumb-friendly navigation",
      "AI-powered product recommendations based on user behavior",
      "One-click checkout with multiple payment options",
      "Intelligent search with filters and visual discovery",
      "Real-time inventory updates and social proof elements",
      "Automated A/B testing and conversion optimization"
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
    challenge: "Young professionals needed accessible investment advice but traditional financial advisors were expensive and intimidating. The startup needed rapid market validation before their funding runway ended, with investor meetings scheduled within weeks.",
    solution: "We developed a 48-hour MVP featuring AI-powered investment recommendations, real-time portfolio tracking, and educational content tailored to user experience levels. The rapid development approach allowed immediate market testing and user feedback collection.",
    keyFeatures: [
      "Personalized investment recommendations based on risk tolerance",
      "Real-time portfolio tracking and performance analytics",
      "Educational content tailored to user experience level",
      "Secure account linking and transaction management",
      "Goal-based saving and investment planning",
      "AI-powered spending analysis and budgeting tools"
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
     challenge: "Healthcare facilities struggled with fragmented patient monitoring across multiple devices and systems. Manual data compilation took hours daily, critical alerts were often delayed or missed, and new regulatory requirements demanded real-time reporting capabilities.",
    solution: "We created a centralized real-time monitoring dashboard that integrates with existing medical devices, processes data through AI algorithms for anomaly detection, and provides intelligent alerts with priority classification. The system ensures HIPAA compliance while delivering 99.9% uptime.",
    keyFeatures: [
      "Live patient vital sign monitoring across multiple facilities",
      "Intelligent alert system with AI-powered priority classification",
      "Comprehensive reporting and analytics dashboard",
      "Multi-facility management and resource allocation",
      "Mobile-responsive design for on-call medical staff",
      "HL7 FHIR standard compliance for medical data interoperability"
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
    challenge: "A fast-growing SaaS company was struggling with inconsistent UI across products, slow development cycles due to repetitive design work, and accessibility compliance issues. Multiple development teams were creating duplicate components, leading to technical debt and poor user experience.",
    solution: "We created a comprehensive design system with 40+ reusable components, complete documentation, accessibility standards, and theming capabilities. The system includes both design tokens in Figma and production-ready React components with TypeScript support.",
    keyFeatures: [
      "40+ production-ready React components with TypeScript",
      "Complete accessibility compliance (WCAG 2.1 AA)",
      "Advanced theming system with dark/light mode support",
      "Comprehensive Storybook documentation",
      "Figma design tokens and component library",
      "Automated testing suite for all components"
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
     challenge: "A B2B SaaS platform was overwhelmed with support tickets and had poor user onboarding completion rates. Users struggled to find relevant information in extensive documentation, leading to increased churn and high support costs.",
    solution: "We developed an intelligent AI assistant that understands the platform's context, can answer complex queries, guide users through workflows, and provide personalized assistance. The system integrates with existing documentation and user data to provide accurate, relevant responses.",
    keyFeatures: [
      "Context-aware AI responses based on user role and permissions",
      "Natural language query processing for documentation",
      "Guided workflow assistance and step-by-step tutorials",
      "Automated report generation via conversational interface",
      "Personalized onboarding based on user goals",
      "Integration with existing knowledge base and help systems"
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
     challenge: "A growing EdTech startup needed to integrate AI capabilities to remain competitive but lacked clear direction on implementation priorities. With limited resources and an upcoming funding round, they needed a strategic roadmap that would demonstrate AI readiness to investors.",
    solution: "We conducted a rapid AI strategy sprint that included market analysis, use case identification, technical feasibility assessment, and prototype development. The comprehensive strategy positioned the company as an AI-forward educational platform ready for scale.",
    keyFeatures: [
      "Comprehensive AI use case analysis and prioritization",
      "Technical proof-of-concept implementations",
      "Detailed product roadmap with AI integration timeline",
      "Investor-ready AI strategy presentation",
      "Competitive analysis and market positioning",
      "Resource allocation and team scaling recommendations"
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
     challenge: "Traditional recruitment processes were taking 6-8 weeks per hire, with HR teams spending 80% of their time on manual resume screening. The client needed an AI-powered solution to automate candidate evaluation and matching while maintaining high accuracy and reducing bias.",
    solution: "We developed an intelligent recruitment platform that uses natural language processing to analyze resumes, extract relevant skills and experience, and match candidates to job requirements. The system provides detailed scoring, bias detection, and automated interview scheduling.",
    keyFeatures: [
      "Automated resume parsing and skill extraction",
      "AI-powered candidate-job matching with confidence scores",
      "Bias detection and mitigation in hiring decisions",
      "Automated interview scheduling and candidate communication",
      "Comprehensive analytics and hiring pipeline insights",
      "Integration with popular ATS and HRIS systems"
    ],
  }
];


export const servicesDetails = [
  {
    id: "ai-consulting",
    icon: Search,
    title: "AI Consulting",
    subtitle: "Strategic AI Implementation",
    description:
      "Our AI consulting service delivers custom strategies that transform your business operations. We identify high-impact AI opportunities, develop clear implementation roadmaps, and help you leverage cutting-edge tools to automate processes and extract actionable insights from your data. Our approach combines technical expertise with business acumen to ensure AI investments deliver measurable ROI.",
    features: [
      "Comprehensive AI readiness assessment and capability mapping",
      "Data strategy development with governance frameworks",
      "Custom AI use case identification with ROI projections",
      "Vendor selection and technology stack recommendations",
      "Implementation roadmap with phased deployment plan",
      "Knowledge transfer and team upskilling workshops"
    ],
    benefits: [
      "Reduce operational costs by 30-50% through intelligent automation",
      "Accelerate decision-making with real-time data insights",
      "Create new revenue streams through AI-enhanced products",
      "Minimize implementation risks with proven methodologies"
    ],
    timeline: "7 Days",
    cta: "Get AI Strategy",
    imageUrl: "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&h=600",
  },
  {
    id: "mvp-development",
    icon: Target,
    title: "MVP Development",
    subtitle: "Rapid Prototype to Market",
    description:
      "Our accelerated MVP development service transforms concepts into functional products in just 48 hours. Using AI-assisted development workflows, we build scalable, market-ready prototypes that capture your core value proposition. Our approach focuses on essential features that validate your business hypothesis while establishing a foundation for future growth. Each MVP includes analytics integration to capture valuable user feedback from day one.",
    features: [
      "Rapid feature prioritization and scope definition workshop",
      "AI-accelerated development with automated quality assurance",
      "Cloud infrastructure setup with scalability configurations",
      "User analytics integration for behavior tracking",
      "Continuous deployment pipeline for iterative improvements",
      "Technical documentation and handover package"
    ],
    benefits: [
      "Validate business concepts with minimal investment",
      "Attract early adopters and investors with functional proof",
      "Reduce time-to-market from months to days",
      "Establish technical foundation for scalable growth"
    ],
    timeline: "48 Hours",
    cta: "Build Your MVP",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600",
  },
  {
    id: "product-design",
    icon: Palette,
    title: "Product Design",
    subtitle: "Conversion-Focused UX/UI",
    description:
      "Our product design service delivers visually stunning interfaces that drive user engagement and conversion. We combine aesthetic excellence with data-driven design decisions, creating experiences that delight users while achieving business objectives. Our AI-enhanced research methods identify user behavior patterns that inform intuitive navigation flows and compelling visual hierarchies, resulting in designs that convert visitors into customers.",
    features: [
      "Comprehensive UX audit and competitive analysis",
      "User persona development with journey mapping",
      "Information architecture and navigation planning",
      "High-fidelity wireframes and interactive prototypes",
      "Complete design system with component library",
      "Usability testing and iterative refinement"
    ],
    benefits: [
      "Increase conversion rates by 15-40% with optimized flows",
      "Reduce development costs through systematic design",
      "Enhance brand perception with professional aesthetics",
      "Improve user retention through intuitive experiences"
    ],
    timeline: "7 Days",
    cta: "Design Your Product",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600",
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    subtitle: "High-Performance Solutions",
    description:
      "Our web development service creates blazing-fast, secure, and scalable applications engineered for performance. We leverage modern frameworks and AI-assisted development to deliver exceptional digital experiences in record time. Our solutions incorporate advanced SEO optimizations, accessibility standards, and security best practices to ensure your web presence stands out in today's competitive landscape while providing a solid foundation for future growth.",
    features: [
      "Performance-optimized architecture and infrastructure",
      "Responsive, cross-browser compatible implementations",
      "Advanced SEO and Core Web Vitals optimization",
      "Security hardening with vulnerability scanning",
      "API development and third-party integrations",
      "Comprehensive testing across devices and platforms"
    ],
    benefits: [
      "Achieve 90+ PageSpeed scores for improved rankings",
      "Reduce bounce rates with sub-second load times",
      "Increase organic traffic through SEO-friendly architecture",
      "Lower maintenance costs with clean, documented code"
    ],
    timeline: "7 Days",
    cta: "Develop Your Website",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600",
  },
  {
    id: "product-management",
    icon: BarChart,
    title: "Product Management",
    subtitle: "Strategic Growth Leadership",
    description:
      "Our fractional product management service provides expert leadership to align product development with business objectives. We bring structure to your product lifecycle, from ideation to launch and beyond. Our data-driven approach prioritizes features that deliver maximum value while our agile methodologies ensure efficient execution. We work seamlessly with your existing teams to establish processes that drive continuous improvement and market success.",
    features: [
      "Comprehensive product strategy and roadmap development",
      "Data-driven feature prioritization frameworks",
      "Sprint planning and agile process implementation",
      "Stakeholder management and communication plans",
      "Product analytics setup and KPI tracking",
      "Go-to-market strategy and launch coordination"
    ],
    benefits: [
      "Align development efforts with business objectives",
      "Reduce wasted development on low-impact features",
      "Accelerate decision-making with structured processes",
      "Improve team productivity and delivery predictability"
    ],
    timeline: "20 Hours/Week",
    cta: "Get Product Leadership",
    imageUrl: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&h=600",
  },
];


