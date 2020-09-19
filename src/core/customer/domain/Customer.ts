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

    static create(id: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber): Customer {
        return new Customer(id, idNumber, firstName, lastName, phoneNumber);
    }

    get id(): CustomerId {
        return this._id;
    }

    get idNumber(): CustomerIdNumber {
        return this._idNumber;
    }

    get firstName(): CustomerFirstName {
        return this._firstName;
    }

    get lastName(): CustomerLastName {
        return this._lastName;
    }

    get phoneNumber(): CustomerPhoneNumber {
        return this._phoneNumber;
    }

}
