import {AccountRepository} from "../../../../src/core/account/domain/AccountRepository";
import {OpenAccount} from "../../../../src/core/account/application/OpenAccount";
import {AccountIdMother} from "../domain/AccountIdMother";
import {CustomerIdMother} from "../../customer/domain/CustomerIdMother";
import {InMemoryAccountRepository} from "../../../../src/core/account/insfrastructure/InMemoryAccountRepository";
import {AccountId} from "../../../../src/core/account/domain/AccountId";
import {CustomerId} from "../../../../src/core/customer/domain/CustomerId";

describe('OpenAccount should', () => {

    let accountRepository: AccountRepository;
    let openAccount: OpenAccount;

    test('open a new account', async () => {

        const accountId = AccountIdMother.random();
        const customerId = CustomerIdMother.random();

        given_a_use_case()

        await when_an_account_is_opened(accountId, customerId);

        await then_account_has_the_correct_data(accountId, customerId)
    });

    function given_a_use_case() {
        accountRepository = new InMemoryAccountRepository();
        openAccount = new OpenAccount(accountRepository);
    }
    
    async function when_an_account_is_opened(accountId: AccountId, customerId: CustomerId) {
        await openAccount.execute(accountId, customerId);
    }

    async function then_account_has_the_correct_data(accountId: AccountId, customerId: CustomerId) {
        const account = await accountRepository.findById(accountId);

        expect(account).not.toBeNull()
        expect(account.accountId).toEqual(accountId);
        expect(account.customerId).toEqual(customerId);
    }

});