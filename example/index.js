import React from 'react'
import ReactDOM from 'react-dom'
import Horizontable from '../src/index'

const style = {
  parent: {
    width: '600px',
    height: '400px',
    display: 'flex',
    lineHeight: '400px'
  },
  children: {
    width: '1000px',
    display: 'flex'
  },
  card: {
    width: '450px',
    height: '400px',
    background: 'linear-gradient(to right, #ec6f66, #f3a183)',
    color: '#fff',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  }
}

function Example() {
  return (
    <div style={style.parent}>
      <Horizontable>
        <div style={style.children}>
          <div style={style.card}>Scroll me 😍</div>
          <div style={style.card}>Drag me 😍</div>
        </div>
      </Horizontable>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('app'))
