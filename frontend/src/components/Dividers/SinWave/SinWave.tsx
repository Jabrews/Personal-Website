import { useEffect, useRef } from "react"
import type { WaveProps } from "../../../App"

export default function SinWave({ height, width }: WaveProps) {
  const pathRef = useRef<SVGPathElement | null>(null)

  const centerY = height / 2
  const amplitude = height * 0.35

  const cycles = 3
  const frequency = (Math.PI * 2 * cycles) / width

  useEffect(() => {
    if (!pathRef.current || width === 0 || height === 0) return

    let t = 0
    let rafId: number

    const animate = () => {
      let d = `M 0 ${centerY}`

      for (let x = 0; x <= width; x += 4) {
        const y = centerY + Math.sin(x * frequency + t) * amplitude
        d += ` L ${x} ${y}`
      }

      pathRef.current!.setAttribute("d", d)
      t += 0.06
      rafId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(rafId)
  }, [width, height, amplitude, centerY, frequency])

  return (
    <svg width={width} height={height}>
      <path
        ref={pathRef}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  )
}
