import { useEffect, useRef } from "react"
import type { WaveProps } from "../../../App"

export default function RadioWave({ height, width }: WaveProps) {
  const pathRef = useRef<SVGPathElement | null>(null)

  const centerY = height / 2
  const amplitude = height * 0.35

  const carrierCycles = 18
  const envelopeCycles = 2

  const carrierFreq = (Math.PI * 2 * carrierCycles) / width
  const envelopeFreq = (Math.PI * 2 * envelopeCycles) / width

  useEffect(() => {
    if (!pathRef.current || width === 0 || height === 0) return

    let t = 0
    let rafId: number

    const animate = () => {
      let d = `M 0 ${centerY}`

      for (let x = 0; x <= width; x += 3) {
        const envelope = Math.sin(x * envelopeFreq + t * 0.5)
        const carrier = Math.sin(x * carrierFreq + t * 2)

        const y = centerY + carrier * envelope * amplitude
        d += ` L ${x} ${y}`
      }

      pathRef.current!.setAttribute("d", d)
      t += 0.03
      rafId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(rafId)
  }, [width, height, amplitude, carrierCycles, centerY, envelopeCycles, carrierFreq, envelopeFreq])

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

