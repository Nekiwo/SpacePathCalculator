// NOTE: All functions with more than 1 argument are using one JSON tree as one argument so its easier to understand and see what items are used


// importing classes and etc.
import {Planet} from "./classes/Planet";

// all planets in one array
var planets:Planet[] = [
    new Planet({
        name: "Mercury",
        radius: 2439,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Venus",
        radius: 6502,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Earth",
        radius: 6378,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Mars",
        radius: 3396,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Jupiter",
        radius: 71492,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Saturn",
        radius: 60268,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Uranus",
        radius: 25559,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Neptune",
        radius: 24764,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    }),
    new Planet({
        name: "Pluto",
        radius: 1185,
        euler: {
            x: 1,
            y: 1,
            z: 1
        },
        model: "",
        RadiusFromSun: 1,
        SunDeg: 0
    })
];