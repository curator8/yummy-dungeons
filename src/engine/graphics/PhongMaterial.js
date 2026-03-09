import * as THREE from "three";

export class PhongMaterial {
  constructor({ color }) {
    this.color = color;
    this.material = new THREE.MeshPhongMaterial({ color: color });
  }

  get() {
    return this.material;
  }
}
