var Parampos = require("../Libs/Parampos");

const createPayment = async (req, res) => {
  try {
    // Initialization options
    const initOptions = {
      MODE: "TEST", // TEST or PROD (Default is PROD)
      CLIENT_CODE: "10738",
      CLIENT_USERNAME: "Test",
      CLIENT_PASSWORD: "Test",
      GUID: "0c13d406-873b-403b-9c09-a5766840d98c",
    };

    // Initialize Parampos client
    const client = new Parampos(initOptions);

    // Payment options
    const payOptions = {
      cardName: "Example User",
      cardNumber: "5401341234567891",
      cardExpmonth: "12",
      cardExpyear: "2026",
      cardCvv: "000",
      cardHolderPhone: "5445555555",
      failUrl: "https://example.com/",
      successUrl: "https://example.com/",
      orderId: Date.now(),
      description: "Example product description",
      total: "10,00", // Total Price
      securityType: "NS", // NS or 3D (default = NS)
      ipAddress: "127.1.1.1", // Default IP address
      installment: "1", // Number of installments (Default = 1)
    };

    // Make payment request
    const result = await client.setPaid(payOptions);

    console.log("Payment result:", result);
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPayment };
