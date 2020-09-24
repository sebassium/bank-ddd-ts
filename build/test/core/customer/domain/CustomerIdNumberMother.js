"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerIdNumberMother = void 0;
const FakeValue_1 = require("../../shared/domain/FakeValue");
const CustomerIdNumber_1 = require("../../../../src/core/customer/domain/CustomerIdNumber");
class CustomerIdNumberMother {
    static random() {
        return new CustomerIdNumber_1.CustomerIdNumber(FakeValue_1.FakeValue.get().random.alphaNumeric(10));
    }
}
exports.CustomerIdNumberMother = CustomerIdNumberMother;
