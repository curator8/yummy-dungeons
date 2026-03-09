import * as THREE from 'three';

export class Mesh{
    constructor({
        geometry, material
    }) {
        this.geometry = geometry;
        this.material = material;
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    get(){
        return this.mesh;
    }
}