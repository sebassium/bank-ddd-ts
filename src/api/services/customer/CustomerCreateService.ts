import {CreateCustomer} from "../../../core/customer/application/CreateCustomer";
import {CustomerIdMother} from "../../../../test/core/customer/domain/CustomerIdMother";
import {CustomerIdNumber} from "../../../core/customer/domain/CustomerIdNumber";
import {CustomerFirstName} from "../../../core/customer/domain/CustomerFirstName";
import {CustomerLastName} from "../../../core/customer/domain/CustomerLastName";
import {CustomerPhoneNumber} from "../../../core/customer/domain/CustomerPhoneNumber";

export class CustomerCreateService {

    constructor(private createCustomer: CreateCustomer) {}

    run(body: Body) {
        const id = CustomerIdMother.random()
        const idNumber = new CustomerIdNumber(body.idNumber);
        const firstName = new CustomerFirstName(body.firstName);
        const lastName = new CustomerLastName(body.lastName);
        const phoneNumber = new CustomerPhoneNumber(body.phoneNumber);

        return this.createCustomer.execute(id, idNumber, firstName, lastName, phoneNumber)
    }

}

export type Body = {
    idNumber: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
}