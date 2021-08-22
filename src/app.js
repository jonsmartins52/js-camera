import { Media } from "./media.js";

function main() {
  const videoEl = document.querySelector("#video");
  const buttonEl = document.querySelector("button");
  const listEl = document.querySelector(".device-list");

  buttonEl.addEventListener("click", () => Media.openCamera(videoEl));
  Media.listDevices().then((deviceList) => (listEl.innerHTML = deviceList));
}

main();
