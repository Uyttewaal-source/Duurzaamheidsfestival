interface WaveDividerProps {
  fill?: string
  className?: string
  flip?: boolean
}

export function WaveDivider({ fill = "fill-background", className = "", flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block h-[60px] w-full md:h-[80px] ${fill}`}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,googlechrome172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  )
}

export function BlobShape({ className = "", color = "bg-green/20" }: { className?: string, color?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl ${color} ${className}`} />
  )
}

export function OrganicBlob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <path
        fill="currentColor"
        d="M44.7,-76.4C58.8,-69.2,71.8,-58.5,80.4,-44.8C89,-31.1,93.3,-14.5,91.8,1.5C90.3,17.6,83.1,33.2,73.1,46.7C63.2,60.2,50.6,71.7,35.8,78.9C21,86.1,4.1,89,-12.4,87.2C-28.9,85.4,-45,78.9,-58.1,68.4C-71.2,57.9,-81.2,43.4,-86.5,27.1C-91.8,10.8,-92.3,-7.2,-87.1,-23.3C-81.9,-39.4,-71,-53.5,-57.1,-61.1C-43.2,-68.7,-26.3,-69.8,-10.3,-67.1C5.8,-64.4,30.5,-83.7,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
