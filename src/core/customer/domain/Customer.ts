import {CustomerIdNumber} from "./CustomerIdNumber";
import {CustomerFirstName} from "./CustomerFirstName";
import {CustomerLastName} from "./CustomerLastName";
import {CustomerPhoneNumber} from "./CustomerPhoneNumber";

export class Customer {

    private readonly _idNumber: CustomerIdNumber;
    private readonly _firstName: CustomerFirstName;
    private readonly _lastName: CustomerLastName;
    private readonly _phoneNumber: CustomerPhoneNumber;

    constructor(idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        this._idNumber = idNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }

    static create(idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        return new Customer(
            idNumber,
            firstName,
            lastName,
            phoneNumber
        );
    }

}

const idNumber = new CustomerIdNumber('1234');
const firstName = new CustomerFirstName('sebastian');
const lastName = new CustomerLastName('hernandez');
const phoneNumber = new CustomerPhoneNumber('5555555');

const customer = Customer.create(idNumber, firstName, lastName, phoneNumber);