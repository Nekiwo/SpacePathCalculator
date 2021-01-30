import {DrawPlanet} from "../functions/DrawPlanet"

// Planet class for each planet
export class Planet {
    name: string;
    radius: number;
    euler: {
        x: number;
        y: number;
        z: number;
    }
    model: string;
    RadiusFromSun: number;
    SunDeg: number;
    constructor(args?: any) {
        // initiate each planet
        DrawPlanet({
            name: this.name,
            radius: this.radius,
            euler: this.euler,
            model: this.model,
            RadiusFromSun: this.RadiusFromSun,
            SunDeg: this.SunDeg
        });
    }
}