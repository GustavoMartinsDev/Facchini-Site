export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Método não permitido" });
  }

  try {
    const response = await fetch(
      "https://facchini-api.vercel.app/api/send-contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CONTACT_API_KEY,
        },
        body: JSON.stringify(req.body),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ ok: false, error: text });
    }

    const data = await response.json();
    return res.status(200).json({ ok: true, data });
  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    return res.status(500).json({
      ok: false,
      error: error.message || "Erro interno do servidor",
    });
  }
}
