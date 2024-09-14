import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose
  .connect("mongodb://localhost:27017/conectaempresas")
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// Usar as rotas
app.use("/api", categoryRoutes);
app.use("/api", companyRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
