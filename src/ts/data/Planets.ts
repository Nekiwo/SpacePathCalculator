import {Planet} from "../classes/Planet";
// all planets in one array

// NOTE: radius of planets is written in km
// ANOTHER NOTE: radius of planet's sun orbit is written in billions of km
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
        apoapsis: 0,
        inclination: 0
    }),
    new Planet({
        name: "Mercury",
        radius: 2439,
        mass: 0.33,
        model: "",
        SunDeg: 0,
        XRadius: 0.046,
        ZRadius: 0.069,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 7
    }),
    new Planet({
        name: "Venus",
        radius: 6502,
        mass: 4.87,
        model: "",
        SunDeg: 0,
        XRadius: 0.107,
        ZRadius: 0.108,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 3.4
    }),
    new Planet({
        name: "Earth",
        radius: 6378,
        mass: 5.97,
        model: "",
        SunDeg: 0,
        XRadius: 0.147,
        ZRadius: 0.152,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 0
    }),
    new Planet({
        name: "Mars",
        radius: 3396,
        mass: 0.642,
        model: "",
        SunDeg: 0,
        XRadius: 0.206,
        ZRadius: 0.249,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 1.9
    }),
    new Planet({
        name: "Jupiter",
        radius: 71492,
        mass: 1898,
        model: "",
        SunDeg: 0,
        XRadius: 0.740,
        ZRadius: 0.816,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 1.3
    }),
    new Planet({
        name: "Saturn",
        radius: 60268,
        mass: 568,
        model: "",
        SunDeg: 0,
        XRadius: 1.352,
        ZRadius: 1.514,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 2.5
    }),
    new Planet({
        name: "Uranus",
        radius: 25559,
        mass: 86.8,
        model: "",
        SunDeg: 0,
        XRadius: 2.741,
        ZRadius: 3.003,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 0.8
    }),
    new Planet({
        name: "Neptune",
        radius: 24764,
        mass: 102,
        model: "",
        SunDeg: 0,
        XRadius: 4.444,
        ZRadius: 4.545,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 1.8
    }),
    new Planet({
        name: "Pluto",
        radius: 1185,
        mass: 0.0146,
        model: "",
        SunDeg: 0,
        XRadius: 4.436,
        ZRadius: 7.375,
        XTilt: 0,
        ZTilt: 0,
        apoapsis: 0,
        inclination: 17.2
    })
];
// SOURCE: https://nssdc.gsfc.nasa.gov/planetary/factsheet/
// https://solarsystem.nasa.gov/planets/overview/