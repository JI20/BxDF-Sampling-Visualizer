import { OrbitControls } from "@react-three/drei";
import { CoordinateSystem } from "../CoordinateSystem/CoordinateSystem";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const Graph = (props) => {
  const { showGrid, resetCamera } = props;

  const { camera, gl } = useThree();

  const resetCam = () => {
    camera.position.set(5, 5, 5); // Reset to initial position
    camera.lookAt(0, 0, 0); // Make sure it's looking at the origin
    gl.domElement.dispatchEvent(new Event("resize")); // Trigger a re-render
  };

  useEffect(() => {
    resetCam();
  }, [resetCamera]);

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CoordinateSystem showGrid={showGrid} />
      <OrbitControls />
    </group>
  );
};
