import './App.scss'

// import robotjs from 'https://esm.sh/robotjs'
// import JitsiRobotjs from '@jitsi/robotjs'
import gsap from 'gsap'
import Draggable from 'gsap/Draggable'
import nutjs from 'nutjs'

const draggableCircle = document.querySelector('.slider-circle')

gsap.registerPlugin(Draggable)

Draggable.create(draggableCircle, {
  type: 'rotation',
  onDrag: (e) => {
    // const color = JitsiRobotjs.getColorPixel(e.ClientX, e.ClientY)
    const color = nutjs.colorAt(e.ClientX, e.ClientY)
    console.log(`color`, color)
  },
})

function App() {
  return (
    <div className='app'>
      <div className='header'></div>
      <div className='picker' id='picker'>
        <div className='hue-wheel' id='hue-wheel'>
          <svg
            className='slider-circle'
            viewBox='0 -1 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              className='draggable-circle'
              cx='50'
              cy='4'
              r='4.5'
            ></circle>
          </svg>
        </div>
        <div className='shade-disk' id='shade-disk'></div>
      </div>
    </div>
  )
}

export default App
