import { X } from "lucide-react";

interface ImageArticleProps {
  title: string;
  subtitle: string;
  content: string;
  onClose: () => void;
}

const ImageArticle = ({ title, subtitle, content, onClose }: ImageArticleProps) => {
  const paragraphs = content.split("\n\n");

  return (
    <article className="mt-8 animate-reveal overflow-hidden">
      <div className="newspaper-double-divider" />
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
            {title}
          </h2>
          <p className="text-muted-foreground font-display italic text-sm mt-1">
            {subtitle}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-primary transition-colors p-1"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>
      </div>

      <div className="article-content article-columns">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-4 text-foreground/85 leading-relaxed">
            {i === 0 && (
              <span className="font-display text-4xl text-primary float-left mr-2 mt-1 leading-none">
                {p.charAt(0)}
              </span>
            )}
            {i === 0 ? p.slice(1) : p}
          </p>
        ))}
      </div>

      <div className="newspaper-divider" />
    </article>
  );
};

export default ImageArticle;
