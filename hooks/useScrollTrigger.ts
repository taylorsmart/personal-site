import { useEffect, useState, RefObject } from 'react'

interface Offset {
  top: number
  left: number
}

function getOffset(el: Element | null): Offset {
  let _x = 0
  let _y = 0
  let currentEl = el as HTMLElement | null
  while (
    currentEl &&
    !isNaN(currentEl.offsetLeft) &&
    !isNaN(currentEl.offsetTop)
  ) {
    _x += currentEl.offsetLeft - currentEl.scrollLeft
    _y += currentEl.offsetTop - currentEl.scrollTop
    currentEl = currentEl.offsetParent as HTMLElement
  }
  return { top: _y, left: _x }
}

function hasScrolledTo(el: Element | null, perc: number = 0.8): boolean {
  if (!el) return false
  const top = getOffset(el).top
  const offset = window.innerHeight * perc
  return top - offset <= window.pageYOffset
}

export default function useTriggerOnScroll(
  ref: RefObject<Element>,
  onTrigger: (triggered: boolean) => void,
  perc: number = 0.8
): void {
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    function onScroll() {
      const viewed = hasScrolledTo(ref.current, perc)
      if (viewed && !triggered) {
        window.removeEventListener('scroll', onScroll)
        setTriggered(true)
        onTrigger(true)
      } else if (!viewed && triggered) {
        window.removeEventListener('scroll', onScroll)
        setTriggered(false)
        onTrigger(false)
      }
    }

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', onScroll)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [ref, onTrigger, triggered, perc])
}
