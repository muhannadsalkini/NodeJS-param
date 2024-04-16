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

const payViaStoredCard = async (req, res) => {
  try {
    // Payment options
    const options = {
      KS_GUID: "a27a99f2-c523-4caf-8bac-6f700a8b23eb",
      CVV: "000",
      KK_Sahibi_GSM: "5551231212",
      Hata_URL: "https://dev.param.com.tr/en",
      Basarili_URL: "https://dev.param.com.tr/tr",
      Siparis_ID: "TKS_TahsilatS001",
      Siparis_Aciklama: "string",
      Taksit: "1",
      Islem_Tutar: "100,00",
      Toplam_Tutar: "100,00",
      Islem_Guvenlik_Tip: "3D",
      // Islem_ID: "string",
      IPAdr: "127.0.0.1",
      // Ref_URL: "string",
      // Data1: "string",
      // Data2: "string",
      // Data3: "string",
      // Data4: "string",
      // KK_Islem_ID: "string",
    };

    // Initialize Parampos client
    const client = new Parampos();

    const result = await client.payViaStoredCard(options);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { storeCard, payViaStoredCard };
