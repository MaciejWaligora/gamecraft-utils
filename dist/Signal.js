"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signal = void 0;
class Signal {
    constructor() {
        this._listeners = [];
    }
    addListener(listener, context) {
        const boundListener = listener.bind(context);
        this._listeners.push([context, boundListener]);
    }
    removeListener(listener, context) {
        const index = this._listeners.findIndex(([ctx, fn]) => ctx === context && fn === listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    emit(data) {
        for (const listener of this._listeners) {
            listener[1](data);
        }
    }
}
exports.Signal = Signal;
