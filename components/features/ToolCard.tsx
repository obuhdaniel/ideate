// @ts-nocheck

interface ToolCardProps {
  tool: { name: string; icon: string };
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 hover:bg-white/20 transition-colors duration-300">
      <img
        src={tool.icon}
        alt={tool.name}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
