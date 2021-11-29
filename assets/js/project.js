/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  
  {
    title: "MyTorch",
    cardImage: "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/02/Comp-1.gif",
    description: "Developed my own custom deep learning library,called MyTorch. It will act similar to PyTorch.",
    tagimg: "https://upload.wikimedia.org/wikipedia/commons/9/99/Neural_network_example.svg",
    Previewlink: "",
    Githublink: "https://github.com/mahithachodavarapu/Mytorch",
  },
  
  
  {
    title: "Frame Level Classification of Speech",
    cardImage: "https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/submissions/19933/versions/1/screenshot.gif",
    description: "",
    tagimg: "https://www.mathworks.com/matlabcentral/mlc-downloads/downloads/submissions/19933/versions/1/screenshot.gif",
    Previewlink: "",
    Githublink: "https://github.com/mahithachodavarapu/Phoneme-Labeling",
  },
  {
    title: "Face Classification & Verification using Convolutional Neural Networks",
    cardImage: "https://miro.medium.com/max/625/1*YF4KdQE-RadFtNa6n66wdg.gif",
    description: "",
    tagimg: "https://miro.medium.com/max/625/1*YF4KdQE-RadFtNa6n66wdg.gif",
    Previewlink: "",
    Githublink: "https://github.com/mahithachodavarapu/-Face-Recognition--Classification-and-Verfication-",
  },
  {
    title: "Sliding Image Puzzle Game",
    cardImage: "https://miro.medium.com/max/875/1*W7jg4GmEjGBypd9WPktasQ.gif",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://miro.medium.com/max/875/1*W7jg4GmEjGBypd9WPktasQ.gif",
  },
  
  {
    title: " A Secure Approach for Data Hiding Using Visual Cryptography",
    cardImage: "assets/images/project-page/visual.PNG",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/mahithachodavarapu/A-Secure-Approach-for-Data-Hiding-Using-Visual-Cryptography",
  },
  {
    title: "User Vitality Ranking and Prediction in Social Networking Services",
    cardImage: "assets/images/project-page/user.png",
    description: "",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/mahithachodavarapu/User-Vitality-Ranking-and-Prediction-in-Social-Networking-Services",
  },
  
  
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) => {
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            
            </div>
        
        <ul class="menu-content">
              <h6>${description}</h6>
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
              
            </ul>
            
          </div>
          
        </div>
      </div>
    </div>`)
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
