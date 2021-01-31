// Planet class for each planet
export class Planet {
    name: string;
    radius: number;
    mass: number;
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
        this.name = args.name;
        this.radius = args.radius;
        this.mass = args.mass;
        this.euler = args.euler;
        this.model = args.model;
        this.RadiusFromSun = args.RadiusFromSun;
        this.SunDeg = args.SunDeg;

        // draw first frame
        this.DrawPlanet({
            radius: this.radius,
            euler: this.euler,
            SunDeg: this.SunDeg
        });
    }
    DrawPlanet = (args: any) => {
        // Draw each planet and path on a canvas element for purely testing/showcase purposes
        // If you want to change the way planets are rendered, for example impliment it all in WebGL, you can do it here
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
        
        let planet:CanvasRenderingContext2D = canvas.getContext("2d");
        let circum:CanvasRenderingContext2D = canvas.getContext("2d");
        
        circum.beginPath();
        circum.arc(500, 500, this.RadiusFromSun / 20, 0, 2 * Math.PI);
        circum.stroke();
    }
    ChangePlanetPos = (args: any) => {
        // Change planet position through degrees on its circumference around the sun

    }
}