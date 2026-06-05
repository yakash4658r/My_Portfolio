import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar3D() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/model.glb');

  useFrame((state) => {
    if (group.current) {
      // Calculate target rotation based on mouse pointer position
      // Pointer coordinates go from -1 to 1 on both axes
      const targetX = (state.pointer.y * Math.PI) / 8; // Look up/down
      const targetY = (state.pointer.x * Math.PI) / 4; // Look left/right
      
      // Smoothly interpolate current rotation to target rotation
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetX, 0.1);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.1);
    }
  });

  return (
    <group ref={group} position={[0, -2.5, 0]} scale={2.5}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model for faster initial render
useGLTF.preload('/model.glb');
