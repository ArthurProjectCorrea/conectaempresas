import Company from "../models/Company.js";

// Criar uma nova empresa
export const createCompany = async (req, res) => {
  const { name, categories_id, description } = req.body;

  if (!name || !categories_id) {
    return res
      .status(400)
      .json({ message: "Nome e categoria são obrigatórios" });
  }

  try {
    const company = new Company({ name, categories_id, description });
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Listar todas as empresas
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate("categories_id", "name");
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletar uma empresa
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (company) {
      res.status(200).json({ message: "Empresa excluída com sucesso" });
    } else {
      res.status(404).json({ message: "Empresa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
