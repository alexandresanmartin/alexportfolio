import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Project data with detailed information
  const projectsData: Record<string, {
    title: string;
    category: string;
    description: string[];
    skills: string[];
    detailedInfo: string;
    images: string[];
    documents: { name: string; url: string }[];
  }> = {
    "fendt-vario": {
      title: "Fendt Vario Tractor – Mechanical Systems Design",
      category: "Mechanical Systems / Industrial Machinery",
      description: [
        "Designed and developed gearbox, suspension, height-adjustment system, and variable-height drivetrain",
        "Integrated product design and implementation, from CAD modeling to manufacturability and dimensioning",
        "Ensured efficiency, durability, and adaptability across varied agricultural terrains",
        "Evaluated costing strategies and outsourcing options to balance technical performance with market feasibility"
      ],
      skills: ["SolidWorks / NX", "Maple", "System Design", "Tolerance Analysis", "DFM", "Product Implementation"],
      detailedInfo: "Task (University Workshop): Develop a next-generation modular powertrain for a Fendt tractor, including combustion and hybrid variants. Analyze the previous system, define objectives, and design key subsystems (gearbox, hybrid module, PTO, clutches, and chassis) with focus on manufacturability, efficiency, and modular integration.",
      images: [],
      documents: [
        { name: "Task 1", url: "/Workshop_Task_MD3_WS_23_24.pdf" },
        { name: "Task 2", url: "/Workshopaufgabe_MKL4_SS24_EN_V1.pdf" },
        { name: "Variable Height Power transmitting shaft", url: "/D22_VersGetr_Konstruktion_AS.pdf" },
        { name: "Transanxle Concept", url: "/Pablooo_Lope.pdf" }
      ]
    },
    "hydrogen-car": {
      title: "Hydrogen Combustion Car – Conversion from Gasoline Platform (Formula Student)",
      category: "Sustainable Mobility / Automotive Engineering",
      description: [
        "Converted a previous-generation gasoline vehicle into a hydrogen combustion prototype",
        "Redesigned fuel delivery and engine systems to operate with hydrogen",
        "Implemented safety adaptations for storage and handling of hydrogen",
        "Ensured minimal structural modifications while maintaining performance"
      ],
      skills: ["Powertrain Adaptation", "CAD Modeling", "Thermodynamics", "Hydrogen Safety", "System Integration"],
      detailedInfo: "Add more detailed information about this project here. You can include technical specifications, challenges faced, solutions implemented, and results achieved.",
      images: [],
      documents: []
    },
    "hvac-system": {
      title: "Sustainable HVAC Design",
      category: "Energy Systems",
      description: [
        "Created energy-efficient HVAC solution reducing power consumption by 30% while maintaining optimal climate control."
      ],
      skills: ["Energy Analysis", "HVAC", "Sustainability", "AutoCAD"],
      detailedInfo: "Add more detailed information about this project here. You can include technical specifications, challenges faced, solutions implemented, and results achieved.",
      images: [],
      documents: []
    }
  };

  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-12 px-4">
        <Link to="/#projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="space-y-8">
          <div>
            <Badge className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <ul className="space-y-3">
              {project.description.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-lg">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Detailed Information</h2>
            <p className="text-lg text-muted-foreground">{project.detailedInfo}</p>
          </div>

          {project.images.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Project Images</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="rounded-lg border shadow-sm w-full"
                  />
                ))}
              </div>
            </div>
          )}

          {project.documents.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Documents & Resources</h2>
              <div className="space-y-2">
                {project.documents.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.url}
                    className="block p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <span className="font-medium">{doc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
