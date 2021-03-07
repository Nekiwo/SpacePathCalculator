// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used


// importing classes and etc.
import {Planet} from "./classes/Planet";
import {CamOrigin} from "./classes/CamOrigin";

import {ConfigPrompt} from "./functions/ConfigPrompt";
import {DrawPath} from "./functions/DrawPath";
import {CalcTime} from "./functions/CalcTime";

import {planets} from "./data/planets";

import * as THREE from "three";

/*
ConfigPrompt.then((config: any) => {
    // Do something when user got prompted about the config
    DrawPath(config);
})
*/


// Making a three js scene
var CamPos: CamOrigin = new CamOrigin()

const scene:THREE.Scene = new THREE.Scene();
const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("webgl").appendChild(renderer.domElement);

planets.forEach((planet: Planet) => {
    planet.DrawPlanet();
});

const animate = function () {
    requestAnimationFrame( animate );

    

    renderer.render(scene, camera);
};

animate();