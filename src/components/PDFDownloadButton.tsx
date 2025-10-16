import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Eye } from "lucide-react";

interface PDFDownloadButtonProps {
  name: string;
  url: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ name, url }) => {
  return (
    <div className="flex items-center gap-2 p-3 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
      <div className="flex-1">
        <p className="font-medium text-sm">{name}</p>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => window.open(url, '_blank')}
          title="Open in new tab"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Open
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => window.open(url, '_blank')}
          title="Preview"
        >
          <Eye className="h-4 w-4 mr-1" />
          Preview
        </Button>
        <a href={url} download>
          <Button
            size="sm"
            variant="outline"
            title="Download"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PDFDownloadButton;

