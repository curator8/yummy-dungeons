import * as THREE from 'three';

export class BoxObject {
    constructor({
        boxWidth,
        boxHeight,
        boxDepth
    }) {
        this.boxWidth = boxWidth;
        this.boxHeight = boxHeight;
        this.boxDepth = boxDepth;
        this.box = new THREE.BoxGeometry(this.boxWidth, this.boxHeight, this.boxDepth);
    }


    get() {
        return this.box;
    }
}