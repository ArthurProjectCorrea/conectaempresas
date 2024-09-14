import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  listCategoriesController,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post("/categorias", createCategoryController);
router.delete("/categorias/:id", deleteCategoryController);
router.get("/categorias", listCategoriesController);

export default router;
