"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMother = void 0;
const Customer_1 = require("../../../../src/core/customer/domain/Customer");
const CustomerIdNumberMother_1 = require("./CustomerIdNumberMother");
const CustomerFirstNameMother_1 = require("./CustomerFirstNameMother");
const CustomerLastNameMother_1 = require("./CustomerLastNameMother");
const CustomerPhoneNumberMother_1 = require("./CustomerPhoneNumberMother");
class CustomerMother {
    static withId(id) {
        return Customer_1.Customer.create(id, CustomerIdNumberMother_1.CustomerIdNumberMother.random(), CustomerFirstNameMother_1.CustomerFirstNameMother.random(), CustomerLastNameMother_1.CustomerLastNameMother.random(), CustomerPhoneNumberMother_1.CustomerPhoneNumberMother.random());
    }
}
exports.CustomerMother = CustomerMother;
