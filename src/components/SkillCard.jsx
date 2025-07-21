import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import Badge from "./ui/Badge";

const colorMap = {
  blue: { text: "text-blue-400", border: "hover:border-blue-500/100", shadow: "hover:shadow-blue-500/30" },
  cyan: { text: "text-cyan-400", border: "hover:border-cyan-500/100", shadow: "hover:shadow-cyan-500/30" },
  green: { text: "text-green-400", border: "hover:border-green-500/100", shadow: "hover:shadow-green-500/30" },
  purple: { text: "text-purple-400", border: "hover:border-purple-500/100", shadow: "hover:shadow-purple-500/30" },
  red: { text: "text-red-400", border: "hover:border-red-500/100", shadow: "hover:shadow-red-500/30" },
  yellow: { text: "text-yellow-400", border: "hover:border-yellow-500/100", shadow: "hover:shadow-yellow-500/30" },
};

export default function SkillCard({ title, icon, skills, color }) {
  const colorClasses = colorMap[color] || {
    text: "text-white",
    border: "hover:border-white/500",
    shadow: "hover:shadow-white-500/30"
  };

  return (
    <Card
      className={`
    group border-slate-700 bg-slate-800/50 
    ${colorClasses.border} 
    ${colorClasses.shadow}
    transition-all duration-500 ease-in-out 
    transform hover:scale-105 
    shadow-md 
    animate-fade-in-up cursor-pointer
  `}
    >
      <CardContent className="p-8">
        <div className="flex items-center mb-4 pt-4">
          <i className={`${icon} text-2xl ${colorClasses.text} mr-3`} />
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-sm font-medium text-gray-300 border border-gray-500 hover:text-white hover:border-white transform transition-all duration-300 hover:scale-105 px-2 py-1 rounded">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
