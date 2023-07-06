import { Store, Dispatcher, renderDOM } from './simpleflux/index.js'
import App from './components/App.js'

const initialAppState = {
  gridUnit: 16,
  gridDotSize: 1.25,
  gridWidth: 10000,
  gridHeight: 6000,
  notes: [
    {
      id: 'ahQKiaYhJVRc',
      originX: 4800,
      originY: 2736,
      width: 400,
      height: 112,
      text: 'Hello! 👋 I made this project to demonstrate a simple way to organise vanilla javascript components inspired by the Flux architecture.',
    },
    {
      id: 'bOKLDLiWLbKL',
      originX: 4800,
      originY: 2864,
      width: 400,
      height: 96,
      text: '↖️ You can move notes around by dragging their top left corner.',
    },
    {
      id: 'ciNQPeKAgScb',
      originX: 4800,
      originY: 2976,
      width: 288,
      height: 144,
      text: 'You can resize notes by dragging the bottom and right edges... 👉 👇 ...and also the bottom right corner.',
    },
    {
      id: 'aOZNRRgMWCJc',
      originX: 4800,
      originY: 3136,
      width: 400,
      height: 96,
      text: 'You can draw new notes by selecting the plus button.',
    },
  ],
}

export const globalStore = new Store(initialAppState)
export const globalDispatcher = new Dispatcher().register(globalStore)

renderDOM(App, document.getElementById('root'))