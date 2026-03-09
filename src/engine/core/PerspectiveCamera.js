import * as THREE from "three";

export class PerspectiveCamera {
  constructor({ fov, aspect, near, far, x, y, z }) {
    this.fov = fov;
    this.aspect = aspect; // the canvas default
    this.near = near;
    this.far = far;
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far,
    );
    this.camera.position.x = x;
    this.camera.position.y = y;
    this.camera.position.z = z;
  }

  get() {
    return this.camera;
  }

  getAllCoordinate() {
    return `${this.x}, ${this.y}, ${this.z}`;
  }

  setAspect({ width, height }) {
    this.aspect = width / height;
    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();
  }
}
