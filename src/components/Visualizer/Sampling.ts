import { Vector3 } from "three";
import { randFloat } from "three/src/math/MathUtils.js";

export const sampleSphericalCaps = (inDirection) => {
  let anisotropic = 0.0;
  let roughness = 0.05;

  let refraction = true;
  let rscaled = roughness;

  let u = randFloat(0, 1);
  let v = randFloat(0, 1);
  let aspect = Math.sqrt(1.0 - anisotropic * 0.9);
  let ax = Math.max(0.001, (rscaled * rscaled) / aspect);
  let ay = Math.max(0.001, rscaled * rscaled * aspect);

  let inStd = new Vector3(...inDirection).normalize();

  // SampleVNDF
  let phi = 2.0 * Math.PI * u;
  let z = (1.0 - v) * (1.0 - inStd.y) - inStd.y;
  let sinTheta = Math.sqrt(Math.min(Math.max(1.0 - z * z, 0.0), 1.0));
  let x = sinTheta * Math.cos(phi);
  let y = sinTheta * Math.sin(phi);
  let c = new Vector3(x, z, y);
  let wmStd = c.add(inStd);

  let wm = new Vector3(wmStd.x * ax, wmStd.y, wmStd.z * ay).normalize();
  let wl = wm.reflect(inStd);
  return { x: wl.x, y: -2 * wl.y, z: wl.z };
};
