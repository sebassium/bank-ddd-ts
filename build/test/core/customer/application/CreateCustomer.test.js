"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateCustomer_1 = require("../../../../src/core/customer/application/CreateCustomer");
const InMemoryCustomerRepository_1 = require("../../../../src/core/customer/infrastructure/InMemoryCustomerRepository");
const CustomerIdNumberMother_1 = require("../domain/CustomerIdNumberMother");
const CustomerFirstNameMother_1 = require("../domain/CustomerFirstNameMother");
const CustomerLastNameMother_1 = require("../domain/CustomerLastNameMother");
const CustomerPhoneNumberMother_1 = require("../domain/CustomerPhoneNumberMother");
const CustomerIdMother_1 = require("../domain/CustomerIdMother");
describe('CreateCustomer should', () => {
    let customerRepository;
    let createCustomer;
    test('create a new customer', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = CustomerIdMother_1.CustomerIdMother.random();
        const idNumber = CustomerIdNumberMother_1.CustomerIdNumberMother.random();
        const firstName = CustomerFirstNameMother_1.CustomerFirstNameMother.random();
        const lastName = CustomerLastNameMother_1.CustomerLastNameMother.random();
        const phoneNumber = CustomerPhoneNumberMother_1.CustomerPhoneNumberMother.random();
        given_a_use_case();
        yield when_a_customer_is_created(id, idNumber, firstName, lastName, phoneNumber);
        yield then_customer_has_the_correct_data(id, idNumber, firstName, lastName, phoneNumber);
    }));
    function given_a_use_case() {
        customerRepository = new InMemoryCustomerRepository_1.InMemoryCustomerRepository();
        createCustomer = new CreateCustomer_1.CreateCustomer(customerRepository);
    }
    function when_a_customer_is_created(id, idNumber, firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield createCustomer.execute(id, idNumber, firstName, lastName, phoneNumber);
        });
    }
    function then_customer_has_the_correct_data(id, idNumber, firstName, lastName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield customerRepository.findById(id);
            expect(customer).not.toBeNull();
            expect(customer.id).toEqual(id);
            expect(customer.idNumber).toEqual(idNumber);
            expect(customer.firstName).toEqual(firstName);
            expect(customer.lastName).toEqual(lastName);
            expect(customer.phoneNumber).toEqual(phoneNumber);
        });
    }
});
