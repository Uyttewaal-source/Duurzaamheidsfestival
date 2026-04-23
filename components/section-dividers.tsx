export function SoftCurve({ 
  fromColor = "transparent", 
  toColor = "transparent",
  className = "" 
}: { 
  fromColor?: string
  toColor?: string
  className?: string 
}) {
  return (
    <div className={`relative h-24 md:h-32 lg:h-40 ${className}`} style={{ background: fromColor }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-full w-full"
        style={{ fill: toColor }}
      >
        <path d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}

export function GentleWave({ 
  color = "var(--cream)",
  className = "",
  flip = false
}: { 
  color?: string
  className?: string
  flip?: boolean
}) {
  return (
    <div className={`relative h-16 w-full md:h-20 lg:h-24 ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ fill: color }}
      >
        <path d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  )
}

export function OrganicDivider({ 
  topColor = "transparent",
  bottomColor = "transparent",
  className = "" 
}: { 
  topColor?: string
  bottomColor?: string
  className?: string 
}) {
  return (
    <div className={`relative h-20 md:h-28 lg:h-36 ${className}`}>
      <div className="absolute inset-0" style={{ background: topColor }} />
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-full w-full"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          style={{ fill: bottomColor }}
        />
      </svg>
    </div>
  )
}

export function FloatingElement({ 
  children,
  className = "",
  delay = "0s",
  duration = "6s"
}: { 
  children: React.ReactNode
  className?: string
  delay?: string
  duration?: string
}) {
  return (
    <div 
      className={`animate-[float_ease-in-out_infinite] ${className}`}
      style={{ 
        animationDelay: delay, 
        animationDuration: duration,
      }}
    >
      {children}
    </div>
  )
}

export function OverlappingSection({
  children,
  className = "",
  overlapAmount = "-mt-16 md:-mt-24 lg:-mt-32"
}: {
  children: React.ReactNode
  className?: string
  overlapAmount?: string
}) {
  return (
    <div className={`relative z-10 ${overlapAmount} ${className}`}>
      {children}
    </div>
  )
}
