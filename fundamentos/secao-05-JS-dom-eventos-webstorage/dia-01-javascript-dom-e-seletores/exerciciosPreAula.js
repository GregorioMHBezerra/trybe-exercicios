function headerContainer() {
  const header = document.getElementById('header-container');
  header.style.backgroundColor = '#00B069'; 
}
headerContainer();

function bodyContainer() {
  const bodyContainer = document.getElementById('container');
  bodyContainer.style.backgroundColor = '#F3F3F3';
}
bodyContainer();

function footerContainer() {
  const footerContainer = document.getElementById('footer-container');
  footerContainer.style.backgroundColor = '#003533';
}
footerContainer();

function emergencyTasks() {
  const sectionEmergency = document.getElementsByClassName('emergency-tasks');
  sectionEmergency[0].style.backgroundColor = '#FF9F84';
}
emergencyTasks();

function noEmergencyTasks() {
  const sectionNoEmergency = document.getElementsByClassName('no-emergency-tasks');
  sectionNoEmergency[0].style.backgroundColor = '#F9DB5E';
}
noEmergencyTasks();

function backgroundColorEmergencyh3() {
  const backgroundColorEmergencyh3 = document.querySelectorAll('.emergency-tasks div h3');
  for (let index = 0; index < backgroundColorEmergencyh3.length; index += 1) {
    backgroundColorEmergencyh3[index].style.backgroundColor = '#A500F3';
  }
}
backgroundColorEmergencyh3();

function backgroundColorNoEmergencyh3() {
  const backgroundColorNoEmergencyh3 = document.querySelectorAll('.no-emergency-tasks div h3');
  for (let index = 0; index < backgroundColorNoEmergencyh3.length; index += 1) {
    backgroundColorNoEmergencyh3[index].style.backgroundColor = '#232525';
  }
}
backgroundColorNoEmergencyh3();


// #A500F3 roxo; #FF9F84 laranja; #F9DB5E amarelo; #232525 preto; #003533 verde escuro; #F3F3F3 branco;