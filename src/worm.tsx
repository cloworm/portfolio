import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Paper, { Path, Point, Color } from 'paper'

import useIsMounted from './hooks/useIsMounted'

// function useHookWithRefCallback(): [ref: any, setRef: any] {
//   const ref = useRef(null)
//   const setRef = useCallback(node => {
//     if (ref.current) {
//       // Make sure to cleanup any events/references added to the last instance
//     }

//     if (node) {
//       // Check if a node is actually passed. Otherwise node would be null.
//       // You can now do what you need to, addEventListeners, measure, etc.
//     }

//     // Save a reference to the node
//     ref.current = node
//   }, [])

//   return [ref, setRef]
// }

const Worm = (): ReactElement => {
  const isMounted = useIsMounted()
  // const [canvasRef, setCanvasRef] = useHookWithRefCallback()
  // const [path, setPath] = useState<any>()
  const pathRef = useRef<InstanceType<typeof Path>>()
  // const path = useMemo(() => isMounted ? new Path({
  //   strokeColor: '#E4141B',
  //   strokeWidth: 20,
  //   strokeCap: 'round'
  // }) : null, [isMounted])
  const points = 25
  const length = 35

  const draw = useCallback(() => {
    const { current } = pathRef
    if (!current) return

    const start = [10, 1]
    for (let i = 0; i < points; i++) {
      current.add(start, new Point(i * length, 0))
    }
  }, [pathRef])

  const setCanvasRef = useCallback(node => {
    if (node !== null) {
      console.log('node', node)
      Paper.setup(node)
      pathRef.current = new Path({
        strokeColor: '#E4141B',
        strokeWidth: 20,
        strokeCap: 'round'
      })
      draw()
    // setHeight(node.getBoundingClientRect().height);
    }
  }, [draw])

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   console.log('canvas', canvas)
  //   if (!canvas) return
  //   Paper.setup(canvas)
  //   pathRef.current = new Path({
  //     strokeColor: '#E4141B',
  //     strokeWidth: 20,
  //     strokeCap: 'round'
  //   })
  //   draw()
  // }, [canvasRef, draw])

  function onMouseMove(event: any) {
    if (!pathRef.current) return

    pathRef.current.firstSegment.point = event.point
    for (let i = 0; i < points - 1; i++) {
      const segment: any = pathRef.current.segments[i]
      const nextSegment = segment.next
      console.log('segment', segment, 'nextSegment', nextSegment)
      const vector: any = segment.point - nextSegment.point
      if (!vector) return
      vector.length = length
      nextSegment.point = segment.point - vector
    }
    pathRef.current.smooth({ type: 'continuous' })
  }

  function onMouseDown(event: any) {
    if (!pathRef.current) return
    pathRef.current.fullySelected = true
    pathRef.current.strokeColor = new Color('#e08285')
  }

  function onMouseUp(event: any) {
    if (!pathRef.current) return
    pathRef.current.fullySelected = false
    pathRef.current.strokeColor = new Color('#e4141b')
  }

  if (!isMounted) return <div></div>

  return (
    <div className="min-h-screen" onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <canvas ref={setCanvasRef} id="canvas" data-resize></canvas>
    </div>
  )
}

export default Worm
