import glsl from './glsl'

export default glsl`

precision highp float;

in vec2 v_texCoord;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 outColor;

void main() {
  outColor = vec4(1, 0, 0, 1);
}

`
