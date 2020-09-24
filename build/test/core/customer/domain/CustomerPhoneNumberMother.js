"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPhoneNumberMother = void 0;
const CustomerPhoneNumber_1 = require("../../../../src/core/customer/domain/CustomerPhoneNumber");
const FakeValue_1 = require("../../shared/domain/FakeValue");
class CustomerPhoneNumberMother {
    static random() {
        return new CustomerPhoneNumber_1.CustomerPhoneNumber(FakeValue_1.FakeValue.get().phone.phoneNumber());
    }
}
exports.CustomerPhoneNumberMother = CustomerPhoneNumberMother;
