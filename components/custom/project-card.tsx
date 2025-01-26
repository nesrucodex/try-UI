import {
  Github,
  HeartIcon,
  ImageIcon,
  MessageCircleCodeIcon,
  Navigation2Icon,
} from "lucide-react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  likes: number;
  comments: number;
  githubUrl?: string;
  liveDemoUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  likes,
  comments,
  githubUrl,
  liveDemoUrl,
}) => {
  return (
    <div className="rounded-lg border border-white/5 pb-4">
      <div className="group mb-4 flex h-[12rem] items-center justify-center rounded-md border border-white/5">
        <ImageIcon
          size={50}
          className="opacity-10 transition-all duration-300 group-hover:scale-[1.2]"
        />
      </div>
      <section className="px-4">
        <p className="flex items-end gap-2">
          <span className="text-lg font-bold">{title}</span>
          <span className="text-xs text-neutral-400">({category})</span>
        </p>
        <p className="line-clamp-2 text-neutral-400">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <HeartIcon size={20} />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircleCodeIcon size={20} />
              <span>{comments}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <Navigation2Icon size={20} />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
