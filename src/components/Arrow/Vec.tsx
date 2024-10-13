import { Vector3 } from "three";

export function Vec({ origin, direction, color }) {
  const dir = new Vector3(...direction);
  return (
    <arrowHelper
      args={[dir.normalize(), new Vector3(...origin), dir.length(), color]}
    />
  );
}
