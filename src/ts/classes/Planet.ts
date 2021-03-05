// Planet class for each planet

// https://solarsystem.nasa.gov/planets/overview/
// pls edit classs
export class Planet {
    name: string;
    radius: number;
    mass: number;
    model: string;
    SunDeg: number;
    x: number;
    z: number;
    // XRadius of ellipse, AKA Perihelion of the orbit
    XRadius: number;
    // ZRadius of ellipse, AKA Aphelion of the orbit
    ZRadius: number;
    XTilt: number;
    ZTilt: number;
    apoapsis: number;
    constructor(args?: any) {
        this.name = args.name;
        this.radius = args.radius;
        this.mass = args.mass;
        this.model = args.model;
        this.SunDeg = args.SunDeg;
        
        this.XRadius = args.XRadius;
        this.ZRadius = args.ZRadius;
        this.XTilt = args.XTilt;
        this.ZTilt = args.ZTilt;
        this.apoapsis = args.apoapsis;
        // Calculate the coords for the ellipse instead of circle
        
        
        /*
        this.x = 1500 + (this.RadiusFromSun / 5) * Math.cos((this.SunDeg - 90) * (Math.PI/180));
        this.z = 1500 + (this.RadiusFromSun / 5) * Math.sin((this.SunDeg - 90) * (Math.PI/180));
        */


        // initiate each planet

        // draw first frame
        this.DrawPlanet(this.SunDeg);
    }
    DrawPlanet: Function = (SunDeg: number) => {
        this.SunDeg = SunDeg;
        
        // Draw each planet and path on a canvas element for purely testing/showcase purposes
        // This implemintation does not erase previous frames, and has many other impurities

        // If you want to change the way planets are rendered, for example impliment it all in WebGL, you can do it here

        var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
        
        var planet:CanvasRenderingContext2D = canvas.getContext("2d");
        var circum:CanvasRenderingContext2D = canvas.getContext("2d");
        
        // Calculate the coords for the ellipse instead of circle and draw new

        ///*
        //var ConvertedRadius: number = this.RadiusFromSun / 5;
        var NewX: number = 1500 + this.XRadius * Math.cos((SunDeg - 90) * (Math.PI/180));
        var NewZ: number = 1500 + this.ZRadius * Math.sin((SunDeg - 90) * (Math.PI/180));
        this.x = NewX;
        this.z = NewZ;
        //*/
        circum.beginPath();
        circum.ellipse(1500, 1500, this.XRadius, this.ZRadius, 0, 0, 2 * Math.PI);
        circum.stroke();

        ///*
        planet.fillStyle = "#ff0000";
        planet.beginPath();
        planet.arc(NewX, NewZ, 5, 0, 2 * Math.PI);
        planet.fill();
        //*/
    }
}