import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ position }) => {
  const { scene, nodes, materials } = useGLTF("/models/niggachair.glb");

  return (
    <Suspense fallback={null}>
      <primitive position={position} object={scene} />
    </Suspense>
  );
};

useGLTF.preload("/models/druid.glb"); // Preload for better performance

export default Model;
