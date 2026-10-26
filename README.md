# NodeJS Param — Param POS (TurkPOS) Integration Sample

A Node.js/Express sample showing how to integrate with **[Param](https://param.com.tr)**'s TurkPOS SOAP web services from scratch: hand-built SOAP envelopes, server-side hash generation, card payments and stored-card (tokenized) payments.

> **Integration sample / reference.** The endpoints send fixed test data defined in the controllers (Param test cards, example URLs) so the flow can be exercised against Param's test environment. It is meant as a reference for building a real integration, not a production service.

## ✨ Features

- **Card payment (`Pos_Odeme`)** — first requests the transaction hash from Param's `SHA2B64` service, then submits the payment with that hash. Supports non-secure (`NS`) and `3D` security types and installments, and returns a normalized result (`success`, `code`, `bank_code`, `message`, `redirect` for the 3D page).
- **Store a card (`KS_Kart_Ekle`)** — saves a card in Param's card vault and returns its token (`KS_GUID`).
- **Pay with a stored card (`KS_Tahsilat`)** — charges a previously stored card by its `KS_GUID`.
- `Parampos` client class that reads merchant credentials from environment variables and switches between Param's test and production TurkPOS endpoints via `MODE`.
- SOAP requests built as XML strings and responses parsed with `xml2js`, with no SOAP client library required.

## 🛠 Tech Stack

- Node.js, Express 4
- `request` (HTTP) + `xml2js` (SOAP/XML response parsing)
- `dotenv` for configuration
- Param TurkPOS SOAP API

## 🚀 Getting Started

```bash
git clone https://github.com/muhannadsalkini/NodeJS-param.git
cd NodeJS-param
npm install
```

Create a `.env` file in the project root (it is git-ignored):

```env
CLIENT_CODE=your_client_code
CLIENT_USERNAME=your_username
CLIENT_PASSWORD=your_password
GUID=your_merchant_guid
MODE=TEST
```

| Variable | Description |
| --- | --- |
| `CLIENT_CODE` | Param merchant (terminal) client code |
| `CLIENT_USERNAME` | Param web service username |
| `CLIENT_PASSWORD` | Param web service password |
| `GUID` | Merchant GUID key |
| `MODE` | `TEST` uses Param's test TurkPOS endpoint; any other value uses production |

Param provides test credentials and test cards in its developer documentation.

Start the server (listens on port `3060`):

```bash
node index.js
# or, with auto-reload:
npx nodemon index.js
```

## 📡 Endpoints

All routes are mounted under `/api`.

| Method | Path | Param service | Description |
| --- | --- | --- | --- |
| `GET` | `/api/payment` | `SHA2B64` → `Pos_Odeme` | Card payment using the sample card and order defined in `Controllers/Payment.js` |
| `GET` | `/api/card/store` | `KS_Kart_Ekle` | Store the sample card from `Controllers/StoreCard.js` in Param's vault |
| `GET` | `/api/card/pay` | `KS_Tahsilat` | Charge a stored card (by `KS_GUID`) with the sample order data |

Example:

```bash
curl http://localhost:3060/api/payment
```

```json
{
  "result": {
    "success": true,
    "code": "<Islem_ID>",
    "bank_code": "<Banka_Sonuc_Kod>",
    "message": "<Sonuc_Str>",
    "redirect": "<UCD_URL>"
  }
}
```

The stored-card endpoints return Param's raw `KS_Kart_EkleResult` / `KS_TahsilatResult` object. Stored-card calls always target Param's test card-vault service.

To adapt it for real use, read the payment fields from `req.body` instead of the hard-coded objects in the controllers and switch the routes to `POST`. Inline comments mark which fields are meant to come from the request body.

## 📁 Project Structure

```
index.js                 # Express app, mounts /api routes, port 3060
Routers/
├── index.js             # /payment and /card routers
├── Payment.js
└── StoreCard.js
Controllers/
├── Payment.js           # Card payment request (sample data)
└── StoreCard.js         # Store card + pay with stored card (sample data)
Libs/
├── Parampos.js          # Client class: credentials, test/prod URLs, payment flows
└── Soap.js              # SOAP envelopes + xml2js response parsing
```

Planned but not yet implemented (marked with comments in the code): listing stored cards, pre-authorization with a stored card, removing a card and card verification.

## 📄 License

[MIT](LICENSE)
