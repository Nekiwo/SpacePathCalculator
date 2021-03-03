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
        RadiusFromSun: 0,
        SunDeg: 0
    }),
    new Planet({
        name: "Mercury",
        radius: 2439,
        mass: 0.33,
        model: "",
        RadiusFromSun: 57,
        SunDeg: 0
    }),
    new Planet({
        name: "Venus",
        radius: 6502,
        mass: 4.87,
        model: "",
        RadiusFromSun: 108,
        SunDeg: 0
    }),
    new Planet({
        name: "Earth",
        radius: 6378,
        mass: 5.97,
        model: "",
        RadiusFromSun: 149,
        SunDeg: 0
    }),
    new Planet({
        name: "Mars",
        radius: 3396,
        mass: 0.642,
        model: "",
        RadiusFromSun: 228,
        SunDeg: 0
    }),
    new Planet({
        name: "Jupiter",
        radius: 71492,
        mass: 1898,
        model: "",
        RadiusFromSun: 780,
        SunDeg: 0
    }),
    new Planet({
        name: "Saturn",
        radius: 60268,
        mass: 568,
        model: "",
        RadiusFromSun: 1437,
        SunDeg: 0
    }),
    new Planet({
        name: "Uranus",
        radius: 25559,
        mass: 86.8,
        model: "",
        RadiusFromSun: 2871,
        SunDeg: 0
    }),
    new Planet({
        name: "Neptune",
        radius: 24764,
        mass: 102,
        model: "",
        RadiusFromSun: 4530,
        SunDeg: 0
    }),
    new Planet({
        name: "Pluto",
        radius: 1185,
        mass: 0.0146,
        model: "",
        RadiusFromSun: 5900,
        SunDeg: 0
    })
];

ConfigPrompt.then((config: any) => {
    // Do something when user got prompted about the config
    DrawPath(config);
})