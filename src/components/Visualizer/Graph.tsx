import { OrbitControls } from "@react-three/drei";
import { CoordinateSystem } from "../CoordinateSystem/CoordinateSystem";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vec } from "../Arrow/Vec";

export const Graph = (props) => {
  const { showGrid, resetCamera, content } = props;

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
      <Vec
        origin={[content.in.origin.x, content.in.origin.y, content.in.origin.z]}
        direction={[
          content.in.direction.x,
          content.in.direction.y,
          content.in.direction.z,
        ]}
        color={"orange"}
      />
      {content.out.map((vec, index) => {
        return (
          <Vec
            origin={[vec.origin.x, vec.origin.y, vec.origin.z]}
            direction={[vec.direction.x, vec.direction.y, vec.direction.z]}
            color={"black"}
            key={index}
          />
        );
      })}
      <OrbitControls />
    </group>
  );
};
