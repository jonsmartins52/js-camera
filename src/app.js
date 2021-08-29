import { Media } from "./media.js";
import { qrCode } from "./qrCode.js";

function main() {
  const videoEl = document.querySelector("#video");
  const btnOpenEl = document.querySelector(".btn--open");
  const btnCloseEl = document.querySelector(".btn--close");
  const listEl = document.querySelector(".device-list");

  btnOpenEl.addEventListener("click", () => {
    Media.openCamera(videoEl).then((video) =>
      setInterval(() => qrCode.reader(video), 100)
    );
  });
  btnCloseEl.addEventListener("click", () => Media.closeCamera(videoEl));
  Media.listDevices().then((deviceList) => (listEl.innerHTML = deviceList));
}

main();
