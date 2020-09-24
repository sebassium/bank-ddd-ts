import {Request, Response} from "express";
import {CustomerCreateService} from "../../services/customer/CustomerCreateService";
import {CreateCustomer} from "../../../core/customer/application/CreateCustomer";

const create = async (req: Request, res: Response) => {

    const { body, customerRepository } = req;
    try {
        const createCustomer = new CreateCustomer(customerRepository);
        const customerCreateService = new CustomerCreateService(createCustomer)

        const result = await customerCreateService.run(body);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).send('Server error')
    }

};

export default create;