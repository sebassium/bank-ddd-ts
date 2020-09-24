"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerIdMother = void 0;
const CustomerId_1 = require("../../../../src/core/customer/domain/CustomerId");
const FakeValue_1 = require("../../shared/domain/FakeValue");
class CustomerIdMother {
    static random() {
        return new CustomerId_1.CustomerId(FakeValue_1.FakeValue.get().random.uuid());
    }
}
exports.CustomerIdMother = CustomerIdMother;
