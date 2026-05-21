// ── WAVE BACKGROUND SHADERS ──────────────────────────────────────────────

export const waveVertex = /* glsl */`
  uniform float uTime;

  varying float vElevation;

  void main() {
    vec4 pos = modelMatrix * vec4(position, 1.0);

    float e =
      sin(pos.x * 0.55 + uTime * 0.50) * 0.20 +
      sin(pos.z * 0.80 + uTime * 0.42) * 0.15 +
      sin(pos.x * 0.30 + pos.z * 0.55 + uTime * 0.32) * 0.22 +
      sin(pos.x * 1.30 + pos.z * 0.90 + uTime * 0.65) * 0.06 +
      sin(pos.x * 2.10 - pos.z * 1.40 + uTime * 0.90) * 0.03;

    pos.y += e;
    vElevation = e;

    gl_Position = projectionMatrix * viewMatrix * pos;
  }
`;

export const waveFragment = /* glsl */`
  uniform vec3  uDeepColor;
  uniform vec3  uSurfaceColor;
  uniform float uColorOffset;
  uniform float uColorMultiplier;

  varying float vElevation;

  void main() {
    float t = clamp((vElevation + uColorOffset) * uColorMultiplier, 0.0, 1.0);
    vec3  color = mix(uDeepColor, uSurfaceColor, t);

    // Subtle foam shimmer on high crests
    float foam = smoothstep(0.22, 0.32, vElevation);
    color = mix(color, vec3(0.14, 0.36, 0.50), foam * 0.55);

    gl_FragColor = vec4(color, 1.0);
  }
`;
