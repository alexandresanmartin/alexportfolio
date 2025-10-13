import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import kartFrame from "@/assets/kart-frame.png";

const Projects = () => {
  const projects = [
    {
      id: "fendt-vario",
      title: "Fendt Vario Tractor – Mechanical Systems Design",
      description: [
        "Designed and developed gearbox, suspension, height–adjustment system, and variable–height drivetrain",
        "Integrated product design and implementation, from CAD modeling to manufacturability and dimensioning",
        "Ensured efficiency, durability, and adaptability across varied agricultural terrains",
        "Evaluated costing strategies and outsourcing options to balance technical performance with market feasibility"
      ],
      skills: ["SolidWorks / NX", "Maple", "System Design", "Tolerance Analysis", "DFM", "Product Implementation"],
      category: "Mechanical Systems / Industrial Machinery",
      duration: "1 Year"
    },
    {
      id: "hydrogen-car",
      title: "Hydrogen Combustion Car – Conversion from Gasoline Platform (Formula Student)",
      description: [
        "Converted a previous–generation gasoline vehicle into a hydrogen combustion prototype",
        "Redesigned fuel delivery and engine systems to operate with hydrogen",
        "Implemented safety adaptations for storage and handling of hydrogen",
        "Ensured minimal structural modifications while maintaining performance"
      ],
      skills: ["Powertrain Adaptation", "CAD Modeling", "Thermodynamics", "Hydrogen Safety", "System Integration"],
      category: "Sustainable Mobility / Automotive Engineering",
      duration: "6 Months"
    },
    {
      id: "hvac-system",
      title: "Research Paper in Niobium Based Alloys",
      description: [
        "Researched the limitations of niobium alloys in high–temperature aerospace use, focusing on catastrophic oxidation",
        "Evaluated coating methods (aluminide, silicide, dual–layer systems) to improve oxidation resistance",
        "Compared alternative materials (tungsten, molybdenum, advanced ceramics, and composites) for superior thermal stability",
        "Concluded that while coatings provide temporary improvements, alternative refractory alloys and composites are more reliable for long–term high–temperature performance"
      ],
      skills: ["Academic Research", "Material Science", "Aerospace Industry"],
      category: "Research",
      duration: "4 Months"
    }
  ];

  const futureProjects = [
    {
      id: "modular-drone",
      title: "Lightweight Modular Drone",
      category: "Upcoming Project",
      image: undefined as string | undefined
    },
    {
      id: "drift-kart",
      title: "Drift Kart",
      category: "Upcoming Project",
      image: undefined
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            A selection of engineering projects demonstrating problem-solving abilities and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <Link key={index} to={`/project/${project.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <Badge className="w-fit mb-2">{project.category}</Badge>
                <p className="text-xs text-muted-foreground mb-3">{project.duration}</p>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base space-y-2">
                  {Array.isArray(project.description) ? (
                    <ul className="space-y-2">
                      {project.description.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    project.description
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Future Projects</h3>
            <p className="text-white/90">Upcoming engineering ventures</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {futureProjects.map((project, index) => (
              <Link key={index} to={`/project/${project.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                  {project.image && (
                    <CardContent className="p-0">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-40 object-cover"
                      />
                    </CardContent>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge className="mb-2">{project.category}</Badge>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;