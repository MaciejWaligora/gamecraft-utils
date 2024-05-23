export declare class Signal<T> {
    private _listeners;
    addListener(listener: (data?: T) => void, context: Object): void;
    removeListener(listener: () => void, context: Object): void;
    emit(data?: T): void;
}
