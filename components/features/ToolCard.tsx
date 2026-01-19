// @ts-nocheck
import Image from "next/image";

interface ToolCardProps {
  tool: { name: string; icon: string };
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="flex-shrink-0 w-30 h-30 md:w-70 md:h-70 bg-white/3 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 hover:bg-white/20 transition-colors duration-300">
      <div className="relative w-[90%] h-[90%] md:w-[70%] md:h-[70%]">
        <Image
          src={tool.icon}
          alt={tool.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
