import Company from "../models/companyModel.js";

export const createCompanyController = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Nome e descrição da empresa são obrigatórios" });
    }

    const novaEmpresa = new Company({ name, description });
    await novaEmpresa.save();

    res.status(201).json(novaEmpresa);
  } catch (error) {
    console.error("Erro ao criar empresa:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const deleteCompanyController = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await Company.findByIdAndDelete(id);
    if (!resultado) {
      return res.status(404).json({ error: "Empresa não encontrada" });
    }
    res.status(200).json({ message: "Empresa deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar empresa:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const listCompaniesController = async (req, res) => {
  try {
    const empresas = await Company.find();
    res.status(200).json(empresas);
  } catch (error) {
    console.error("Erro ao listar empresas:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
