import {CustomerRepository} from "../domain/CustomerRepository";
import {CustomerId} from "../domain/CustomerId";
import {CustomerPersonalNumber} from "../domain/CustomerPersonalNumber";
import {CustomerFirstName} from "../domain/CustomerFirstName";
import {CustomerLastName} from "../domain/CustomerLastName";
import {CustomerPhoneNumber} from "../domain/CustomerPhoneNumber";
import {Customer} from "../domain/Customer";

export class CreateCustomer {

    private _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this._customerRepository = customerRepository;
    }

    async execute(customerId: CustomerId, personalNumber: CustomerPersonalNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber): Promise<void> {
        const customer = Customer.create(customerId, personalNumber, firstName, lastName, phoneNumber);
        await this._customerRepository.save(customer);
    }
}