import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Separator from "../components/ui/Separator";
import Typewriter from "../components/Typewirter";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import photo from '../attached_assets/Screenshot 2024-08-18 153757.png'

import {
  Code,
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  ChevronDown,
  Menu,
  X,
  Calendar,
  CheckCircle,
  Award
} from "lucide-react";

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const roles = ['Web Developer', 'Full Stack Developer', 'Front-End Developer'];

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const skills = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      skills: ['Python', 'JavaScript', 'C', 'Java (Basics)'],
      color: 'blue'
    },
    {
      title: 'Frontend',
      icon: 'fas fa-palette',
      skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'React.js'],
      color: 'cyan'
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: ['Django', 'Node.js', 'Express.js'],
      color: 'green'
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
      color: 'purple'
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      skills: ['VS Code', 'PyCharm', 'GitHub', 'Netlify', 'MySQL Workbench', 'Vite'],
      color: 'red'
    },
    {
      title: 'Soft Skills',
      icon: 'fas fa-lightbulb',
      skills: ['Time Management', 'Teamwork'],
      color: 'yellow'
    }
  ];

  const projects = [
    {
      title: 'Crunchyroll Clone',
      description: 'A responsive anime streaming platform clone with modern UI design and interactive features.',
      technologies: ['React.js', 'CSS', 'JavaScript', 'API'],
      liveUrl: 'https://clinquant-sunburst-863554.netlify.app/',
      category: 'frontend',
      gradient: 'bg-gradient-to-br from-orange-600 to-red-600',
      image: '/assets/crunchyroll.webp'
    },
    {
      title: 'Netflix Clone',
      description: 'A pixel-perfect recreation of Netflix\'s interface with responsive design and smooth animations.',
      technologies: ['React.js', 'CSS', 'JavaScript', 'MoiveDB API'],
      liveUrl: 'https://gleeful-gelato-a30aca.netlify.app/',
      category: 'frontend',
      gradient: 'bg-gradient-to-br from-red-600 to-black',
      image: '/assets/netflix.jpeg'
    },
    {
      title: 'Spotify Clone',
      description: 'A music streaming interface clone with dark theme and interactive playlist features.',
      technologies: ['React.js', 'TailwindCSS', 'JavaScript'],
      liveUrl: 'https://lighthearted-meringue-789e01.netlify.app/',
      category: 'frontend',
      gradient: 'bg-gradient-to-br from-green-600 to-black',
      image: '/assets/spotify.jpg'
    },
    {
      title: 'Prime Video Clone',
      description: 'A streaming platform interface clone with Amazon Prime Video\'s design and layout.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://spectacular-sunshine-a8551c.netlify.app/',
      category: 'frontend',
      gradient: 'bg-gradient-to-br from-blue-600 to-blue-900',
      image: '/assets/prime-video.png'
    },
    {
      title: 'E-commerce Website',
      description: 'A complete e-commerce solution built with Django, featuring user authentication, product management, and payment integration.',
      technologies: ['Django', 'HTML', 'CSS', 'Python', 'PostgreSQL'],
      githubUrl: 'https://github.com/Gopala-kannan/Ecommerce-dj',
      category: 'fullstack',
      gradient: 'bg-gradient-to-br from-purple-600 to-pink-600',
      image: '/assets/ecommerce.jpg'
    },
    {
      title: 'Vasan Eye Care Clone',
      description: 'A modern healthcare website clone featuring responsive design, appointment booking interface, and medical services showcase.',
      technologies: ['React.js', 'CSS', 'JavaScript'],
      liveUrl: 'https://vasan-eye-care-clone.vercel.app/',
      category: 'frontend',
      gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600',
      image: '/assets/vasan-eye.png'
    },
    {
      title: 'Face Recognition System',
      description: 'A full-stack face recognition system with Django backend, React.js frontend, REST API integration, and PostgreSQL database for real-time detection and identification.',
      technologies: ['Python', 'Django', 'React.js', 'REST API', 'PostgreSQL', 'face_recognition'],
      githubUrl: 'https://github.com/Gopala-kannan/Face_Recognition_system',
      category: 'fullstack',
      gradient: 'bg-gradient-to-br from-cyan-600 to-blue-600',
      image: '/assets/face-recognition.png'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'This is a simple Tic Tac Toe game built using React.js, where two players take turns marking X and O in a 3×3 grid. The game checks for winning conditions and announces the winner or a draw.',
      technologies: ['React.js', 'CSS'],
      liveUrl: 'https://frolicking-praline-279d06.netlify.app/',
      category: 'frontend',
      gradient: 'bg-gradient-to-br from-teal-600 to-black-600',
      image: '/assets/game.png'
    },
    {
      title: 'Tourist Destinations',
      description: 'This website lets users explore and add tourist destinations. Each location is marked on a map with useful information. It helps travelers discover new places and plan their trips easily',
      technologies: ['Python', 'Django', 'HTML', 'CSS', 'REST API', 'PostgreSQL'],
      githubUrl: 'https://github.com/Gopala-kannan/Tourist',
      category: 'python',
      gradient: 'bg-gradient-to-br from-emerald-600 to-pink-600',
      image: '/assets/tour.jpg'
    },
    {
      title: 'Cost Estimate',
      description: 'Cost Estimate helps users efficiently record and review their monthly spending. Whether its rent, bills, groceries, or personal transactions, each profile provides a clear summary of credit, debit, and remaining balance.',
      technologies: ['Python', 'Django', 'HTML', 'CSS', 'REST API', 'PostgreSQL'],
      liveUrl: 'https://costestimate-46gu.onrender.com',
      category: 'python',
      gradient: 'bg-gradient-to-br from-indigo-700 to-sky-400',
      image: '/assets/cost.png'
    },
    {
      title: 'Blog Website',
      description: 'This Blog Website lets users create, edit, delete, and view posts with titles, rich content, and image uploads. Built with React.js TailwindCSS and a backend like Django it offers a responsive and user-friendly interface for sharing ideas.',
      technologies: ['Python', 'Django', 'Reactjs', 'Tailwind CSS', 'REST API', 'PostgreSQL'],
      liveUrl: 'https://blogfrontendui.onrender.com/',
      category: 'fullstack',
      gradient: 'bg-gradient-to-br from-blue-700 to-cyan-400',
      image: '/assets/blog.jpeg'
    },
  ];

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' || project.category === activeFilter
  );

  const certifications = [
    {
      title: 'Python Full Stack Internship',
      organization: 'Inmakes Infotech Pvt. Ltd.',
      description: 'Completed comprehensive internship program covering full-stack development with Python, Django, and React.js',
      year: '2025',
      color: 'blue',
    },
    {
      title: 'Hardware and Networking',
      organization: 'Sadakathullah Appa College',
      description: 'Comprehensive certification in computer hardware, networking fundamentals, and system administration',
      year: '2023',
      color: 'green'
    },
    {
      title: 'Responsive Web Design',
      organization: 'freeCodeCamp',
      description: 'Certification in responsive web design principles, CSS Grid, Flexbox, and mobile-first development approaches',
      year: '2024',
      color: 'red'
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      organization: 'freeCodeCamp',
      description: 'Comprehensive certification covering JavaScript fundamentals, algorithms, data structures, and problem-solving techniques',
      year: '2024',
      color: 'yellow'
    },
    {
      title: 'Front-End Development Libraries',
      organization: 'freeCodeCamp',
      description: 'Certification in modern frontend development libraries including React, Redux, and advanced JavaScript concepts',
      year: '2024',
      color: 'purple'
    }
  ];

  const smoothScroll = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute('href');  // ✅ FIXED
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    setMobileMenuOpen(false); // Make sure this is defined in your component
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Could set active nav item here
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-400">Gopala Kannan E</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => smoothScroll(e, link.href)}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className="block px-3 py-2 text-slate-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-cyan-900/20" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="mb-8 mt-8">
              <div className="mx-auto bg-gradient-to-r rounded-full flex items-center justify-center mb-6 ">
                <img src={photo} alt="User" className="h-48 w-48  rounded-full object-cover md:h-48 md:w-48 " />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="gradient-text">Gopala Kannan E</span>
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <Typewriter
                texts={roles}
                className="text-blue-400 font-semibold"
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
              />
            </div>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Self-taught and highly motivated Full Stack Developer with expertise in Python, Django, React.js, and modern web technologies. Passionate about creating innovative solutions and beautiful user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="ghost" className="text-slate-400 hover:text-blue-400">
                <a href="/assets/Gopalakannan_resume.pdf" download="Gopalakannan_resume.pdf" className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 transition-all duration-1000 ease-in-out animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Hello! I'm Gopala Kannan E</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a self-taught and highly motivated Python Full Stack Developer who is passionate about creating innovative web solutions. My journey in web development has been driven by curiosity and a constant desire to learn and improve.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                I completed my internship at <span className="text-cyan-400 font-semibold">Inmakes Infotech Pvt. Ltd.</span>, where I gained hands-on experience building real-time full-stack projects using Django and React.js. I'm skilled in building comprehensive web applications using modern technologies and best practices.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                My expertise spans across the entire development stack, from crafting intuitive user interfaces to designing robust backend architectures. I believe in writing clean, maintainable code and creating exceptional user experiences.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Education Focus</h4>
                    <p className="text-slate-300 text-sm">Self-taught through practical projects and continuous learning</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-4">
                    <h4 className="text-cyan-400 font-semibold mb-2">Internship</h4>
                    <p className="text-slate-300 text-sm">Inmakes Infotech Pvt. Ltd. (April 2025 – July 2025)</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 p-1">
                <CardContent className="bg-slate-800 p-8 rounded-lg">
                  <Code className="h-16 w-16 text-blue-400 mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Development Philosophy</h4>
                  <p className="text-slate-300">I believe in writing clean, scalable code that solves real-world problems while providing exceptional user experiences.</p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-blue-400">1+</div>
                    <div className="text-slate-300 text-sm">Years Learning</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-cyan-400">10+</div>
                    <div className="text-slate-300 text-sm">Projects Built</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">Here are the technologies and tools I work with to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">My professional journey and practical experience in web development</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />

            <div className="relative">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:w-1/2 md:pr-8">
                  <Card className="bg-slate-800 border-slate-700 relative">
                    <div className="absolute -right-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 hidden md:block" />
                    <CardContent className="p-12 pt-12">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-blue-400">Python Full Stack Intern</h3>
                          <h4 className="text-lg text-white font-medium">Inmakes Infotech Pvt. Ltd.</h4>
                        </div>
                        <Badge className="bg-cyan-400/10 text-cyan-400">April 2025 – July 2025</Badge>
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed">
                        Gained hands-on experience building real-time full-stack projects using Django and React.js. Worked on various web applications, implementing both frontend and backend functionalities while following industry best practices.
                      </p>

                      <div className="space-y-2">
                        <h5 className="text-white font-medium">Key Achievements:</h5>
                        <ul className="text-slate-300 space-y-1">
                          {[
                            'Built real-time full-stack projects using Django and React.js',
                            'Contributed to various development projects under the guidance of senior developers',
                            'Implemented responsive design principles',
                            'Worked with REST APIs and database integration'
                          ].map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                  <Card className=" bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 hover:from-blue-600/40 hover:to-cyan-600/40 hover:border-blue-500/50  hover:shadow-lg  hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out transform hover:scale-105 rounded-xl group cursor-pointer">
                    <CardContent className="p-8 pt-7">
                      <h4 className="text-xl font-semibold text-blue-400 mb-4">Technologies Used</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="text-white font-medium">Frontend</h5>
                          <div className="flex flex-wrap gap-1">
                            {['React.js', 'HTML', 'jQuery', 'CSS', 'JavaScript', 'Bootstrap'].map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs m-0.5">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-white font-medium">Backend</h5>
                          <div className="flex flex-wrap gap-1">
                            {['Django', 'Python', 'REST API', 'PostgreSQL', 'MySql'].map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs m-0.5">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">A showcase of my work including web applications, clones, and full-stack projects</p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { filter: 'all', label: 'All Projects' },
              { filter: 'frontend', label: 'Frontend' },
              { filter: 'fullstack', label: 'Full Stack' },
              { filter: 'python', label: 'Python' }
            ].map(({ filter, label }) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`${activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
                  } transition-all duration-300`}
                variant={activeFilter === filter ? 'default' : 'secondary'}
              >
                {label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">Professional certifications and credentials that validate my skills and knowledge</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`
        group bg-slate-800 border border-slate-700
        hover:border-${cert.color}-500
        transition-all duration-300 ease-in-out transform hover:scale-[1.02]
      `}
              >
                <CardContent className="p-6 pt-5">
                  <div className="flex items-center mb-4">
                    <div
                      className={`
              w-12 h-12 bg-gradient-to-r
              from-${cert.color}-500 to-${cert.color}-600
              rounded-lg flex items-center justify-center mr-4
              transition-transform duration-300 group-hover:rotate-6
            `}
                    >
                      <Award className='h-6 w-6 text-white' />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                      <p className={`text-${cert.color}-400 text-sm`}>{cert.organization}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{cert.description}</p>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cert.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-white" />,
                    title: 'Email',
                    value: 'gopalakannanekannan@gmail.com',
                    href: 'mailto:gopalakannanekannan@gmail.com',
                    color: 'from-blue-500 to-cyan-500',
                    textColor: 'text-blue-400 hover:text-blue-300'
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-white" />,
                    title: 'Phone',
                    value: '+91-6379961175',
                    href: 'tel:+916379961175',
                    color: 'from-green-500 to-emerald-500',
                    textColor: 'text-green-400 hover:text-green-300'
                  },
                  {
                    icon: <Github className="h-6 w-6 text-white" />,
                    title: 'GitHub',
                    value: 'github.com/Gopala-kannan',
                    href: 'https://github.com/Gopala-kannan',
                    color: 'from-gray-600 to-gray-800',
                    textColor: 'text-gray-400 hover:text-gray-300'
                  },
                  {
                    icon: <Linkedin className="h-6 w-6 text-white" />,
                    title: 'LinkedIn',
                    value: 'linkedin.com/in/gopala-kannan',
                    href: 'https://www.linkedin.com/in/gopala-kannan/',
                    color: 'from-blue-600 to-blue-800',
                    textColor: 'text-blue-400 hover:text-blue-300'
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{contact.title}</h4>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`${contact.textColor} transition-colors duration-300`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Gopala Kannan E</h3>
            <p className="text-slate-400 mb-6">Full Stack Developer | Turning ideas into digital reality</p>

            <div className="flex justify-center space-x-6 mb-8">
              {[
                { href: 'https://github.com/Gopala-kannan', icon: <Github className="h-5 w-5" /> },
                { href: 'https://www.linkedin.com/in/gopala-kannan/', icon: <Linkedin className="h-5 w-5" /> },
                { href: 'mailto:gopalakannanekannan@gmail.com', icon: <Mail className="h-5 w-5" /> },
                { href: 'tel:+916379961175', icon: <Phone className="h-5 w-5" /> }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <Separator className="mb-8 bg-slate-700" />
            <p className="text-slate-500 text-sm">
              © 2024 Gopala Kannan E. All rights reserved. | Built with passion and modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
