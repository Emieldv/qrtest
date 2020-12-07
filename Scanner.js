/**
 * Scanner
*/

const scanner = () => {

  // This method will trigger user permissions
  Html5Qrcode.getCameras().then(devices => {
    if (devices && devices.length) {

      const cameraId = devices[0].id; // <-- Select first camera in the list
      const html5QrCode = new Html5Qrcode("reader"); // <-- reader-div element id

      const aspectRatio = window.screen.width / window.screen.height
      console.log(aspectRatio)

      // Start the scanner
      html5QrCode.start(
        cameraId, 
        { 
          fps: 10, // higher fps = faster scanning
          aspectRatio: aspectRatio // <-- container width / container height. Depends on how you want to display the reader
        },
        qrCodeMessage => {
          // Stop the scanner, then handle response
          html5QrCode.stop().then(() => {

            // print the response
            const text = document.getElementById('text');
            text.innerHTML = qrCodeMessage;

          }).catch(err => {
            console.log(err) // <-- error when stop has failed
          });

        },
        errorMessage => {
          // Ignore this, gives an error at the rate of your fps every time no code has been detected
        })
        
      .catch(err => {
        console.log(err) // <-- error when startup has failed
      });

    }

  }).catch(err => {
    console.log(err)  // <-- error when there are no devices
  });
}

export { scanner }