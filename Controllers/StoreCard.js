var Parampos = require("../Libs/Parampos");

const storeCard = async (req, res) => {
  try {
    // Initialization options
    const initOptions = {
      MODE: "TEST", // TEST or PROD (Default is PROD)
      CLIENT_CODE: "10738",
      CLIENT_USERNAME: "Test",
      CLIENT_PASSWORD: "Test",
      GUID: "0c13d406-873b-403b-9c09-a5766840d98c",
    };

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
    const client = new Parampos(initOptions);

    const result = await client.storeCard(options);

    res.status(200).json(result);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { storeCard };
