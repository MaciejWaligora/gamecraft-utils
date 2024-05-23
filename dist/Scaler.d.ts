import * as PIXI from 'pixijs';
export declare class Scaler {
    static addScaling(referenceWidth: number, referenceHeight: number, renderer: PIXI.Application): void;
    static handleResize(renderer: PIXI.Application, referenceWidth: number, referenceHeight: number): void;
}
