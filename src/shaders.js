export const vertexShader = /* glsl */`
  uniform float uTime;
  uniform float uRevealProgress;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vElevation;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);

    vec3 pos = position;

    // Subtle undulation on the tile surface
    float wave = sin(pos.x * 2.8 + uTime * 0.6) * 0.018
               + cos(pos.y * 3.2 + uTime * 0.45) * 0.014;
    pos += normal * wave * uRevealProgress;

    vElevation = wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const fragmentShader = /* glsl */`
  uniform sampler2D uTexture;
  uniform float uOpacity;
  uniform float uRevealProgress;
  uniform float uHover;
  uniform vec2 uResolution;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying float vElevation;

  // Chromatic aberration
  vec4 chromaticSample(sampler2D tex, vec2 uv, float strength) {
    float r = texture2D(tex, uv + vec2(strength, 0.0)).r;
    float g = texture2D(tex, uv).g;
    float b = texture2D(tex, uv - vec2(strength, 0.0)).b;
    float a = texture2D(tex, uv).a;
    return vec4(r, g, b, a);
  }

  void main() {
    // Fresnel-style edge fade so tiles have soft, lit edges
    float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    fresnel = pow(fresnel, 2.2);

    float aberration = 0.004 * (1.0 - uRevealProgress) + 0.0015 * uHover;
    vec4 texColor = chromaticSample(uTexture, vUv, aberration);

    // Vignette within the tile
    vec2 centered = vUv * 2.0 - 1.0;
    float vignette = 1.0 - smoothstep(0.55, 1.0, length(centered * vec2(1.0, 0.92)));

    // Subtle desaturation of dark areas → cinematic look
    float luma = dot(texColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    vec3 desaturated = mix(vec3(luma), texColor.rgb, 0.88);

    // Warm copper tint on bright areas
    vec3 tinted = mix(desaturated, desaturated * vec3(1.04, 0.98, 0.90), luma * 0.25);

    // Elevation highlights
    tinted += vElevation * 0.18 * vec3(1.0, 0.95, 0.82);

    // Edge fresnel darkening
    tinted *= (1.0 - fresnel * 0.45);

    float finalAlpha = uOpacity * vignette * texColor.a;

    gl_FragColor = vec4(tinted, finalAlpha);
  }
`;
