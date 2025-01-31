import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const MovingPlane = () => {
  const TEXTURE_PATH = "assets/grid.png";
  const DISPLACEMENT_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/displacement.png";

  // Load textures
  const gridTexture = useLoader(TextureLoader, TEXTURE_PATH);
  const terrainTexture = useLoader(TextureLoader, DISPLACEMENT_PATH);

  const plane1Ref = useRef();
  const plane2Ref = useRef();

  // Animate the planes to create the endless terrain effect
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const speed = 0.15;

    if (plane1Ref.current) {
      plane1Ref.current.position.z = (elapsedTime * speed) % 2;
    }
    if (plane2Ref.current) {
      plane2Ref.current.position.z = ((elapsedTime * speed) % 2) - 2;
    }
  });

  return (
    <>
      <mesh ref={plane1Ref} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[1, 2, 24, 24]} />
        <meshStandardMaterial map={gridTexture} displacementMap={terrainTexture} displacementScale={0.4} />
      </mesh>

      <mesh ref={plane2Ref} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, -2]}>
        <planeGeometry args={[1, 2, 24, 24]} />
        <meshStandardMaterial map={gridTexture} displacementMap={terrainTexture} displacementScale={0.4} />
      </mesh>
    </>
  );
};

export default MovingPlane;
