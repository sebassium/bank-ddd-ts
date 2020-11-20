import express from "express";
import create from "../../controllers/customer/CustomerPostController";
import get from "../../controllers/customer/CustomerGetController";

const customerRoutes = express.Router()

customerRoutes.post('/', create)
customerRoutes.get('/', get)

export default customerRoutes;