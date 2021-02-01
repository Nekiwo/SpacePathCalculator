// Planet class for each planet
export class Planet {
    name: string;
    radius: number;
    mass: number;
    model: string;
    RadiusFromSun: number;
    SunDeg: number;
    constructor(args?: any) {
        this.name = args.name;
        this.radius = args.radius;
        this.mass = args.mass;
        this.model = args.model;
        this.RadiusFromSun = args.RadiusFromSun;
        this.SunDeg = args.SunDeg;
        // initiate each planet

        // draw first frame
        this.DrawPlanet(this.SunDeg);
    }
    DrawPlanet = (SunDeg: number) => {
        // Draw each planet and path on a canvas element for purely testing/showcase purposes
        // If you want to change the way planets are rendered, for example impliment it all in WebGL, you can do it here
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
        
        let planet:CanvasRenderingContext2D = canvas.getContext("2d");
        let circum:CanvasRenderingContext2D = canvas.getContext("2d");
        

        var ConvertedRadius: number = this.RadiusFromSun / 5;
        circum.beginPath();
        circum.arc(1500, 1500, ConvertedRadius, 0, 2 * Math.PI);
        circum.stroke();

        planet.fillStyle = "#ff0000";
        planet.beginPath();
        planet.arc(1500 + ConvertedRadius * Math.cos((SunDeg - 90) * (Math.PI/180)), 1500 + ConvertedRadius * Math.sin((SunDeg - 90) * (Math.PI/180)), 5, 0, 2 * Math.PI);
        planet.fill();
    }
}