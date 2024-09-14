import Category from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ error: "O nome da categoria é obrigatório" });
    }

    const novaCategoria = new Category({ name });
    await novaCategoria.save();

    res.status(201).json(novaCategoria);
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Category.findByIdAndDelete(id);
    if (!resultado) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }
    res.status(200).json({ message: "Categoria deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar categoria:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const listCategoriesController = async (req, res) => {
  try {
    const categorias = await Category.find();
    res.status(200).json(categorias);
  } catch (error) {
    console.error("Erro ao listar categorias:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
