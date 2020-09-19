import isUUID from "validator/lib/isUUID";
import {ValueObject} from "./ValueObject";

export class UuidValueObject extends ValueObject<string> {

    constructor(id: string) {
        super(id);
        UuidValueObject.isValidUuid(id);
    }

    static isValidUuid(id: string) {
        if (!isUUID(id, 4)) {
            throw new Error('Invalid UUID');
        }
    }

}