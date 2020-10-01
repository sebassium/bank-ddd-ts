import {CustomerRepository} from "../domain/CustomerRepository";
import {CustomerId} from "../domain/CustomerId";

export class GetCustomerData {

    private _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this._customerRepository = customerRepository;
    }

    async execute(customerId: CustomerId): Promise<CustomerData> {
        const customer = await this._customerRepository.findById(customerId);
        return {
            customerId: customer.customerId.value,
            personalNumber: customer.personalNumber.value,
            firstName: customer.firstName.value,
            lastName: customer.lastName.value,
            phoneNumber: customer.phoneNumber.value
        }
    }

}

export type CustomerData = {
    customerId: string,
    personalNumber: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
}