import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cpu, LineChart, Boxes } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Wrench,
      title: "CAD & Design",
      skills: ["SolidWorks", "AutoCAD", "Creo", "Fusion 360", "3D Modeling", "Technical Drawing"]
    },
    {
      icon: LineChart,
      title: "Problem Solving",
      skills: ["Critical Thinking", "Process Reiteration", "Team Work", "Independent Work"]
    },
    {
      icon: Cpu,
      title: "Manufacturing",
      skills: ["CNC Programming", "3D Printing", "Lean Manufacturing", "Quality Control", "GD&T"]
    },
    {
      icon: Boxes,
      title: "Core Competencies",
      skills: ["Thermodynamics", "Fluid Mechanics", "Material Science", "Mechanical Systems", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering capabilities across design, analysis, and manufacturing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
