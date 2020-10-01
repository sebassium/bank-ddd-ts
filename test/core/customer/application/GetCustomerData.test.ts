import {Customer} from "../../../../src/core/customer/domain/Customer";
import {CustomerMother} from "../domain/CustomerMother";
import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";
import {CustomerIdMother} from "../domain/CustomerIdMother";
import {CustomerData, GetCustomerData} from "../../../../src/core/customer/application/GetCustomerData";
import {CustomerRepository} from "../../../../src/core/customer/domain/CustomerRepository";
import {InMemoryCustomerRepository} from "../../../../src/core/customer/infrastructure/InMemoryCustomerRepository";

describe('GetCustomerData should', () => {

    let customer: Customer;
    let customerRepository: CustomerRepository;
    let getCustomerData: GetCustomerData;
    let customerData: CustomerData;

    test('return customer data', async () => {

        const customerId = CustomerIdMother.random();
        customer = CustomerMother.withCustomerId(customerId);

        given_a_use_case();
        await given_a_saved_customer();

        await when_getting_customer_data(customerId);

        await then_returned_customer_data_is_correct();

    });

    function given_a_use_case() {
        customerRepository = new InMemoryCustomerRepository()
        getCustomerData = new GetCustomerData(customerRepository);
    }

    async function given_a_saved_customer() {
        await customerRepository.save(customer);
    }

    async function when_getting_customer_data(customerId: CustomerId) {
        customerData = await getCustomerData.execute(customerId)
    }

    async function then_returned_customer_data_is_correct() {
        expect(customerData).not.toBeNull();
        expect(customerData.customerId).toEqual(customer.customerId.value);
        expect(customerData.personalNumber).toEqual(customer.personalNumber.value);
        expect(customerData.firstName).toEqual(customer.firstName.value);
        expect(customerData.lastName).toEqual(customer.lastName.value);
        expect(customerData.phoneNumber).toEqual(customer.phoneNumber.value);
    }

});