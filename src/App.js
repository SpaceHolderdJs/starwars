import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import People from "./Components/People";
import Planets from "./Components/Planets";
import Starships from "./Components/Starships";

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.classList.add("three");
    // renderer.setClearColor("red");
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "white" });

    const starCollector = new THREE.Object3D();

    class Star {
      constructor() {
        const star = new THREE.Mesh(geometry, material);
        star.position.set(
          20 - Math.floor(Math.random() * 40),
          20 - Math.floor(Math.random() * 40),
          100 - Math.floor(Math.random() * 30)
        );

        star.scale.x = star.scale.y = star.scale.z = 0.03;

        star.material.color.setRGB(
          Math.floor(Math.random() * 100),
          10,
          Math.floor(Math.random() * 60)
        );

        starCollector.add(star);
      }
    }

    for (let i = 0; i < 1000; i++) {
      new Star();
    }

    scene.add(starCollector);

    camera.position.z = 100;

    const animate = function () {
      requestAnimationFrame(animate);

      starCollector.rotation.z += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    const onMouseMove = (event) => {
      camera.rotation.y = (event.pageX - window.innerWidth / 2) * 0.00009;
    };

    window.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Router>
      <div className="App column centered">
        <header className="row centered">
          <Link to="/">main</Link>
          <Link to="/people">peole</Link>
          <Link to="/starships">starships</Link>
          <Link to="/planets">planets</Link>
        </header>

        <Switch>
          <Route path="/" exact>
            <h1>Main</h1>
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
