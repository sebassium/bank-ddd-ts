import express from 'express';
import { apiRoutes } from "./api/routes/Routes"
import {InMemoryCustomerRepository} from "./core/customer/infrastructure/InMemoryCustomerRepository";
import {GetCustomerData} from "./core/customer/application/GetCustomerData";
import {CreateCustomer} from "./core/customer/application/CreateCustomer";
import {CustomerGetController} from "./api/controllers/customer/CustomerGetController";
import {CustomerPostController} from "./api/controllers/customer/CustomerPostController";

const app = express();

app.use(express.json());

//TODO: What's the best way to inject the repository?
const customerRepository = new InMemoryCustomerRepository();
const createCustomer = new CreateCustomer(customerRepository);
const getCustomerData = new GetCustomerData(customerRepository);
const customerPostController = new CustomerPostController(createCustomer)
const customerGetController = new CustomerGetController(getCustomerData);

app.use((req, res, next) => {
    req.customerPostController = customerPostController;
    req.customerGetController = customerGetController;
    return next();
});

app.use('/', apiRoutes);

export default app;

declare global{
    namespace Express {
        interface Request {
            customerPostController: CustomerPostController
            customerGetController: CustomerGetController
        }
    }
}