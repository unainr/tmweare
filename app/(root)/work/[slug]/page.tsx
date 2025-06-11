import { allProjects } from '@/constants';
import React from 'react';
import { ArrowLeft, Calendar, Tag, Star, ExternalLink, Github, Play } from 'lucide-react';
import Link from 'next/link';

const WorkSlug = async ({params}: {params: Promise<{ slug: string }>}) => {
    const {slug} = await params;
    const project = allProjects.find((proj:any) => proj.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <Link href="/work" className="text-blue-600 hover:text-blue-800 font-medium">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link 
                            href="/work" 
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Projects</span>
                        </Link>
                        
                        {project.featured && (
                            <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                <Star className="w-4 h-4" />
                                <span>Featured Project</span>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-90"
                    style={{ 
                        backgroundColor: project.color || '#1f2937',
                        backgroundImage: `linear-gradient(135deg, ${project.color || '#1f2937'}, ${project.color ? project.color + '80' : '#374151'})`
                    }}
                />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {project.pageTitle || project.title}
                        </h1>
                        
                        {project.subtitle && (
                            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                                {project.subtitle}
                            </p>
                        )}
                        
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                                <Play className="w-5 h-5" />
                                <span>View Live Demo</span>
                            </button>
                            
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2">
                                <Github className="w-5 h-5" />
                                <span>View Source</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Image */}
                        <div className="relative">
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
                            <div className="text-gray-700 leading-relaxed">
                                {project.description}
                            </div>
                        </div>

                        {/* Key Features Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Modern Design",
                                        description: "Clean, responsive interface built with modern web standards",
                                        icon: "🎨"
                                    },
                                    {
                                        title: "Performance Optimized",
                                        description: "Fast loading times and smooth user experience",
                                        icon: "⚡"
                                    },
                                    {
                                        title: "Mobile Responsive",
                                        description: "Perfectly adapted for all screen sizes and devices",
                                        icon: "📱"
                                    },
                                    {
                                        title: "Scalable Architecture",
                                        description: "Built to grow and adapt with changing requirements",
                                        icon: "🏗️"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                        <div className="text-2xl mb-3">{feature.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Implementation</h2>
                            <div className="bg-white rounded-xl shadow-md p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend Technologies</h3>
                                        <div className="space-y-2">
                                            {['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span className="text-gray-700">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend & Tools</h3>
                                        <div className="space-y-2">
                                            {['Node.js/Express', 'PostgreSQL', 'Docker', 'AWS/Vercel'].map((tech, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-gray-700">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Project Info Card */}
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Details</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-5 h-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="font-medium">3 months</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <Tag className="w-5 h-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Category</p>
                                        <p className="font-medium">Web Application</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <ExternalLink className="w-5 h-5 text-gray-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Status</p>
                                        <p className="font-medium text-green-600">Completed</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white">
                            <h3 className="text-xl font-semibold mb-3">Interested in Similar Work?</h3>
                            <p className="text-blue-100 mb-4">Let's discuss how we can bring your vision to life.</p>
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Projects */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Projects</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore more of our work and see how we solve complex challenges
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProjects.filter(p => p.slug !== slug).slice(0, 3).map((relatedProject, index) => (
                            <Link key={index} href={`/work/${relatedProject.slug}`}>
                                <div className="group cursor-pointer">
                                    <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-200">
                                        <img 
                                            src={relatedProject.imageUrl} 
                                            alt={relatedProject.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {relatedProject.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">
                                        {relatedProject.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSlug;