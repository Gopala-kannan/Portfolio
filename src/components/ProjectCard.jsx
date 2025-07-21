import React from "react";
import { Card, CardContent } from "./ui/Card";
import Button  from "./ui/Button";
import Badge  from "./ui/Badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  category,
  gradient,
  image
}) {
  return (
    <Card className="group overflow-hidden border-slate-700 bg-slate-800/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col transform">
      <div className={`h-48 ${gradient} relative overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={title}
            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className={`${gradient.includes('orange') ? 'bg-orange-600' : 
            gradient.includes('red') ? 'bg-red-600' : 
            gradient.includes('green') ? 'bg-green-600' :
            gradient.includes('blue') ? 'bg-blue-600' :
            gradient.includes('purple') ? 'bg-purple-600' : 
            gradient.includes('emerald') ? 'bg-emerald-600' :
            'bg-cyan-600'} text-white`}>
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 pt-6 flex flex-col flex-grow group-hover:bg-slate-800/70 transition-colors duration-300">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm line-clamp-3 flex-grow group-hover:text-slate-300 transition-colors duration-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2.5rem]">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs group-hover:border-blue-400 group-hover:text-blue-300 transition-colors duration-300">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button asChild className="flex-1 group-hover:scale-105 transition-transform duration-300" size="sm">
              <a href={liveUrl} className="bg-green-400 w-42 hover:w-68 h-10 rounded text-white flex items-center justify-center transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="group-hover:scale-105 transition-transform duration-300">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
