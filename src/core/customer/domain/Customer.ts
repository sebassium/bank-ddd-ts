import {CustomerId} from "./CustomerId";
import {CustomerPersonalNumber} from "./CustomerPersonalNumber";
import {CustomerFirstName} from "./CustomerFirstName";
import {CustomerLastName} from "./CustomerLastName";
import {CustomerPhoneNumber} from "./CustomerPhoneNumber";

export class Customer {

    private readonly _customerId: CustomerId;
    private readonly _personalNumber: CustomerPersonalNumber;
    private readonly _firstName: CustomerFirstName;
    private readonly _lastName: CustomerLastName;
    private readonly _phoneNumber: CustomerPhoneNumber;

    constructor(customerId: CustomerId, personalNumber: CustomerPersonalNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        this._customerId = customerId;
        this._personalNumber = personalNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }

    static create(customerId: CustomerId, personalNumber: CustomerPersonalNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber): Customer {
        return new Customer(customerId, personalNumber, firstName, lastName, phoneNumber);
    }

    get customerId(): CustomerId {
        return this._customerId;
    }

    get personalNumber(): CustomerPersonalNumber {
        return this._personalNumber;
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
