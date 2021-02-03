import { planets } from "..";

// Draw spaceship travel path
export var DrawPath = (args: any) => {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("c");
    let path:CanvasRenderingContext2D = canvas.getContext("2d");

    let StartingPoint:number[] = [planets[3].x, planets[3].y]
    path.strokeStyle = "#000000";
    path.moveTo(StartingPoint[0], StartingPoint[1]);
    path.beginPath();
}