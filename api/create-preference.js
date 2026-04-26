import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { items } = req.body;

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: items.map((item) => ({
          title: item.name,
          quantity: Number(item.quantity),
          unit_price: Number(item.price),
          currency_id: "BRL",
        })),
        back_urls: {
          success: "http://localhost:5173/success",
          failure: "http://localhost:5173/",
          pending: "http://localhost:5173/",
        },
        auto_return: "approved",
      },
    });

    return res.status(200).json({
      init_point: response.init_point,
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}