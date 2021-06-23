//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Week-1 ",
    cardImage: "assets/images/experience-page/week1.png",
    place: "",
    time: "Prepare the data, Transforming the data, build the model, Train the model, Analyze the model",
    desp: "<li> OOPs Recitation,Fundamentals of NumPy & PyTorch,Combining Data,Mathematical Operations</li> <li>Vectorization, Pre-processing,Recursion,Depth-first search (DFS) with Recursion</li> <li> HW0 p2 :Implementing a Dataset Class, __init__() , __len__(), __getitem__(), collate_fn() </li>  <li> Completed watching video on Introduction to deep learning –1  </li> <li> Recitation 1 lecture: Concepts: Tensors: Math, Linear Algebra and Indexing, CPU and GPU, Neural Network Models, Training, Data Loader, Saving and Loading, verifying that we get the same output </li>",
  },
  {
    title: "Week-2",
    cardImage: "assets/images/experience-page/week2.png",
    place: "",
    time: "",
    desp: "<li>Neural Networks - What can a network represent, Multilayer Perceptron as Universal Boolean Functions, Challenge of Depth, Multilayer Perceptron as Classifiers, Multilayer Perceptron as Continuous Valued Regression</li>  <li>Differentiable Activation Functions</li> <li>Introduction to Derivatives, Gradient, Hessian, Gradient Descent, One-hot (Multi-class Representation), Divergence Function</li> <li>Vector Activation, Vector formulation, Forward Pass, Vector Calculus, Backward Pass, Digit Recognition</li> <li>Recitation 2</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
 
  {
    title: "Make a Difference",
    cardImage: "assets/images/experience-page/mad.png",
    description:
      "Worked as a 'Academic Support Volunteer' for one year",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 500px;width:900px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


