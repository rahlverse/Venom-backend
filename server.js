import express from "express";
import venom from "venom-bot";

const app = express();
app.use(express.json());

let clientInstance = null;

// Create venom session
venom
  .create({ session: "rahl-session" })
  .then((client) => {
    clientInstance = client;
    console.log("✅ Venom client ready!");
  })
  .catch((err) => console.error("Venom error:", err));

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Venom backend is running on Render");
});

// Send message route
app.post("/send", async (req, res) => {
  const { to, message } = req.body;
  if (!clientInstance)
    return res.status(503).json({ error: "Client not ready yet" });

  try {
    await clientInstance.sendText(to, message);
    res.json({ ok: true, to, message });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// Render gives us PORT in env
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Server listening on ${PORT}`));
