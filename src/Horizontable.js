import React, { useRef, useEffect } from 'react'

const style = {
  width: '100%',
  overflowX: 'hidden'
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
    ref.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    ref.current.addEventListener('mouseleave', onDown)
    ref.current.addEventListener('mouseup', onDown)
    ref.current.addEventListener('mousedown', onMouseDown)
    ref.current.addEventListener('mousemove', onMouseMove)
    ref.current.addEventListener('wheel', onWheel)
  }, [])

  return (
    <div style={style} ref={ref}>
      {children}
    </div>
  )
}

export default Horizontable
