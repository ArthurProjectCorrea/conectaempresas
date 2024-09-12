import express from "express";
import {
  createCompany,
  getCompanies,
  deleteCompany,
} from "../controllers/companyController.js";

const router = express.Router();

// Rotas para empresas
router.post("/", createCompany);
router.get("/", getCompanies);
router.delete("/:id", deleteCompany);

export default router;
