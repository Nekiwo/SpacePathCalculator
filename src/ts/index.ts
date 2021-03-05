// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used


// importing classes and etc.
import {Planet} from "./classes/Planet";
import {ConfigPrompt} from "./functions/ConfigPrompt";
import {DrawPath} from "./functions/DrawPath";
import {CalcTime} from "./functions/CalcTime";

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
        ZTilt: 0
    }),
    new Planet({
        name: "Mercury",
        radius: 2439,
        mass: 0.33,
        model: "",
        SunDeg: 0,
        XRadius: 57,
        ZRadius: 57,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Venus",
        radius: 6502,
        mass: 4.87,
        model: "",
        SunDeg: 0,
        XRadius: 108,
        ZRadius: 108,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Earth",
        radius: 6378,
        mass: 5.97,
        model: "",
        SunDeg: 0,
        XRadius: 149,
        ZRadius: 149,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Mars",
        radius: 3396,
        mass: 0.642,
        model: "",
        SunDeg: 0,
        XRadius: 228,
        ZRadius: 228,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Jupiter",
        radius: 71492,
        mass: 1898,
        model: "",
        SunDeg: 0,
        XRadius: 780,
        ZRadius: 780,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Saturn",
        radius: 60268,
        mass: 568,
        model: "",
        SunDeg: 0,
        XRadius: 1437,
        ZRadius: 1437,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Uranus",
        radius: 25559,
        mass: 86.8,
        model: "",
        SunDeg: 0,
        XRadius: 2871,
        ZRadius: 2871,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Neptune",
        radius: 24764,
        mass: 102,
        model: "",
        SunDeg: 0,
        XRadius: 4530,
        ZRadius: 4530,
        XTilt: 0,
        ZTilt: 0
    }),
    new Planet({
        name: "Pluto",
        radius: 1185,
        mass: 0.0146,
        model: "",
        SunDeg: 0,
        XRadius: 5900,
        ZRadius: 5900,
        XTilt: 0,
        ZTilt: 0
    })
];

ConfigPrompt.then((config: any) => {
    // Do something when user got prompted about the config
    DrawPath(config);
})