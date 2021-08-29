const barcodeDetector = new BarcodeDetector({ formats: ["qr_code"] });
const codesRead = new Set();

export const qrCode = {
  reader(video) {
    if (!"BarcodeDetector" in window) {
      alert("Não há suporte para o detector de QR code");
      return;
    }

    barcodeDetector
      .detect(video)
      .then((codes) => {
        if (!codes.length) return;

        for (let barcodes of codes) {
          if (codesRead.has(barcodes.rawValue)) return;
          codesRead.add(barcodes.rawValue);

          localStorage.setItem(
            "@qrCode",
            JSON.stringify({ rawValue: barcodes.rawValue })
          );
        }
      })
      .catch((err) => console.log("erro ao ler qr code: ", err));
  },
};
