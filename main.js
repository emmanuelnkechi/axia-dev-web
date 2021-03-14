const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  //   navLinks.classList.toggle("open");
  //   links.forEach((link) => {
  //     link.classList.toggle("fade");
  //   });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

document.querySelectorAll(".tabs").forEach((tab) => {
  // Selecting headings and blocks with content
  const tabHeading = tab.querySelectorAll(".tabs__heading");
  const tabContent = tab.querySelectorAll(".tabs__content");

  // A variable for the data attribute
  let tabName;

  // For each tab heading...
  tabHeading.forEach((element) => {
    // ...add event listener
    element.addEventListener("click", () => {
      // Disabling each tab
      tabHeading.forEach((item) => {
        item.classList.remove("is-active");
        document.querySelector(".first-tab-image").style.display = "block"
      });

      // Enabling a tab
      element.classList.add("is-active");
      document.querySelector(".first-tab-image").style.display = "none"

      // Getting value from the data attribute
      tabName = element.getAttribute("data-tab-index");

      // Checking all the blocks with content
      tabContent.forEach((item) => {
        // If the item has the same class as the value of the data attribute...
        item.classList.contains(tabName)
          ? item.classList.add("is-active")
          : item.classList.remove("is-active");

        // Add class 'is-active' to this item
        // Otherwise, remove the class
      });
    });
  });
});

const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});
