import {planets} from "..";

var BelzierCurve: Function = (args: any) => {

}

// Draw spaceship travel path
export var DrawPath: Function = (args: any) => {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
    let path: CanvasRenderingContext2D = canvas.getContext("2d");

    // starting planet point
    let StartingPoint: number[] = [planets[3].x, planets[3].y];
    // boolean array of planets to wrap
    let WrapPlanets: number[] = [];
    // 2D array of points for the path to wrap around
    let WrapPoints: number[][] = [];

    // Change planet positions depending on user input
    if (args.type === 0) {
        
    } else {

    }

    // Convert planet list to point list
    WrapPlanets.forEach(element => {
        
    });

    // Draw belzier curves around each point
    WrapPoints.forEach(element => {
        BelzierCurve()
    });

    // drawing the line
    path.strokeStyle = "#000000";
    path.moveTo(StartingPoint[0], StartingPoint[1]);
    path.beginPath();
}