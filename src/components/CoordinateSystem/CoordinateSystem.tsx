import { Axis } from "../Arrow/Axis";
export function CoordinateSystem() {
  return (
    <group>
      {/* X Axis (Red) */}
      <Axis direction={[1, 0, 0]} origin={[0, 0, 0]} color={"red"} />
      {/* Y Axis (Green) */}
      <Axis direction={[0, 1, 0]} origin={[0, 0, 0]} color={"green"} />
      {/* Z Axis (Blue) */}
      <Axis direction={[0, 0, 1]} origin={[0, 0, 0]} color={"blue"} />
      {/* Grid for the XZ plane (default) */}
      <gridHelper args={[10, 10, "gray", "lightgray"]} />

      {/* Grid for the XY plane */}
      <gridHelper
        args={[10, 10, "gray", "lightgray"]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      {/* Grid for the YZ plane */}
      <gridHelper
        args={[10, 10, "gray", "lightgray"]}
        rotation={[0, 0, Math.PI / 2]}
      />
    </group>
  );
}
