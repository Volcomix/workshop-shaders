import GUI from 'lil-gui'
import { hideStats, showStats } from './stats'

const config = {
  stats: false,
  param1: 5,
  param2: 5,
  param3: 5,
  param4: 5,
}

if (config.stats) {
  showStats()
}

const gui = new GUI().close()
gui.add(config, 'stats').onChange((stats: boolean) => {
  if (stats) {
    showStats()
  } else {
    hideStats()
  }
})
gui.add(config, 'param1', 0, 20, 0.01)
gui.add(config, 'param2', 0, 20, 0.01)
gui.add(config, 'param3', 0, 20, 0.01)
gui.add(config, 'param4', 0, 20, 0.01)

export default config
