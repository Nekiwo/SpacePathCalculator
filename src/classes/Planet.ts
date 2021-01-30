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
        this.DrawPlanet({
            name: this.name,
            radius: this.radius,
            euler: this.euler,
            model: this.model,
            RadiusFromSun: this.RadiusFromSun,
            SunDeg: this.SunDeg
        });
    }
    DrawPlanet = (args?: any) => {
        // Draw each planet and path on a canvas element for purely testing/showcase purposes
        // If you want to change the way planets are rendered, for example impliment it all in WebGL, you can do it here
        let canvas:any = document.getElementById("c");
        let planet:CanvasRenderingContext2D = canvas.getContext("2d");
        
    }
    ChangePlanetPos = (args: any) => {
        // Change planet position through degrees on its circumference around the sun

    }
}