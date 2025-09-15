# Venom Backend

A simple Express + Venom bot backend that runs on Render.

## Features
- Starts a Venom WhatsApp session
- Exposes `/send` endpoint to send messages

## Endpoints
- `GET /` → check if server is alive
- `POST /send` → send a WhatsApp message

### Example Request
```bash
curl -X POST https://your-app.onrender.com/send \
  -H "Content-Type: application/json" \
  -d '{"to":"2547XXXXXXXX","message":"Hello from Venom!"}'
