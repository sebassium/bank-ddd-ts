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
        const id = CustomerIdMother.random();
        const idNumber = CustomerIdNumberMother.random();
        const firstName = CustomerFirstNameMother.random();
        const lastName = CustomerLastNameMother.random();
        const phoneNumber = CustomerPhoneNumberMother.random();

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