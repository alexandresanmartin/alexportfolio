import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PDFViewer from "@/components/PDFViewer";

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
        { name: "Transanxle Concept", url: "/Pablooo_Lope.pdf" },
        { name: "Bearing Selection", url: "/Bearing_Selection.pdf" },
        { name: "Calculation Breakdown", url: "/Calculation_Breakdown.pdf" },
        { name: "Gearbox Concept 1", url: "/Gearbox_Concept_1.pdf" },
        { name: "Gearbox Concept 2", url: "/Gearbox_Concept_2.pdf" },
        { name: "Cost Calculation", url: "/Cost_Calculation.pdf" },
        { name: "Sketch", url: "/Sketch.pdf" },
        { name: "Minimum Shaft Diameter Calculations", url: "/Minimum_Shaft_Diameter_Calculations.pdf" },
        { name: "Technical Drawing Gearbox", url: "/Technical_Drawing_Gearbox.pdf" }
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
      title: "Research Paper in Niobium Based Alloys",
      category: "Research",
      description: [
        "Researched the limitations of niobium alloys in high-temperature aerospace use, focusing on catastrophic oxidation",
        "Evaluated coating methods (aluminide, silicide, dual-layer systems) to improve oxidation resistance",
        "Compared alternative materials (tungsten, molybdenum, advanced ceramics, and composites) for superior thermal stability",
        "Concluded that while coatings provide temporary improvements, alternative refractory alloys and composites are more reliable for long-term high-temperature performance"
      ],
      skills: ["Academic Research", "Material Science", "Aerospace Industry"],
      detailedInfo: "Research project done with the IAM Institute of KIT",
      images: [],
      documents: [
        { name: "Research Paper", url: "/Research_Paper.pdf" },
        { name: "Research Question", url: "/Research_Question.pdf" }
      ]
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
            {projectId === "fendt-vario" && (
              <p className="text-lg text-muted-foreground italic">More information on request, Limited availability due to privacy requirements</p>
            )}
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
                  <PDFViewer
                    key={idx}
                    name={doc.name}
                    url={doc.url}
                  />
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
