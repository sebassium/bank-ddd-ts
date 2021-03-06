export abstract class ValueObject<V extends any> {

    private readonly _value: V;

    constructor(value: V) {
        this._value = value;
    }

    get value(): V {
        return this._value;
    }

}
