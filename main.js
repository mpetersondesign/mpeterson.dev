document.addEventListener("DOMContentLoaded", () => {
  const animationsToggle = document.getElementById("animations-toggle");
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const nav = document.querySelector("nav");
  const scrollContainer = document.querySelector(".projects-scroll-container");
  const scrollLeftBtn = document.querySelector(".scroll-arrow.left");
  const scrollRightBtn = document.querySelector(".scroll-arrow.right");
  const projectsScroll = document.querySelector(".projects-scroll");

  projects.forEach((project) => {
    const projectThumbnail = document.createElement("div");
    projectThumbnail.className = "project-thumbnail";
    projectThumbnail.onclick = () => {
      location.href = `project.html?id=${project.id}`;
    };

    const img = document.createElement("img");
    img.src = project.thumbnailUrl;
    img.alt = project.name;

    projectThumbnail.appendChild(img);
    projectsScroll.appendChild(projectThumbnail);
  });

  function addSafeEventListener(element, event, handler) {
    if (element) {
      element.addEventListener(event, handler);
    }
  }

  const scroll = (direction) => {
    if (scrollContainer) {
      const projects = scrollContainer.querySelectorAll(".project-thumbnail");
      const scrollAmount = projects[0].clientWidth;
      if (scrollContainer.scrollLeft < (projects.length - 3) * scrollAmount) {
        scrollContainer.scrollBy({
          left: direction * scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const employmentItems = document.querySelectorAll(".employment-item");
  employmentItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("expanded");

      const expandLabel = item.querySelector(".expand-label");
      if (item.classList.contains("expanded")) {
        expandLabel.textContent = "Collapse details";
      } else {
        expandLabel.textContent = "Expand for more details";
      }
    });
  });

  addSafeEventListener(scrollLeftBtn, "click", () => scroll(-1));
  addSafeEventListener(scrollRightBtn, "click", () => scroll(1));

  function createBackgroundShapes() {
    const container = document.querySelector(".background-shapes");
    if (container) {
      const shapeCount = 5;
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement("div");
        shape.classList.add("shape");

        const size = Math.random() * 300 + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;

        const animationDuration = 15 + Math.random() * 15;
        const animationDelay = Math.random() * -30;
        shape.style.animationDuration = `${animationDuration}s`;
        shape.style.animationDelay = `${animationDelay}s`;

        container.appendChild(shape);
      }
    }
  }
  createBackgroundShapes();

  let animationsEnabled = true;
  addSafeEventListener(animationsToggle, "click", () => {
    animationsEnabled = !animationsEnabled;
    body.classList.toggle("animations-disabled", !animationsEnabled);
    if (animationsToggle) {
      animationsToggle.textContent = animationsEnabled ? "A" : "a";
    }
  });

  addSafeEventListener(themeToggle, "click", () => {
    body.classList.toggle("light-mode");
    if (themeToggle) {
      themeToggle.textContent = body.classList.contains("light-mode")
        ? "☾"
        : "☀";
    }
  });

  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && animationsEnabled) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  window.addEventListener("scroll", () => {
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  });

  const hero =
    document.querySelector(".hero") || document.querySelector(".project-hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
  }

  document.querySelectorAll("nav ul li").forEach((item) => {
    item.addEventListener("click", () => {
      const dropdown = item.querySelector("ul.dropdown");
      if (dropdown) {
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
      }
    });
  });
});
