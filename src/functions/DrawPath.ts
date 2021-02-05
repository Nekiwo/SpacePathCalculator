import {planets} from "..";

// Draw spaceship travel path
export var DrawPath = (args: any) => {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
    let path:CanvasRenderingContext2D = canvas.getContext("2d");

    // starting point
    let StartingPoint:number[] = [planets[3].x, planets[3].y];
    // boolean array of planets to wrap
    let WrapPlanets:boolean[] = [];
    // 2D array of points for the path to wrap around
    let WrapPoints:number[][] = [];

    // Change planet positions depending on user input
    if (args.type === 0) {
        
    } else {

    }


    // drawing the line
    path.strokeStyle = "#000000";
    path.moveTo(StartingPoint[0], StartingPoint[1]);
    path.beginPath();
}