import {AccountId} from "./AccountId";
import {CustomerId} from "../../customer/domain/CustomerId";

export class Account {

    private readonly _accountId: AccountId;
    private readonly _customerId: CustomerId;

    constructor(accountId: AccountId, customerId: CustomerId) {
        this._accountId = accountId;
        this._customerId = customerId;
    }

    static create(accountId: AccountId, customerId: CustomerId) {
        return new Account(accountId, customerId);
    }

    get accountId(): AccountId {
         return this._accountId;
    }

    get customerId(): CustomerId {
        return this._customerId;
    }

}