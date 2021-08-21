function main() {
  const videoEl = document.querySelector("#video");
  const buttonEl = document.querySelector("button");
  const listEl = document.querySelector(".device-list");

  buttonEl.addEventListener("click", () => openCamera(videoEl));
  listDevices().then((deviceList) => (listEl.innerHTML = deviceList));
}

async function openCamera(videoElement) {
  if (
    !"mediaDevices" in navigator ||
    !"getUserMedia" in navigator.mediaDevices
  ) {
    alert("Camera API is not available in your browser");
    return;
  }
  const constraints = {
    video: {
      width: { exact: 480 },
      /* height: { exact: 240 }, */
      facingMode: "user",
    },
  };

  try {
    videoElement.srcObject = await navigator.mediaDevices.getUserMedia(
      constraints
    );
    videoElement.play();
    videoElement.style.marginBottom = "1rem";
    videoElement.style.border = "1px solid rgb(219, 56, 50)";
  } catch (error) {
    console.log("deu xabu: ", err);
    const msgErr = document.querySelector(".error-msg");
    msgErr.style.display = "block";
  }
}

async function listDevices() {
  if (
    !"mediaDevices" in navigator ||
    !"getUserMedia" in navigator.mediaDevices
  ) {
    alert("Camera API is not available in your browser");
    return;
  }

  const deviceList = await navigator.mediaDevices.enumerateDevices();
  return deviceList
    .map(
      (device) => `
  <li>
    <span class="device-id">
      ${device.deviceId}
    </span>
    <p>${device.label} - ${device.kind}</p>
  </li>
  `
    )
    .join("");
}

main();
