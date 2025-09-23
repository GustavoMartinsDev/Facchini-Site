import axios from "axios";

export const sendContact = async (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
  isArchitect: boolean;
}) => {
  try {
    // Faz o POST para a nossa própria rota na Vercel que irá adicionar a API key
    const response = await axios.post("/api/send-contact", data);
    return { ok: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        error: error.response?.data || error.message,
      };
    }
    return {
      ok: false,
      error: "Erro interno do servidor",
    };
  }
};
