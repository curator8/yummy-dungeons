import * as THREE from 'three';

export class BasicMaterial{
    constructor({
        color
    }) {
        this.color = color;
        this.material = new THREE.MeshBasicMaterial({color: color})
    }

    get() {
        return this.material;
    }
}