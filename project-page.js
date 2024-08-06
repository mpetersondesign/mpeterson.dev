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
    document.getElementById("project-subtitle2").textContent =
      project.subtitle2;
    if (project.videoFile) {
      document.getElementById("youtube-embed").remove();
      document.getElementById("project-videoFile").src = project.videoFile;
    } else if (project.youtubeId) {
      document.getElementById("project-videoFile").remove();
      document.getElementById(
        "youtube-embed"
      ).src = `https://www.youtube.com/embed/${project.youtubeId}`;
    } else {
      document.getElementById("project-videoFile").remove();
      document.getElementById("youtube-embed").remove();
      document.querySelector(".video-container").remove();
      const videoStandIn = document.createElement("img");
      videoStandIn.src = project.thumbnailUrl;
      videoStandIn.alt = project.name;
      videoStandIn.style.maxWidth = "100%";
      videoStandIn.style.height = "auto";
      document.querySelector("#project-video").appendChild(videoStandIn);
    }

    document.getElementById("description-content").innerHTML =
      project.description;
    const myRolesContainer = document.getElementById("my-roles");
    project.myRoles.forEach((role) => {
      const roleElement = document.createElement("p");
      roleElement.textContent = role;
      myRolesContainer.appendChild(roleElement);
    });
    document.getElementById("team-size").textContent = project.teamSize;
    document.getElementById("duration").textContent = project.duration;
    document.getElementById("hurdles-content").innerHTML = project.hurdles;
    document.getElementById("contribution-content").innerHTML =
      project.contributions;
    document.getElementById("results-content").innerHTML = project.results;
    const skillsContainer = document.getElementById("skills-container");
    project.skills.forEach((skill) => {
      const skillElement = document.createElement("div");
      skillElement.className = "skill-item";
      skillElement.textContent = skill;
      skillsContainer.appendChild(skillElement);
    });
    const documentationSection = document.getElementById(
      "project-documentation"
    );
    const documentationContainer = document.getElementById(
      "documentation-container"
    );
    if (project.documentation) {
      const iframe = document.createElement("iframe");
      iframe.src = project.documentation;
      iframe.width = "100%";
      iframe.height = "600px";
      documentationContainer.appendChild(iframe);
    } else {
      documentationSection.style.display = "none";
    }
  } else {
    console.error("Project not found");
  }
});
