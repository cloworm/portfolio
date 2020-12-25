import React, { ReactElement, useCallback, useEffect, useRef } from 'react'
import Paper, { Path, Point, Color } from 'paper'

import useIsMounted from './hooks/useIsMounted'
import getRandomColor from './lib/getRandomColor'

const Worm = (): ReactElement => {
  const isMounted = useIsMounted()
  const pathRef = useRef<InstanceType<typeof Path>>()
  const points = 25
  const length = 35

  useEffect(() => {
    console.log('Paper.view is', Paper.view)
    if (!Paper || !Paper.view) return
    return Paper.view.remove()
  }, [])

  const draw = useCallback(() => {
    const { current } = pathRef
    if (!current) return

    const start = Paper.view.center.divide(new Point(10, 1))

    for (let i = 0; i < points; i++) {
      current.add(start.add(new Point(i * length, 0)))
    }

    Paper.view.onMouseMove = (event: any) => {
      if (!pathRef.current) return

      pathRef.current.firstSegment.point = event.point
      for (let i = 0; i < points - 1; i++) {
        const segment: any = pathRef.current.segments[i]
        const nextSegment = segment.next
        const vector: any = segment.point.subtract(nextSegment.point)
        vector.length = length
        nextSegment.point = segment.point.subtract(vector)
      }
      pathRef.current.smooth({ type: 'continuous' })
    }

    Paper.view.onMouseDown = (event: any) => {
      if (!pathRef.current) return
      pathRef.current.fullySelected = true
      pathRef.current.strokeColor = new Color(getRandomColor())
    }

    Paper.view.onMouseUp = (event: any) => {
      if (!pathRef.current) return
      pathRef.current.fullySelected = false
    }
  }, [pathRef])

  const setCanvasRef = useCallback(node => {
    if (node !== null) {
      console.log('node', node)
      Paper.setup(node)
      pathRef.current = new Path({
        strokeColor: getRandomColor(),
        strokeWidth: 20,
        strokeCap: 'round'
      })
      draw()
    }
  }, [draw])

  if (!isMounted) return <div></div>

  return (
    <div className="min-h-screen">
      <canvas className="w-full min-h-screen" ref={setCanvasRef} id="canvas" />
    </div>
  )
}

export default Worm
