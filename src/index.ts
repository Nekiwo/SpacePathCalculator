// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used


// importing classes and etc.
import {Planet} from "./classes/Planet";
import {DrawPath} from "./functions/DrawPath";

// all planets in one array
var planets:Planet[] = [
    new Planet({
        name: "Mercury",
        radius: 2439,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 57,
        SunDeg: 0
    }),
    new Planet({
        name: "Venus",
        radius: 6502,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 108,
        SunDeg: 0
    }),
    new Planet({
        name: "Earth",
        radius: 6378,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 149,
        SunDeg: 0
    }),
    new Planet({
        name: "Mars",
        radius: 3396,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 228,
        SunDeg: 0
    }),
    new Planet({
        name: "Jupiter",
        radius: 71492,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 780,
        SunDeg: 0
    }),
    new Planet({
        name: "Saturn",
        radius: 60268,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 1437,
        SunDeg: 0
    }),
    new Planet({
        name: "Uranus",
        radius: 25559,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 2871,
        SunDeg: 0
    }),
    new Planet({
        name: "Neptune",
        radius: 24764,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 4530,
        SunDeg: 0
    }),
    new Planet({
        name: "Pluto",
        radius: 1185,
        euler: {
            x: 0,
            y: 0,
            z: 0
        },
        model: "",
        RadiusFromSun: 5900,
        SunDeg: 0
    })
];