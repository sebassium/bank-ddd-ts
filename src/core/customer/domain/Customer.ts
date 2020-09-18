import {CustomerId} from "./CustomerId";
import {CustomerIdNumber} from "./CustomerIdNumber";
import {CustomerFirstName} from "./CustomerFirstName";
import {CustomerLastName} from "./CustomerLastName";
import {CustomerPhoneNumber} from "./CustomerPhoneNumber";

export class Customer {

    private readonly _id: CustomerId;
    private readonly _idNumber: CustomerIdNumber;
    private readonly _firstName: CustomerFirstName;
    private readonly _lastName: CustomerLastName;
    private readonly _phoneNumber: CustomerPhoneNumber;

    constructor(id: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        this._id = id;
        this._idNumber = idNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }

    static create(id: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        return new Customer(id, idNumber, firstName, lastName, phoneNumber);
    }

    get id() {
        return this._id;
    }

    get idNumber() {
        return this._idNumber;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

}
