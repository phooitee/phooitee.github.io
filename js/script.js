function createCarouselItems(imageList) {
    console.log(imageList)
    const carouselItems = document.getElementById('carouselItems');
    
    // Clear any existing items
    carouselItems.innerHTML = '';
    
    // Create a carousel item for each image in the list
    imageList.forEach((image, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      
      if (index === 0) {
        carouselItem.classList.add('active');
      }
      
      const img = document.createElement('img');
      img.classList.add('d-block', 'w-100', 'slider-image');
      img.src = image.src;
      img.alt = image.alt;
      
      carouselItem.appendChild(img);
      carouselItems.appendChild(carouselItem);
    });
  }

function getFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      footerPlaceholder.innerHTML = html;
    });
}

function registerNavList() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function(dropdown) {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function() {
      // Close other dropdowns
      dropdowns.forEach(function(otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('active');
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle('active');
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });
  });
}
  
  
