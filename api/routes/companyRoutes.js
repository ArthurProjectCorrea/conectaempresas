import express from "express";
import {
  createCompanyController,
  deleteCompanyController,
  listCompaniesController,
} from "../controllers/companyController.js";

const router = express.Router();

router.post("/empresas", createCompanyController);
router.delete("/empresas/:id", deleteCompanyController);
router.get("/empresas", listCompaniesController);

export default router;
