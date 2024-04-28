var Parampos = require("../Libs/Parampos");

const storeCard = async (req, res) => {
  try {
    // Payment options
    const options = {
      KK_Sahibi: "Test Test", // body
      KK_No: "4155650100416", // body
      KK_SK_Ay: "01", // body
      KK_SK_Yil: "50", // body
      KK_Kart_Adi: "MyFavCard", // body optional

      /*
      KK_Sahibi, KK_No, KK_SK_Ay, KK_SK_Yil, KK_Kart_Adi
      */
      KK_Islem_ID: "", // optional
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
      KS_GUID: "a27a99f2-c523-4caf-8bac-6f700a8b23eb", // params
      CVV: "000", // body (3D islemler icin gerekli)
      KK_Sahibi_GSM: "5551231212", // body
      Hata_URL: "https://dev.param.com.tr/en", // env
      Basarili_URL: "https://dev.param.com.tr/tr", // env
      Siparis_ID: "TKS_TahsilatS001", // Unique order id
      Siparis_Aciklama: "string", // body (zorunlu degil)
      Taksit: "1", // body (1-12 taksit)
      Islem_Tutar: "100,00", // body
      Toplam_Tutar: "100,00", // body (Komisyon dahil)
      Islem_Guvenlik_Tip: "3D", // body (NS (NonSecure) veya 3D)
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
