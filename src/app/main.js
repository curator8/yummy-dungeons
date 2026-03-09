import * as THREE from "three";
import { BoxObject } from "../game/entities/BoxObject.js";
import { Mesh } from "../engine/core/Mesh.js";
import { Scene } from "../engine/core/Scene.js";
import { PhongMaterial } from "../engine/graphics/PhongMaterial.js";
import { PerspectiveCamera } from "../engine/core/PerspectiveCamera.js";
import { Plane } from "../game/entities/Plane.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function main() {
  const canvas = document.querySelector(".threejs");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new Scene();
  const perspectiveCamOne = new PerspectiveCamera({
    fov: 75,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 30,
    x: 0,
    y: 3,
    z: 3,
  });

  const planeOne = new Plane({
    height: 10,
    width: 10,
  });
  const wallOne = new Plane({
    height: 4,
    width: 10,
  });
  const boxOne = new BoxObject({ boxWidth: 1, boxHeight: 1, boxDepth: 1 });
  const materialGreenBlue = new PhongMaterial({ color: 0x44aa88 });
  const materialRed = new PhongMaterial({ color: "blue" });
  const cubeMesh = new Mesh({
    geometry: boxOne.get(),
    material: materialRed.get(),
  });
  const planeMesh = new Mesh({
    geometry: planeOne.get(),
    material: materialGreenBlue.get(),
  });
  const backWallMesh = new Mesh({
    geometry: wallOne.get(),
    material: materialGreenBlue.get(),
  });
  const leftWallMesh = new Mesh({
    geometry: wallOne.get(),
    material: materialGreenBlue.get(),
  });
  const rightWallMesh = new Mesh({
    geometry: wallOne.get(),
    material: materialGreenBlue.get(),
  });
  planeMesh.get().rotation.x = -Math.PI / 2;
  planeMesh.get().position.set(0, -0.5, 0);
  backWallMesh.get().position.set(0, 1.5, -5);
  leftWallMesh.get().position.set(-5, 1.5, 0);
  leftWallMesh.get().rotation.y = Math.PI / 2;
  rightWallMesh.get().position.set(5, 1.5, 0);
  rightWallMesh.get().rotation.y = -Math.PI / 2;
  cubeMesh.get().position.y = 0.5;
  perspectiveCamOne.get().lookAt(0, 0, 0);

  // make into a class
  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);

  // maybe leave this here but create a helper function
  scene.add(light);
  scene.add(cubeMesh.get());
  scene.add(planeMesh.get());
  scene.add(backWallMesh.get());
  scene.add(leftWallMesh.get());
  scene.add(rightWallMesh.get());

  const controls = new OrbitControls(perspectiveCamOne.get(), canvas);
  controls.enableDamping = true;

  function onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    perspectiveCamOne.setAspect({ width, height });
  }

  window.addEventListener("resize", onResize);
  onResize();

  // not sure what to do here on class designs
  function render(time) {
    time *= 0.001; // convert time to seconds

    cubeMesh.get().rotation.x = time;
    cubeMesh.get().rotation.y = time;
    controls.update();
    renderer.render(scene.get(), perspectiveCamOne.get());

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
