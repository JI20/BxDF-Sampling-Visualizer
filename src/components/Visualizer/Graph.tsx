import { OrbitControls } from "@react-three/drei";
import { CoordinateSystem } from "../CoordinateSystem/CoordinateSystem";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vec } from "../Arrow/Vec";
import { VecIn } from "../Arrow/VecIn";

const colorCodes = [
  "orange",
  "magenta",
  "indigo",
  "aqua",
  "hotpink",
  "lime",
  "violet",
  "crimson",
];

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
      {content.map((set, index) => {
        return (
          <group>
            <VecIn
              origin={[set.in.origin.x, set.in.origin.y, set.in.origin.z]}
              direction={[
                set.in.direction.x,
                set.in.direction.y,
                set.in.direction.z,
              ]}
              color={colorCodes[index % colorCodes.length]}
            />
            {set.out.map((vec, ind) => {
              return (
                <Vec
                  origin={[vec.origin.x, vec.origin.y, vec.origin.z]}
                  direction={[
                    vec.direction.x,
                    vec.direction.y,
                    vec.direction.z,
                  ]}
                  color={colorCodes[index % colorCodes.length]}
                  key={ind}
                />
              );
            })}
          </group>
        );
      })}
      <OrbitControls />
    </group>
  );
};
