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
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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
    "materials-research": {
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
    "injection-molding-algorithm": {
      title: "Manufacturing Algorithm for Injection Molding",
      category: "Mechanical Design & Production",
      duration: "3 Months (Mar 2026 – May 2026)",
      organization: "ETH Zürich — Product Development Zone (PDZ)",
      description: [
        "Conducted literature research on state-of-the-art design techniques for injection molding manufacturability",
        "Developed a constraint-checking algorithm to automate and enforce design-for-manufacturing rules",
        "Automated and optimized the end-to-end design validation process for injection molding",
        "Implemented the algorithm in Rhino/Grasshopper, enabling parametric and scalable design evaluation",
        "Integrated multi-constraint checking logic to ensure high-quality control across design iterations"
      ],
      skills: ["DFM", "Python", "SolidWorks", "Rhino", "Grasshopper", "AI Tools", "Academic Research"],
      detailedInfo: "For my semester thesis with the PDZ, I developed an automated constraint-checking algorithm to bridge the gap between part designers and manufacturers. By instantly evaluating critical constraints — specifically undercuts, draft angles, and corner radii — the tool streamlines the design validation process. This automation prevents costly, time-consuming iterations, ensuring parts are optimized for injection molding right from the start and making the entire production cycle faster and cheaper.",
      images: [],
      documents: []
    },
    "precision-seeder": {
      title: "Precision Seeder — Integral Development and Manufacturing",
      category: "Product Development & Engineering Design",
      duration: "4 Months (Feb 2026 – May 2026)",
      organization: "ETH Zürich / Engineering Design and Computing Laboratory",
      description: [
        "Designed a precision seeder from scratch specifically aimed at supporting smallholder farmers in Malawi",
        "Conducted public surveying to accurately capture and integrate core user needs and constraints",
        "Successfully navigated tight project constraints across budget, time, resource availability, and usability requirements",
        "Engineered the final product using sustainable materials with a strong focus on modularity and ease of repair"
      ],
      skills: ["CAD", "Product Development", "User Needs Integration", "Creativity", "Decision Making", "Iterative Design", "Fast Prototyping"],
      detailedInfo: "Farmers in Malawi face a tight, weather-dependent window to plant their crops. To address this, we engineered a precision seeder specifically tailored to the local terrain and the needs of the people using it. Navigating strict constraints around budget, available resources, and deadlines, I designed a sustainable, highly repairable solution. The final product empowers farmers to reliably and affordably control seed placement and fertilization, providing a critical tool exactly when they need it most.",
      images: [],
      documents: [
        { name: "Part 1", url: `${import.meta.env.BASE_URL}Hand-in_1.pdf` },
        { name: "Part 2", url: `${import.meta.env.BASE_URL}PDED_-_Hand-in_2_-_group_7.pdf` },
        { name: "Mid-Project Presentation", url: `${import.meta.env.BASE_URL}PDED_-_midterm_presentation_-_group_7.pdf` },
        { name: "User Input", url: `${import.meta.env.BASE_URL}User_Interview_Summary.pdf` },
        { name: "Needs Matrix", url: `${import.meta.env.BASE_URL}Metrix-Needs_Matrix.xlsx` }
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
              <p className="text-lg text-muted-foreground whitespace-pre-line">{project.detailedInfo}</p>
              {projectId === "fendt-vario" && (
                <p className="text-lg text-muted-foreground italic">Different original concept sketches exist only as physical copies and have not yet been converted to digital format.</p>
              )}
              {projectId === "hydrogen-car" && (
                <>
                  <p className="text-lg text-muted-foreground">More information available on demand. Not publicly available due to privacy agreements.</p>
                  <p className="text-lg text-muted-foreground">
                    <a href="https://www.ka-raceing.de/hydrogen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      https://www.ka-raceing.de/hydrogen
                    </a>
                  </p>
                </>
              )}
              {project.images.length > 0 && (
                <div className="space-y-4 pt-2">
                  {project.images.map((image, idx) => (
                    <div key={idx}>
                      <img
                        src={image}
                        alt={project.title}
                        className="rounded-lg border-2 border-primary shadow-sm w-full h-auto"
                        onError={(e) => {
                          console.error('Image failed to load:', image);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {project.imageDescriptions?.[idx] && (
                        <p className="text-sm text-muted-foreground mt-2 italic">{project.imageDescriptions[idx]}</p>
                      )}
                    </div>
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
        </div>
      </div>
      <FloatingActions />
    </div>
  );
};

export default ProjectDetail;
