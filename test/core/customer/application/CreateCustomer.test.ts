import {CreateCustomer} from "../../../../src/core/customer/application/CreateCustomer";
import {CustomerRepository} from "../../../../src/core/customer/domain/CustomerRepository";
import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";
import {CustomerIdNumber} from "../../../../src/core/customer/domain/CustomerIdNumber";
import {CustomerFirstName} from "../../../../src/core/customer/domain/CustomerFirstName";
import {CustomerLastName} from "../../../../src/core/customer/domain/CustomerLastName";
import {CustomerPhoneNumber} from "../../../../src/core/customer/domain/CustomerPhoneNumber";
import {InMemoryCustomerRepository} from "../../../../src/core/customer/infrastructure/InMemoryCustomerRepository";
import {CustomerIdNumberMother} from "../domain/CustomerIdNumberMother";
import {CustomerFirstNameMother} from "../domain/CustomerFirstNameMother";
import {CustomerLastNameMother} from "../domain/CustomerLastNameMother";
import {CustomerPhoneNumberMother} from "../domain/CustomerPhoneNumberMother";
import {CustomerIdMother} from "../domain/CustomerIdMother";

describe('CreateCustomer should', () => {

    let customerRepository: CustomerRepository;
    let createCustomer: CreateCustomer;

    test('create a new customer', async () => {

        const customerId = CustomerIdMother.random();
        const idNumber = CustomerIdNumberMother.random();
        const firstName = CustomerFirstNameMother.random();
        const lastName = CustomerLastNameMother.random();
        const phoneNumber = CustomerPhoneNumberMother.random();

        given_a_use_case();

        await when_a_customer_is_created(customerId, idNumber, firstName, lastName, phoneNumber);

        await then_customer_has_the_correct_data(customerId, idNumber, firstName, lastName, phoneNumber)
    });

    function given_a_use_case() {
        customerRepository = new InMemoryCustomerRepository()
        createCustomer = new CreateCustomer(customerRepository);
    }

    async function when_a_customer_is_created(customerId: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        await createCustomer.execute(customerId, idNumber, firstName, lastName, phoneNumber);
    }

    async function then_customer_has_the_correct_data(customerId: CustomerId, idNumber: CustomerIdNumber, firstName: CustomerFirstName, lastName: CustomerLastName, phoneNumber: CustomerPhoneNumber) {
        const customer = await customerRepository.findById(customerId);

        expect(customer).not.toBeNull()
        expect(customer.customerId).toEqual(customerId);
        expect(customer.idNumber).toEqual(idNumber);
        expect(customer.firstName).toEqual(firstName);
        expect(customer.lastName).toEqual(lastName);
        expect(customer.phoneNumber).toEqual(phoneNumber);
    }

});