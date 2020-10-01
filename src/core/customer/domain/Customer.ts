import {CustomerId} from "./CustomerId";
import {CustomerIdNumber} from "./CustomerIdNumber";
import {CustomerFirstName} from "./CustomerFirstName";
import {CustomerLastName} from "./CustomerLastName";
import {CustomerPhoneNumber} from "./CustomerPhoneNumber";

export class Customer {

    private readonly _customerId: CustomerId;
    private readonly _idNumber: CustomerIdNumber;
    private readonly _firstName: CustomerFirstName;
    private readonly _lastName: CustomerLastName;
    private readonly _phoneNumber: CustomerPhoneNumber;

    constructor(customerId: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        this._customerId = customerId;
        this._idNumber = idNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }

    static create(customerId: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber): Customer {
        return new Customer(customerId, idNumber, firstName, lastName, phoneNumber);
    }

    get customerId(): CustomerId {
        return this._customerId;
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
