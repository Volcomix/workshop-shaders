import * as twgl from 'twgl.js'
import './config'
import baseVert from './shaders/base.vert'
import simpleFrag from './shaders/simple.frag'
import { updateStats } from './stats'
import './style.css'

const gl = document.querySelector('canvas')!.getContext('webgl2')!

const programInfo = twgl.createProgramInfo(gl, [baseVert, simpleFrag])

const arrays = {
  a_position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
  a_texCoord: [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1],
}
const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays)

requestAnimationFrame(animate)

function animate(time: number) {
  updateStats()

  twgl.resizeCanvasToDisplaySize(gl.canvas)
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  const uniforms = {
    u_time: time * 0.001,
    u_resolution: [gl.canvas.width, gl.canvas.height],
  }

  gl.useProgram(programInfo.program)
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo)
  twgl.setUniforms(programInfo, uniforms)
  twgl.drawBufferInfo(gl, bufferInfo)

  requestAnimationFrame(animate)
}
