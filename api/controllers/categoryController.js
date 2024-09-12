import Category from "../models/Category.js";

// Criar uma nova categoria
export const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: "O nome da categoria é obrigatório" });
  }

  try {
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar todas as categorias
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletar uma categoria
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      res.status(200).json({ message: "Categoria excluída com sucesso" });
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
