import isUUID from "validator/lib/isUUID";
import {ValueObject} from "./ValueObject";

export class UuidValueObject extends ValueObject<string> {

    constructor(value: string) {
        super(value);
        this.isValidUuid(value);
    }

    private isValidUuid(id: string) {
        if (!isUUID(id, 4)) {
            console.log("Error");
        }
    }

}