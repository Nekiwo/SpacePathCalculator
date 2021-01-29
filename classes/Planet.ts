export interface Planet {
    name: string;
    radius: number;
    vector: {
        x: number;
        z: number;
    }
    euler: {
        x: number;
        y: number;
        z: number;
    }
    model: string;
    RadiusFromSun: number;
    SunDeg: number;
}