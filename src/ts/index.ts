// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used


// importing classes and etc.
import {Planet} from "./classes/Planet";
import {ConfigPrompt} from "./functions/ConfigPrompt";
import {DrawPath} from "./functions/DrawPath";
import {CalcTime} from "./functions/CalcTime";
import * as THREE from "three";

// Making a three js scene
const scene:THREE.Scene = new THREE.Scene();
const camera:THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("webgl").appendChild(renderer.domElement);

// all planets in one array

// NOTE: radius of planets is written in km
// ANOTHER NOTE: radius of planet's sun orbit is written in millions of km
// ANOTHER ANOTHER NOTE: mass of planets is written in 10^24kg
export var planets:Planet[] = [
    new Planet({
        name: "Sun",
        radius: 696340000,
        mass: 1988500,
        model: "",
        SunDeg: 0,
        XRadius: 0,
        ZRadius: 0,
        XTilt: 0,
        ZTilt: 0,
        periapsis: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Mercury",
        radius: 2439,
        mass: 0.33,
        model: "",
        SunDeg: 0,
        XRadius: 46,
        ZRadius: 69,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Venus",
        radius: 6502,
        mass: 4.87,
        model: "",
        SunDeg: 0,
        XRadius: 107,
        ZRadius: 108,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Earth",
        radius: 6378,
        mass: 5.97,
        model: "",
        SunDeg: 0,
        XRadius: 147,
        ZRadius: 152,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Mars",
        radius: 3396,
        mass: 0.642,
        model: "",
        SunDeg: 0,
        XRadius: 206,
        ZRadius: 249,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Jupiter",
        radius: 71492,
        mass: 1898,
        model: "",
        SunDeg: 0,
        XRadius: 740,
        ZRadius: 816,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Saturn",
        radius: 60268,
        mass: 568,
        model: "",
        SunDeg: 0,
        XRadius: 1352,
        ZRadius: 1514,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Uranus",
        radius: 25559,
        mass: 86.8,
        model: "",
        SunDeg: 0,
        XRadius: 2741,
        ZRadius: 3003,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Neptune",
        radius: 24764,
        mass: 102,
        model: "",
        SunDeg: 0,
        XRadius: 4444,
        ZRadius: 4545,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    }),
    new Planet({
        name: "Pluto",
        radius: 1185,
        mass: 0.0146,
        model: "",
        SunDeg: 0,
        XRadius: 4436,
        ZRadius: 7375,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0
    })
];
// SOURCE: https://nssdc.gsfc.nasa.gov/planetary/factsheet/

ConfigPrompt.then((config: any) => {
    // Do something when user got prompted about the config
    DrawPath(config);
})