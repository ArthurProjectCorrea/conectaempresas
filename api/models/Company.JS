import mongoose from "mongoose";

// Esquema da Empresa (Company)
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories_id: {
    type: mongoose.Schema.Types.ObjectId, // Referência para a coleção Categories
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Modelo de Empresa (Company)
const Company = mongoose.model("Company", companySchema);

export default Company;
