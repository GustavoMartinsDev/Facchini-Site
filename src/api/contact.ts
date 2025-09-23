"use strict";
import axios from "axios";

const api = axios.create({
  baseURL: "https://facchini-api.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.CONTACT_API_KEY,
  },
});

export const sendContact = async (data: {
  name: string;
  phone: string;
  email: string;
  message: string;
  isArchitect: boolean;
}) => {
  try {
    const response = await api.post("/send-contact", data);
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
