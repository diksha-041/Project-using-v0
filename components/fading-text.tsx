"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type FadingTextProps = {
  items: string[]
  displayTime?: number // time each item is visible (ms)
  fadeTime?: number // fade duration (ms)
  className?: string
}

export default function FadingText({ items, displayTime = 1800, fadeTime = 300, className }: FadingTextProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(true)
    const showTimer = window.setTimeout(() => setVisible(false), displayTime)
    const changeTimer = window.setTimeout(() => {
      setIndex((i) => (i + 1) % items.length)
      setVisible(true)
    }, displayTime + fadeTime)

    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(changeTimer)
    }
  }, [index, displayTime, fadeTime, items.length])

  return (
    <div aria-live="polite" className={cn("min-h-[1.75rem]", className)}>
      <span
        key={index}
        className={cn(
          "inline-block transition-all",
          `duration-[${fadeTime}ms]`,
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
        )}
      >
        {items[index]}
      </span>
    </div>
  )
}
