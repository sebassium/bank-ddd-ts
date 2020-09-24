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
const CustomerMother_1 = require("../domain/CustomerMother");
const CustomerIdMother_1 = require("../domain/CustomerIdMother");
const GetCustomerData_1 = require("../../../../src/core/customer/application/GetCustomerData");
const InMemoryCustomerRepository_1 = require("../../../../src/core/customer/infrastructure/InMemoryCustomerRepository");
describe('GetCustomerData should', () => {
    let customer;
    let customerRepository;
    let getCustomerData;
    let customerData;
    test('return customer data', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = CustomerIdMother_1.CustomerIdMother.random();
        customer = CustomerMother_1.CustomerMother.withId(id);
        given_a_use_case();
        yield given_a_saved_customer();
        yield when_getting_customer_data(id);
        yield then_returned_customer_data_is_correct();
    }));
    function given_a_use_case() {
        customerRepository = new InMemoryCustomerRepository_1.InMemoryCustomerRepository();
        getCustomerData = new GetCustomerData_1.GetCustomerData(customerRepository);
    }
    function given_a_saved_customer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield customerRepository.save(customer);
        });
    }
    function when_getting_customer_data(id) {
        return __awaiter(this, void 0, void 0, function* () {
            customerData = yield getCustomerData.execute(id);
        });
    }
    function then_returned_customer_data_is_correct() {
        return __awaiter(this, void 0, void 0, function* () {
            expect(customerData).not.toBeNull();
            expect(customerData.id).toEqual(customer.id.value);
            expect(customerData.idNumber).toEqual(customer.idNumber.value);
            expect(customerData.firstName).toEqual(customer.firstName.value);
            expect(customerData.lastName).toEqual(customer.lastName.value);
            expect(customerData.phoneNumber).toEqual(customer.phoneNumber.value);
        });
    }
});
