import {Request, Response} from "express";
import {GetCustomerData} from "../../../core/customer/application/GetCustomerData";
import {CustomerId} from "../../../core/customer/domain/CustomerId";

type Body = {
    customerId: string
}

export class CustomerGetController {
    constructor(private getCustomerData: GetCustomerData) {}

    run(body: Body) {
        const customerId = new CustomerId(body.customerId);
        return this.getCustomerData.execute(customerId);
    }
}

const get = async ({ customerGetController, body}: Request, res: Response) => {
    try {
        const result = await customerGetController.run(body);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send(e.message)
    }
};

export default get;

