const PixelationShader = {
    uniforms: {
      tDiffuse: { value: null },
      resolution: { value: { x: 1024, y: 768 } },
      pixelSize: { value: 8.0 }, // Adjust this value for more or less pixelation
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 resolution;
      uniform float pixelSize;
      varying vec2 vUv;
  
      void main() {
        vec2 dxy = pixelSize / resolution; // Size of each pixel
        vec2 coord = dxy * floor(vUv / dxy); // Align UVs to pixel grid
        gl_FragColor = texture2D(tDiffuse, coord); // Sample from aligned UVs
      }
    `,
  };
  
  export default PixelationShader;
  