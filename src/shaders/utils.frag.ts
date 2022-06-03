import glsl from './glsl'

export default glsl`

precision highp float;

const float lineWidth = 8.0;
const float halfLineWidth = lineWidth / 2.0;

float plot(vec2 uv, float y) {    
  float outside = halfLineWidth / u_resolution.y;
  float inside = (halfLineWidth - 1.0) / u_resolution.y;
  return
    smoothstep(y + outside, y + inside, uv.y) -
    smoothstep(y - inside, y - outside, uv.y);
}

`
