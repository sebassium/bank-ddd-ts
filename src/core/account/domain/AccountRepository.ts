import {AccountId} from "./AccountId";
import {Account} from "./Account";

export interface AccountRepository {

    findById(accountId: AccountId): Promise<Account>;
    save(account: Account): Promise<void>;

}