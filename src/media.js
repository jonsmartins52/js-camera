export const Media = {
  async openCamera(videoElement) {
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
        facingMode: "environment",
      },
    };

    try {
      videoElement.srcObject = await navigator.mediaDevices.getUserMedia(
        constraints
      );
      videoElement.play();

      return videoElement;
    } catch (error) {
      const msgErr = document.querySelector(".error-msg");
      msgErr.style.display = "block";
    }
  },

  closeCamera(videoElement) {
    const stream = videoElement.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoElement.srcObject = null;
  },

  async listDevices() {
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
  },
};
