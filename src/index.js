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

  const onMouseDown = event => {
    isDown = true
    startX = event.pageX - ref.current.offsetLeft
    scrollLeft = ref.current.scrollLeft
  }

  const onDown = () => (isDown = false)

  const onMouseMove = event => {
    if (!isDown) return
    event.preventDefault()
    const x = event.pageX - ref.current.offsetLeft
    const walk = (x - startX) * 1
    ref.current.scrollLeft = scrollLeft - walk
  }

  const onWheel = event => {
    event.preventDefault()
    ref.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    ref.current.addEventListener('wheel', onWheel, { passive: false })
  }, [])

  return (
    <div
      style={style}
      ref={ref}
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
