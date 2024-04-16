var Parampos = require("../Libs/Parampos");

const storeCard = async (req, res) => {
  try {
    // Payment options
    const options = {
      KK_Sahibi: "Test Test",
      KK_No: "4155650100416",
      KK_SK_Ay: "01",
      KK_SK_Yil: "50",
      KK_Kart_Adi: "MyFavCard",
      KK_Islem_ID: "",
    };

    // Initialize Parampos client
    const client = new Parampos();

    const result = await client.storeCard(options);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { storeCard };
