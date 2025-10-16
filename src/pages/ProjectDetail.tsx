import { useParams, Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PDFDownloadButton from "@/components/PDFDownloadButton";
import FloatingActions from "@/components/FloatingActions";
import kartFrame from "@/assets/kart-frame.png";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate('/');
    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Project data with detailed information
  const projectsData: Record<string, {
    title: string;
    category: string;
    duration: string;
    organization?: string;
    description: string[];
    skills: string[];
    detailedInfo: string;
    images: string[];
    imageDescriptions?: string[];
    documents: { name: string; url: string }[];
  }> = {
    "fendt-vario": {
      title: "Fendt Vario Tractor - Mechanical Systems Design",
      category: "Mechanical Systems / Industrial Machinery",
      duration: "1 Year",
      organization: "Institute of Product Development, KIT Karlsruhe",
      description: [
        "Designed and developed gearbox, suspension, height-adjustment system, and variable-height drivetrain",
        "Integrated product design and implementation, from CAD modeling to manufacturability and dimensioning",
        "Ensured efficiency, durability, and adaptability across varied agricultural terrains",
        "Evaluated costing strategies and outsourcing options to balance technical performance with market feasibility"
      ],
      skills: ["SolidWorks / NX", "Maple", "System Design", "Tolerance Analysis", "DFM", "Product Implementation"],
      detailedInfo: "Task (University Workshop): Develop a next-generation modular powertrain for a Fendt tractor, including combustion and hybrid variants. Analyze the previous system, define objectives, and design key subsystems (gearbox, hybrid module, PTO, clutches, and chassis) with focus on manufacturability, efficiency, and modular integration.",
      images: [`${import.meta.env.BASE_URL}images/gearbox-drawing-1.jpg`],
      documents: [
        { name: "Task 1", url: `${import.meta.env.BASE_URL}Workshop_Task_MD3_WS_23_24.pdf` },
        { name: "Task 2", url: `${import.meta.env.BASE_URL}Workshopaufgabe_MKL4_SS24_EN_V1.pdf` },
        { name: "Variable Height Power transmitting shaft", url: `${import.meta.env.BASE_URL}D22_VersGetr_Konstruktion_AS.pdf` },
        { name: "Transanxle Concept", url: `${import.meta.env.BASE_URL}Pablooo_Lope.pdf` },
        { name: "Bearing Selection", url: `${import.meta.env.BASE_URL}Bearing_Selection.pdf` },
        { name: "Calculation Breakdown", url: `${import.meta.env.BASE_URL}Calculation_Breakdown.pdf` },
        { name: "Gearbox Concept 1", url: `${import.meta.env.BASE_URL}Gearbox_Concept_1.pdf` },
        { name: "Gearbox Concept 2", url: `${import.meta.env.BASE_URL}Gearbox_Concept_2.pdf` },
        { name: "Cost Calculation", url: `${import.meta.env.BASE_URL}Cost_Calculation.pdf` },
        { name: "Sketch", url: `${import.meta.env.BASE_URL}Sketch.pdf` },
        { name: "Minimum Shaft Diameter Calculations", url: `${import.meta.env.BASE_URL}Minimum_Shaft_Diameter_Calculations.pdf` },
        { name: "Technical Drawing Gearbox", url: `${import.meta.env.BASE_URL}Technical_Drawing_Gearbox.pdf` }
      ]
    },
    "hydrogen-car": {
      title: "Hydrogen Combustion Car - Conversion from Gasoline Platform (Formula Student)",
      category: "Sustainable Mobility / Automotive Engineering",
      duration: "6 Months",
      organization: "KA RaceIng Formula Student Team",
      description: [
        "Converted a previous-generation gasoline vehicle into a hydrogen combustion prototype",
        "Redesigned fuel delivery and engine systems to operate with hydrogen",
        "Implemented safety adaptations for storage and handling of hydrogen",
        "Ensured minimal structural modifications while maintaining performance"
      ],
      skills: ["Powertrain Adaptation", "CAD Modeling", "Thermodynamics", "Hydrogen Safety", "System Integration"],
      detailedInfo: "",
      images: [],
      documents: []
    },
    "hvac-system": {
      title: "Research Paper in Niobium Based Alloys",
      category: "Research",
      duration: "4 Months",
      organization: "Institute of Applied Materials, KIT Karlsruhe",
      description: [
        "Researched the limitations of niobium alloys in high-temperature aerospace use, focusing on catastrophic oxidation",
        "Evaluated coating methods (aluminide, silicide, dual-layer systems) to improve oxidation resistance",
        "Compared alternative materials (tungsten, molybdenum, advanced ceramics, and composites) for superior thermal stability",
        "Concluded that while coatings provide temporary improvements, alternative refractory alloys and composites are more reliable for long-term high-temperature performance"
      ],
      skills: ["Academic Research", "Material Science", "Aerospace Industry"],
      detailedInfo: "Research project done with the IAM Institute of KIT",
      images: [`${import.meta.env.BASE_URL}images/research-niobium.jpg`],
      imageDescriptions: ["Alexander Kauffmann, IAM-WK KIT Karlsruhe"],
      documents: [
        { name: "Research Paper", url: `${import.meta.env.BASE_URL}Research_Paper.pdf` },
        { name: "Research Question", url: `${import.meta.env.BASE_URL}Research_Question.pdf` }
      ]
    },
    "modular-drone": {
      title: "Lightweight Modular Drone",
      category: "Upcoming Project",
      duration: "TBD",
      organization: "Personal Project",
      description: [
        "Designing a lightweight modular drone system",
        "Project in development phase"
      ],
      skills: ["Drone Design", "Lightweight Structures", "Modular Systems"],
      detailedInfo: "Modular multifunction Drone with a variable design tailored to demand and intent.\n\nSingle/Multi-Use Drones for different applications and solutions",
      images: [],
      documents: []
    },
    "drift-kart": {
      title: "Drift Kart",
      category: "Upcoming Project",
      duration: "TBD",
      organization: "Personal Project",
      description: [
        "Building a custom drift kart",
        "Project in development phase"
      ],
      skills: ["Vehicle Dynamics", "Chassis Design", "Performance Engineering"],
      detailedInfo: "Planning on using an FIA Go Kart Frame to repurpose it into a For-Fun project",
      images: [kartFrame],
      imageDescriptions: ["Frame/Chassis of an FIA Regulated Go-Kart. Source: User ggiraldo in SIMSCALE"],
      documents: []
    }
  };

  const project = projectId ? projectsData[projectId] : null;

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Floating action buttons */}
        <FloatingActions />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container max-w-6xl py-12 px-4">
        <Button variant="ghost" className="mb-8" onClick={handleBackToProjects}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <Badge className="mb-2">{project.category}</Badge>
              <p className="text-sm text-muted-foreground">{project.duration}</p>
              {project.organization ? (
                <p className="text-sm text-muted-foreground mb-4">{project.organization}</p>
              ) : (
                <div className="mb-4"></div>
              )}
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
              <p className="text-lg text-muted-foreground italic">Different Original concept sketches exist only as physical copies and have not yet been converted to digital format.</p>
            )}
            {projectId === "hydrogen-car" && (
              <>
                <p className="text-lg text-muted-foreground">More Information on Demand. Not publicly available due to Privacy Agreements.</p>
                <p className="text-lg text-muted-foreground">
                  <a href="https://www.ka-raceing.de/hydrogen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.ka-raceing.de/hydrogen
                  </a>
                </p>
              </>
            )}
            {/* Inline images integrated within the text content */}
            {project.images.length > 0 && (
              <div className="space-y-4 pt-2">
                {project.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={project.title}
                    className="rounded-lg border-2 border-primary shadow-sm w-full h-auto"
                    onError={(e) => {
                      console.error('Image failed to load:', image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            )}
            </div>

            {project.documents.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Documents & Resources</h2>
              <div className="space-y-2">
                {project.documents.map((doc, idx) => (
                  <PDFDownloadButton
                    key={idx}
                    name={doc.name}
                    url={doc.url}
                  />
                ))}
              </div>
            </div>
            )}
          </div>

          {/* Right column intentionally left empty; image is integrated above */}
        </div>
      </div>
      
      {/* Floating action buttons */}
      <FloatingActions />
    </div>
  );
};

export default ProjectDetail;