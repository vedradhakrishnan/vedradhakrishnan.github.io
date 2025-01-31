import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import MovingPlane from './components/MovingPlane';
import Tablet from './components/Tablet';
import CanvasLoader from './components/CanvasLoader';
import Overlay from './components/Overlay';

const Scene = () => {
  // const x = useControls('Tablet', {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  // });

  return (
    <div className="w-full h-full fixed top-0 left-0">
      <Leva />

      {/* Three.js Canvas */}
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, .1, .6], fov: 75 }}
      >
        <fog attach="fog" args={['#000000', 1, 2.5]} />
        <Suspense fallback={<CanvasLoader />}>
          <color attach="background" args={['#100814']} />
          {/* Lights */}
          <ambientLight color="#ffffff" intensity={10} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />

          {/* Plane Grid */}
          <MovingPlane />

          {/* Tablet */}
          {/* <Tablet scale={1} position={[x.positionX, x.positionY, x.positionZ]} rotation={[0, 0, 1.57]} /> */}

          {/* Orbit Controls */}
          {/* <OrbitControls enableDamping /> */}
        </Suspense>
      </Canvas>

      {/* UI Overlay */}
      <Overlay />
    </div>
  );
};

export default Scene;
