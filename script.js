var selectedImage = "/Images/james_webb.jpg"; // Default selected image

// Function to handle image selection
function selectImage(imagePath) {
  selectedImage = imagePath;
  var originalTelescopeImage = document.getElementById('originalTelescopeImage');
  originalTelescopeImage.src = selectedImage;
}


function toggleTelescope(telescope) {
  var pressedTelescopeImage = document.getElementById('pressedTelescopeImage');
  
  if (selectedImage === '/Images/james_webb.jpg') {
    if (telescope === 'spitzer') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/spitzer1.png';
    } else if (telescope === 'wise') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/wise1.png';
    } else if (telescope === 'hubble') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/hubble1.png';
    }
  } else if (selectedImage === '/Images/webb_2.jpg') {
    if (telescope === 'spitzer') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/spitzer2.png';
    } else if (telescope === 'wise') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/wise2.png';
    } else if (telescope === 'hubble') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/hubble2.png';
    }
  } else if (selectedImage === '/Images/puzzle.jpg') {
    if (telescope === 'spitzer') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/s3.png';
    } else if (telescope === 'wise') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/w3.png';
    } else if (telescope === 'hubble') {
      pressedTelescopeImage.src = selectedImage;
      pressedTelescopeImage.src = '/Images/h3.png';
    }
  }
}



