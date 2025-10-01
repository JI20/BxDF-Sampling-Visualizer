# BxDF Sampling Visualizer 💡

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Three.js%20%7C%20TypeScript-blue)
![Vite](https://img.shields.io/badge/Vite-B576FB?style=flat&logo=vite&logoColor=white)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A web-based, real-time visualizer for exploring the behavior of various BxDF (Bidirectional Scattering Distribution Function) sampling models. This tool helps developers and researchers understand and debug how light scatters from a surface by interactively visualizing sampled light paths.

<img width="2482" height="1338" alt="image" src="https://github.com/user-attachments/assets/164d7611-fb9b-49ba-af3d-a80a5c25adad" />

---

## About The Project

In computer graphics, a BxDF is a mathematical function that describes how light is reflected and refracted at a surface. Understanding the distribution of these light paths is crucial for creating realistic materials.

This tool provides an interactive 3D visualization of this process:
* **Hit Point**: Light interaction is simulated at the world origin (0, 0, 0).
* **Incoming Light**: A single or multiple, controllable vector represents the incoming light direction.
* **Sampled Vectors**: The tool generates and displays numerous outgoing vectors, sampled according to a specific BxDF model, showing the probable directions light will scatter.

It currently serves as a testbed for a refraction BxDF, but is designed to be easily extensible with other models.

### Built With

* [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Bun](https://bun.sh/)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have **Bun** installed on your machine. You can install it from [bun.sh](https://bun.sh/).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/JI20/BxDF-Sampling-Visualizer.git](https://github.com/JI20/BxDF-Sampling-Visualizer.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd BxDF-Sampling-Visualizer
    ```
3.  **Install dependencies using Bun:**
    ```sh
    bun install
    ```
4.  **Run the development server:**
    ```sh
    bun run dev
    ```
Your local copy should now be running in your browser!

---

## How to Use

The user interface allows for interactive exploration of the BxDF model.

* **Set Incoming Direction**: Must be set in the code. Set Input Direction Button does not work currently.
* **Generate new sample**: Click this button to generate and display a single new sampled outgoing ray.
* **Show grid / Reset camera**: Use these buttons for scene navigation and visibility control.
* **Reset content**: Clears all generated samples from the scene.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn and create. Any contributions you make are **greatly appreciated**.

Please follow the standard GitHub Fork & Pull Request workflow. For suggestions or bug reports, please open an issue.

---

## ## License

Distributed under the MIT License. See the `LICENSE` file for more information.

---

## ## Contact

Jonas Itt - [JI20](https://github.com/JI20)

Project Link: [https://github.com/JI20/BxDF-Sampling-Visualizer](https://github.com/JI20/BxDF-Sampling-Visualizer)
