// Camera origin class
export class CamOrigin {
    x: number = 0;
    y: number = 0;
    z: number = 0;
    euler: {
        x: number;
        y: number;
        z: number;
    }
    constructor(args?: any) {
        this.euler.x = 0;
        this.euler.y = 0;
        this.euler.z = 0;
    }
    pos: Function = (vector: string, value: number) => {
        this[vector] = value;
    }
    angle: Function = (vector: string, value: number) => {
        this.euler[vector] = value;
    }
}