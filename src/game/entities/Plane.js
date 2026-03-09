import * as THREE from "three";

export class Plane {
  constructor({ width, height }) {
    this.plane = new THREE.PlaneGeometry(width, height);
  }

  get() {
    return this.plane;
  }
}
