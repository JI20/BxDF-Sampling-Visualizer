import { useState } from "react";
import { Graph } from "./Graph";
import { Canvas } from "@react-three/fiber";
import { sampleSphericalCaps } from "./Sampling";

export default function Visualizer() {
  const [showGrid, setShowGrid] = useState(true);
  const [resetCamera, setResetCamera] = useState(0);
  const [content, setContent] = useState([
    {
      in: {
        origin: { x: 0, y: 0, z: 0 },
        direction: { x: 1, y: 1, z: 1 },
      },
      out: [],
    },
    {
      in: {
        origin: { x: 0, y: 0, z: 0 },
        direction: { x: -1, y: 1, z: 1 },
      },
      out: [],
    },
    {
      in: {
        origin: { x: 0, y: 0, z: 0 },
        direction: { x: 1, y: 1, z: -1 },
      },
      out: [],
    },
    {
      in: {
        origin: { x: 0, y: 0, z: 0 },
        direction: { x: -1, y: 1, z: -1 },
      },
      out: [],
    },
  ]);

  return (
    <div className="h-full w-full">
      <div className="fixed flex w-full justify-end p-8 z-[100]">
        <h1>Settings</h1>
      </div>
      <div className="fixed bottom-0 w-full flex justify-center z-[100] p-8">
        <ul className="w-[80%] bg-white/70 flex justify-evenly rounded-[6px] border-black border-2 py-4">
          <li
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => {
              setContent((state) => {
                let newState: any[] = [];
                state.forEach((set) => {
                  let newSample = {
                    origin: { x: 0, y: 0, z: 0 },
                    direction: sampleSphericalCaps([
                      set.in.direction.x,
                      set.in.direction.y,
                      set.in.direction.z,
                    ]),
                  };
                  let newOut = structuredClone(set.out);
                  newOut.push(newSample);
                  let newSet = { in: set.in, out: newOut };
                  newState.push(newSet);
                });

                return newState;
              });
            }}
          >
            Generate new sample
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            Set Incoming Direction
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            Set Sampling Method
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => {
              console.log(showGrid);
              setShowGrid((state) => !state);
            }}
          >
            Show grid
          </li>
          <li
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => {
              setResetCamera((state) => ++state);
            }}
          >
            Reset camera
          </li>
          <li className="hover:text-blue-500 cursor-pointer">Reset content</li>
        </ul>
      </div>
      <Canvas style={{ height: "100%" }}>
        <Graph
          showGrid={showGrid}
          resetCamera={resetCamera}
          content={content}
        />
      </Canvas>
    </div>
  );
}
