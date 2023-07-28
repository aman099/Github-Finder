// Initialize/Instantiate GitHub Class Object
const gitHub = new GitHub();
// Initialize/Instantiate UI Class Object
const ui = new UI();

// Search Input
const searchUser = document.getElementById("search-user");

// Search Input Evenet Listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP call
    gitHub.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
