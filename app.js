//Instansiate the Github class
const gitHub = new Github();
// Init UI
const ui = new UI();

//Search Input

const searchUser = document.getElementById('searchUser');

//Event Listener

searchUser.addEventListener('keyup', (e) => {
  const userInput = e.target.value;
  if (userInput !== '') {
    //Make http call
    gitHub.getUser(userInput).then((data) => {
      if (data.profile.message === 'Not Found') {
        //Show an alert on UI
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Show the profile in UI
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear the UI
    ui.clearProfile();
  }
});
