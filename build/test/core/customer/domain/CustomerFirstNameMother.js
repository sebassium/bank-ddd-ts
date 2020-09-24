"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerFirstNameMother = void 0;
const CustomerFirstName_1 = require("../../../../src/core/customer/domain/CustomerFirstName");
const FakeValue_1 = require("../../shared/domain/FakeValue");
class CustomerFirstNameMother {
    static random() {
        return new CustomerFirstName_1.CustomerFirstName(FakeValue_1.FakeValue.get().name.firstName());
    }
}
exports.CustomerFirstNameMother = CustomerFirstNameMother;
