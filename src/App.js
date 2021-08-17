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

    const loader = new OBJLoader();
    loader.loadAsync("./ship2.obj").then((ship) => {
      scene.add(ship);
      ship.position.set(0, 0, 0);
      console.log(ship);
      ship.children.forEach(
        (e) =>
          (e.material = new THREE.MeshLambertMaterial({
            color: "rgb(240,240,200)",
            roughness: 0.5,
            metalness: 0.2,
          }))
      );
      ship.rotation.y = 50;
      ship.color = "green";
      ship.scale.x = ship.scale.y = ship.scale.z = 7;

      const rotation = () => {
        requestAnimationFrame(rotation);

        ship.rotation.y += 0.001;
      };

      rotation();
      console.log("Added");
    });

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

    const lightCollector = new THREE.Object3D();

    const light = new THREE.PointLight("grey", 5, 100);
    light.position.set(0, 0, 0);
    lightCollector.add(light);

    const light2 = new THREE.PointLight("white", 1, 100);
    light.position.set(-10, 5, 0);
    lightCollector.add(light2);

    const light3 = new THREE.PointLight("red", 5, 100);
    light.position.set(50, -5, 0);
    lightCollector.add(light3);

    scene.add(lightCollector);

    camera.position.z = 100;

    const animate = function () {
      requestAnimationFrame(animate);

      starCollector.rotation.z += 0.005;
      lightCollector.rotation.x += 0.005;

      renderer.render(scene, camera);
    };

    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);
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
