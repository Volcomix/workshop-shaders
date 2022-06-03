import glsl from './glsl'

export default glsl`

precision highp float;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

in vec2 v_texCoord;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_param1;
uniform float u_param2;
uniform float u_param3;
uniform float u_param4;

out vec4 outColor;

void main() {
  vec2 uv = v_texCoord;

  outColor = vec4(1, 0, 0, 1);
}

`
