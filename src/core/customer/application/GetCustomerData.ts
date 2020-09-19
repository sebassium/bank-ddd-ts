import {CustomerRepository} from "../domain/CustomerRepository";
import {CustomerId} from "../domain/CustomerId";

export class GetCustomerData {

    private _customerRepository: CustomerRepository;

    constructor(customerRepository: CustomerRepository) {
        this._customerRepository = customerRepository;
    }

    async execute(id: CustomerId): Promise<CustomerData> {
        const customer = await this._customerRepository.findById(id);

        return {
            id: customer.id.value,
            idNumber: customer.idNumber.value,
            firstName: customer.firstName.value,
            lastName: customer.lastName.value,
            phoneNumber: customer.phoneNumber.value
        }

    }

}

export type CustomerData = {
    id: string,
    idNumber: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
}