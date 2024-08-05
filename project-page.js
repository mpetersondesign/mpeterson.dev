document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  const project = projects.find((p) => p.id === projectId);

  if (project) {
    document.getElementById(
      "page-title"
    ).textContent = `${project.name} - Matt Peterson`;
    document.getElementById("project-name").textContent = project.name;
    document.getElementById("project-subtitle").textContent = project.subtitle;
    if (project.videoFile) {
      document.getElementById("youtube-embed").remove();
      document.getElementById("project-videoFile").src = project.videoFile;
    } else {
      document.getElementById(
        "youtube-embed"
      ).src = `https://www.youtube.com/embed/${project.youtubeId}`;
    }

    document.getElementById("description-content").textContent =
      project.description;
    document.getElementById("role-content").textContent = project.myRole;
    document.getElementById("hurdles-content").textContent = project.hurdles;
    document.getElementById("results-content").textContent = project.results;
    const skillsContainer = document.getElementById("skills-container");
    project.skills.forEach((skill) => {
      const skillElement = document.createElement("div");
      skillElement.className = "skill-item";
      skillElement.textContent = skill;
      skillsContainer.appendChild(skillElement);
    });
  } else {
    console.error("Project not found");
    // You might want to redirect to a 404 page or show an error message
  }
});
