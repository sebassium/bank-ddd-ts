import express from "express";
import create from "../../controllers/customer/CustomerPostController";
import get from "../../controllers/customer/CustomerGetController";

const router = express.Router()

router.post('/', create)
router.get('/', get)

export { router as customerRoutes };