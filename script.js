function showSection(sectionId) {
  // Hide all sections
  var sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    section.style.display = "none";
  });

  // Show the selected section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = "block";

  // Update the styling of the corresponding link in the navigation
  var navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === "#" + sectionId) {
      link.style.color = "#000"; // Change the color for the selected link
      link.style.fontWeight = "bold"; // Add bold font-weight
    } else {
      // Reset styling for other links
      link.style.color = "rgba(0, 0, 0, 0.4)";
      link.style.fontWeight = "normal";
    }
  });
}
// Open the Ava modal
function openAvaModal() {
  document.getElementById("avaModal").style.display = "flex";
}

// Close the Ava modal
function closeAvaModal() {
  document.getElementById("avaModal").style.display = "none";
}

// Open the CV modal
function openCVModal() {
  document.getElementById("CVModal").style.display = "flex";
}

// Close the modal
function closeCVModal() {
  document.getElementById("CVModal").style.display = "none";
}

// Open the CV modal
function openHobbyModal() {
  document.getElementById("CVModal").style.display = "flex";
}

function openHobbyModal(imageName) {
  var modal = document.getElementById("hobbyModal");
  var modalImage = document.getElementById("hobbyModalImage");
  modal.style.display = "flex";
  modalImage.src = "image/" + imageName;
}

function closeHobbyModal() {
  var modal = document.getElementById("hobbyModal");
  modal.style.display = "none";
}

function openContactModal() {
  var modal = document.getElementById("contactModal");
  modal.style.display = "flex";
}

function closeContactModal() {
  var modal = document.getElementById("contactModal");
  modal.style.display = "none";
}
