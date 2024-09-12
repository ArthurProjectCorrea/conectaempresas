import express from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// Rotas para categorias
router.post("/", createCategory);
router.get("/", getCategories);
router.delete("/:id", deleteCategory);

export default router;
