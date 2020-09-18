import {CreateCustomer} from "../../../../src/core/customer/application/CreateCustomer";
import {CustomerRepository} from "../../../../src/core/customer/domain/CustomerRepository";
import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";
import {CustomerIdNumber} from "../../../../src/core/customer/domain/CustomerIdNumber";
import {CustomerFirstName} from "../../../../src/core/customer/domain/CustomerFirstName";
import {CustomerLastName} from "../../../../src/core/customer/domain/CustomerLastName";
import {CustomerPhoneNumber} from "../../../../src/core/customer/domain/CustomerPhoneNumber";
import {InMemoryCustomerRepository} from "../../../../src/core/customer/infrastructure/InMemoryCustomerRepository";

describe('CreateCustomer should', () => {

    let customerRepository: CustomerRepository;
    let createCustomer: CreateCustomer;

    test('create a new customer', async () => {
        const id = new CustomerId('11ecb3a8-ce83-4acf-9d8d-8bc24fdd7427');
        const idNumber = new CustomerIdNumber('1037629138');
        const firstName = new CustomerFirstName('Sebastian');
        const lastName = new CustomerLastName('Hernandez');
        const phoneNumber = new CustomerPhoneNumber('3103769786');

        given_a_use_case();

        await when_a_customer_is_created(id, idNumber, firstName, lastName, phoneNumber);

        await then_the_customer_has_the_correct_data(id, idNumber, firstName, lastName, phoneNumber)
    });

    function given_a_use_case() {
        customerRepository = new InMemoryCustomerRepository()
        createCustomer = new CreateCustomer(customerRepository);
    }

    async function when_a_customer_is_created(id: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        await createCustomer.execute(id, idNumber, firstName, lastName, phoneNumber);
    }

    async function then_the_customer_has_the_correct_data(id: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        const customer = await customerRepository.findById(id);

        expect(customer).not.toBeNull()
        expect(customer.id).toBe(id);
        expect(customer.idNumber).toBe(idNumber);
        expect(customer.firstName).toBe(firstName);
        expect(customer.lastName).toBe(lastName);
        expect(customer.phoneNumber).toBe(phoneNumber);
    }

});