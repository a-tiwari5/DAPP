import React, { useEffect, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [rotation, setRotation] = useState(0);
   useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    setRotation(elapsedTime);
  });
  return (
    <mesh rotation-y={rotation}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setisMobile] = useState(false)

  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500)')

    setisMobile(mediaQuery.matches)
    const handleMediaQueryChange=(env)=>{
      setisMobile(env.matches)
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)
    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
