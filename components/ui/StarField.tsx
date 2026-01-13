interface StarFieldProps {
  count?: number;
  className?: string;
}

export default function StarField({
  count = 60,
  className = "",
}: StarFieldProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/70 animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
