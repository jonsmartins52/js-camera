import { Media } from "./media.js";
import { qrCode } from "./qrCode.js";

function main() {
  const videoEl = document.querySelector("#video");
  const buttonEl = document.querySelector("button");
  const listEl = document.querySelector(".device-list");

  buttonEl.addEventListener("click", () => {
    Media.openCamera(videoEl).then((video) =>
      setInterval(() => qrCode.reader(video), 100)
    );
  });
  Media.listDevices().then((deviceList) => (listEl.innerHTML = deviceList));
}

main();
