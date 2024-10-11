import { Vector3 } from "three";

export function Axis({ direction, origin, color }) {
  return (
    <arrowHelper
      args={[new Vector3(...direction), new Vector3(...origin), 1, color]}
    />
  );
}
