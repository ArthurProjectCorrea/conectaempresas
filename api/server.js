import express from "express";
import cors from "cors";
import connectDB from "./mongodb.js";
import categoryRoutes from "./routes/categoryRoutes.js"; // Importa as rotas de categorias
import companyRoutes from "./routes/companyRoutes.js"; // Importa as rotas de empresas

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Usar as rotas de categorias
app.use("/api/categories", categoryRoutes);

// Usar as rotas de empresas
app.use("/api/companies", companyRoutes);

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
