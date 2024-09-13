import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/conectaempresas")
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
