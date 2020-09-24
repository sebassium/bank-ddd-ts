"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLastNameMother = void 0;
const CustomerLastName_1 = require("../../../../src/core/customer/domain/CustomerLastName");
const FakeValue_1 = require("../../shared/domain/FakeValue");
class CustomerLastNameMother {
    static random() {
        return new CustomerLastName_1.CustomerLastName(FakeValue_1.FakeValue.get().name.lastName());
    }
}
exports.CustomerLastNameMother = CustomerLastNameMother;
