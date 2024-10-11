import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CoordinateSystem } from "../CoordinateSystem/CoordinateSystem";

export default function Visualizer() {
  return (
    <Canvas style={{ height: "100%" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CoordinateSystem />
      <OrbitControls />
    </Canvas>
  );
}
