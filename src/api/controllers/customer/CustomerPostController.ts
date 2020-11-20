import {Request, Response} from "express";
import {CreateCustomer} from "../../../core/customer/application/CreateCustomer";
import {CustomerId} from "../../../core/customer/domain/CustomerId";
import {CustomerPersonalNumber} from "../../../core/customer/domain/CustomerPersonalNumber";
import {CustomerFirstName} from "../../../core/customer/domain/CustomerFirstName";
import {CustomerLastName} from "../../../core/customer/domain/CustomerLastName";
import {CustomerPhoneNumber} from "../../../core/customer/domain/CustomerPhoneNumber";

type Body = {
    customerId: string,
    personalNumber: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
}

export class CustomerPostController {
    constructor(private createCustomer: CreateCustomer) {}

    run(body: Body): Promise<void> {
        const customerId = new CustomerId(body.customerId);
        const personalNumber = new CustomerPersonalNumber(body.personalNumber);
        const firstName = new CustomerFirstName(body.firstName);
        const lastName = new CustomerLastName(body.lastName);
        const phoneNumber = new CustomerPhoneNumber(body.phoneNumber);

        return this.createCustomer.execute(customerId, personalNumber, firstName, lastName, phoneNumber)
    }
}

const create = async ({ customerPostController, body }: Request, res: Response) => {
    try {
        const result = await customerPostController.run(body);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e.message)
    }
};

export default create;