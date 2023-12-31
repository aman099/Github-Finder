class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display Profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" />
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br/><br/>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location:  ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos<h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.name}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazer_count}</span>
              <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output Repos
    document.getElementById("repos").innerHTML = output;
  }

  // Show Alert Message when no Profile matches with the typed keywords
  showAlert(message, className) {
    // Clear any remaining Alerts
    this.clearAlert();
    // Create div
    const div = document.createElement("div");
    // Add Classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector(".searchContainer");
    // Get Searchbox
    const search = document.querySelector(".search");
    // Insert Alert
    container.insertBefore(div, search);

    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
