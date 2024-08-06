const navData = [
  { title: "Home", url: "index.html" },
  {
    title: "Academic Projects",
    url: "#",
    dropdown: [],
  },
  {
    title: "Personal Projects",
    url: "#",
    dropdown: [],
  },
  { title: "Contact", url: "mailto:mpeterson.business@gmail.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/mpetersondev/" },
];

function populateProjectDropdowns() {
  projects.forEach((project) => {
    const dropdownItem = {
      title: project.name,
      url: `project.html?id=${project.id}`,
    };
    if (project.type === "academic") {
      navData[1].dropdown.push(dropdownItem);
    } else if (project.type === "personal") {
      navData[2].dropdown.push(dropdownItem);
    }
  });
}

function createNav() {
  populateProjectDropdowns();

  const nav = document.getElementById("main-nav");
  const ul = document.createElement("ul");

  navData.forEach((item) => {
    const li = document.createElement("li");

    if (item.dropdown) {
      const a = document.createElement("a");
      a.href = item.url;
      a.textContent = item.title;
      li.appendChild(a);

      const dropdownUl = document.createElement("ul");
      dropdownUl.className = "dropdown";

      item.dropdown.forEach((dropdownItem) => {
        const dropdownLi = document.createElement("li");
        const dropdownA = document.createElement("a");
        dropdownA.href = dropdownItem.url;
        dropdownA.textContent = dropdownItem.title;
        dropdownLi.appendChild(dropdownA);
        dropdownUl.appendChild(dropdownLi);
      });

      li.appendChild(dropdownUl);
      li.classList.add("has-dropdown");
    } else {
      const a = document.createElement("a");
      a.href = item.url;
      a.textContent = item.title;
      li.appendChild(a);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);

  const dropdowns = document.querySelectorAll(".has-dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", () => {
      dropdown.querySelector(".dropdown").style.display = "block";
    });
    dropdown.addEventListener("mouseout", () => {
      dropdown.querySelector(".dropdown").style.display = "none";
    });

    dropdown.addEventListener("click", () => {
      const dropdownMenu = dropdown.querySelector(".dropdown");
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
  });

  return nav;
}

document.addEventListener("DOMContentLoaded", function () {
  const nav = createNav();
  document.querySelector("main").style.marginTop = nav.innerHeight;
});
