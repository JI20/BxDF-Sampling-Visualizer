import { Vector3 } from "three";

export function VecIn({ origin, direction, color }) {
  const dir = new Vector3(...direction);
  return (
    <group>
      <arrowHelper
        args={[dir.normalize(), new Vector3(...origin), dir.length(), color]}
      />
      {/* Dot (Sphere) at the end of the arrow */}
      <mesh
        position={dir
          .clone()
          .multiplyScalar(dir.length() * 1.05)
          .add(new Vector3(...origin))}
      >
        <sphereGeometry args={[0.02, 16, 16]} /> {/* Dot size */}
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}
