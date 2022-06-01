import GUI from 'lil-gui'
import { hideStats, showStats } from './stats'

const config = {
  stats: true,
}

if (config.stats) {
  showStats()
}

const gui = new GUI()
gui.add(config, 'stats').onChange((stats: boolean) => {
  if (stats) {
    showStats()
  } else {
    hideStats()
  }
})

export default config
