import {NextFunction, Request, Response} from "express";
import {InMemoryCustomerRepository} from "./core/customer/infrastructure/InMemoryCustomerRepository";
import {CreateCustomer} from "./core/customer/application/CreateCustomer";
import {GetCustomerData} from "./core/customer/application/GetCustomerData";
import {CustomerPostController} from "./api/controllers/customer/CustomerPostController";
import {CustomerGetController} from "./api/controllers/customer/CustomerGetController";

const customerRepository = new InMemoryCustomerRepository();
const createCustomer = new CreateCustomer(customerRepository);
const getCustomerData = new GetCustomerData(customerRepository);
const customerPostController = new CustomerPostController(createCustomer)
const customerGetController = new CustomerGetController(getCustomerData);

const provider = (req: Request, res: Response, next: NextFunction) => {
    req.customerPostController = customerPostController;
    req.customerGetController = customerGetController;
    return next();
}

export default provider;

declare global{
    namespace Express {
        interface Request {
            customerPostController: CustomerPostController
            customerGetController: CustomerGetController
        }
    }
}