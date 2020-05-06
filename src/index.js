import React, { useRef, useEffect } from 'react'

const style = {
  width: '100%',
  overflow: 'hidden',
  cursor: 'pointer'
}

const Horizontable = ({ children }) => {
  const ref = useRef(null)

  let isDown = false
  let startX
  let scrollLeft

  const onMouseDown = (event) => {
    isDown = true
    startX = event.pageX - ref.current.offsetLeft

    scrollLeft = ref.current.scrollLeft
  }

  const onTouchDown = (event) => {
    startX = event.targetTouches[0].pageX - ref.current.offsetLeft

    scrollLeft = ref.current.scrollLeft
  }

  const onDown = () => (isDown = false)

  const onTouchMove = (event) => {
    const x = event.targetTouches[0].pageX - ref.current.offsetLeft
    const walk = (x - startX) * 1

    scrollingLeft(scrollLeft - walk)
  }

  const onMouseMove = (event) => {
    if (!isDown) {
      return
    }

    event.preventDefault()
    const x = event.pageX - ref.current.offsetLeft
    const walk = (x - startX) * 1

    scrollingLeft(scrollLeft - walk)
  }

  const onWheel = (event) => {
    event.preventDefault()

    scrollingLeft(ref.current.scrollLeft + event.deltaY)
  }

  const scrollingLeft = (left) => (ref.current.scrollLeft = left)

  useEffect(() => {
    ref.current.addEventListener('wheel', onWheel, { passive: false })
  }, [])

  return (
    <div
      style={style}
      ref={ref}
      onTouchStart={onTouchDown}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onDown}
      onMouseLeave={onDown}
    >
      {children}
    </div>
  )
}

export default Horizontable
