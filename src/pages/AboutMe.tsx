import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingActions from "@/components/FloatingActions";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container max-w-4xl py-12 px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">About Me</h1>
            <p className="text-xl text-muted-foreground">Mechanical Engineer | Innovator | Problem Solver</p>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
              <img 
                src={`${import.meta.env.BASE_URL}profile-picture.jpg`}
                alt="Alexandre Sanmartin Goyanes"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `${import.meta.env.BASE_URL}placeholder.svg`;
                }}
              />
            </div>
          </div>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                Hello! I am Alexandre Sanmartin Goyanes, a Mechanical Engineering at ETH Zürich, Switzerland, 
                passionate about innovative design and practical problem-solving in the automotive and aerospace industries.
              </p>
              <p>
                My experience bridges academic research and hands-on engineering, from developing complex mechanical systems: 
                such as gearboxes, suspension mechanisms, and adaptive drivetrains; to contributing to hydrogen combustion and 
                Formula Student projects focused on performance and sustainability.
              </p>
              <p>
                I enjoy the full process of turning ideas into real, manufacturable products, applying modern design and production 
                techniques to ensure that creativity is always grounded in technical feasibility.
              </p>
              <p>
                I'm motivated by the intersection of engineering and creativity, continuously seeking opportunities to push 
                boundaries through thoughtful design, analysis, and implementation.
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">ETH Zürich</h3>
                <p className="text-muted-foreground">Master of Science in Mechanical Engineering</p>
                <p className="text-sm text-muted-foreground">Zürich, Switzerland</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Karlsruhe Institute of Technology (KIT)</h3>
                <p className="text-muted-foreground">Bachelor of Science in Mechanical Engineering</p>
                <p className="text-sm text-muted-foreground">Karlsruhe, Germany</p>
              </div>
            </CardContent>
          </Card>

          {/* Key Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Areas of Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm px-3 py-1">Automotive Engineering</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Aerospace Systems</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Mechanical Design</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Product Development</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">CAD/CAE</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Sustainable Mobility</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">System Integration</Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">Materials Research</Badge>
              </div>
            </CardContent>
          </Card>

          {/* What Drives Me */}
          <Card>
            <CardHeader>
              <CardTitle>What Drives Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p>
                I really believe great engineering derives from understanding both the technical details and the broader context. 
                Whether optimizing a tractor gearbox or exploring advanced techniques for aerospace applications, I approach 
                every project with curiosity, precision, and a drive for excellence.
              </p>
              <p>
                I'm continuously learning—through academic research, hands-on projects, and collaboration with multidisciplinary 
                teams in student competitions and university.
              </p>
            </CardContent>
          </Card>

          {/* Looking For */}
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle>Currently Seeking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-lg">
              <p>
                <strong>Internship Opportunities</strong> in Mechanical Engineering, particularly in the Aerospace and Automotive sectors
              </p>
              <p className="text-muted-foreground">
                Open to positions in Switzerland, Europe, and the USA | Available starting Summer 2026
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Floating action buttons */}
      <FloatingActions />
    </div>
  );
};

export default AboutMe;

