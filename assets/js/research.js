/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    
    {
        title : "Fundamentals of NumPy & PyTorch",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup1",
        image : "assets/images/research-page/pynum.gif",
        citation: {
            vancouver: "PyTorch is a deep learning focused library while NumPy is for scientific computing."
        },
        
        link: "numpypytorch.html",
    },
    
    

    {
        title : " Loss Functions using pytorch",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup4",
        image : "https://miro.medium.com/max/616/1*RGd-YizZJfgXW3UmDZmbRg.png",
        citation: {
            vancouver: "Loss functions are the mistakes done by machines if the prediction of the machine learning algorithm is further from the ground truth that means the Loss function is big, and now machines can improve their outputs by decreasing that loss function."
        },
        
        link: "loss.html",
    },
    
    {
        title : " Activation Functions in Neural Netwoks",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup5",
        image : "https://miro.medium.com/max/640/1*xYCVODGB7RwJ9RynebB2qw.gif",
        citation: {
            vancouver: "Activation function decides, whether a neuron should be activated or not by calculating weighted sum and further adding bias with it. The purpose of the activation function is to introduce non-linearity into the output of a neuron."
        },
        
        link: "activation.html",
    },
    {
        title : "Softmax for Neural Network",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup3",
        image : "data:image/png;base64,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",
        citation: {
            vancouver: "Softmax is a mathematical function that converts a vector of numbers into a vector of probabilities, where the probabilities of each value are proportional to the relative scale of each value in the vector."
        },
        
        link: "softmax.html",
    },

    
    {
        title : "Batch normalization",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup6",
        image : "https://miro.medium.com/max/1838/1*rAMRE5TcYSXzKWTHdIpQog.png",
        citation: {
            vancouver: "Batch normalization is a technique for training very deep neural networks that normalizes the contributions to a layer for every mini-batch. This has the impact of settling the learning process and drastically decreasing the number of training epochs required to train deep neural networks."
        },
        
        link: "batch.html",
    },
    {
        title : "Introduction to Dropout",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup7",
        image : "https://miro.medium.com/max/1452/1*nty4xtm9UBuWLqxHVaamjw.png",
        citation: {
            vancouver: "Dropout is a regularization technique for reducing overfitting in artificial neural networks by preventing complex co-adaptations on training data. It is an efficient way of performing model averaging with neural networks. "
        },
        
        link: "Dropout.html",
    },
    {
        title : "Gradient Descent ",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup8",
        image : "https://miro.medium.com/max/2048/1*rp76FYNMOhZjVoBeoD6PQA.gif",
        citation: {
            vancouver: "Gradient Descent is an optimization algorithm for finding a local minimum of a differentiable function. Gradient descent is simply used to find the values of a function's parameters (coefficients) that minimize a cost function as far as possible."
        },
        
        link: "gradient.html",
    },
    {
        title : "Convolutional Neural Networks",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup9",
        image : "https://miro.medium.com/max/1280/1*h01T_cugn22R2zbKw5a8hA.gif",
        citation: {
            vancouver: "A Convolutional Neural Network (ConvNet/CNN) is a Deep Learning algorithm which can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image and be able to differentiate one from the other."
        },
        
        link: "cnn.html",
    },
    {
        title : "Recurrent Neural Network",
        authors : "",
        conferences : "",
        researchYr : "",
        citebox : "popup10",
        image : "https://www.simplilearn.com/ice9/free_resources_article_thumb/Network_framework.gif",
        citation: {
            vancouver: "Recurrent Neural Network(RNN) are a type of Neural Network where the output from previous step are fed as input to the current step"
        },
        
        link: "rnn.html",
    },
    
    
   
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, link}) =>
        (output +=`
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <a href="${link}" class="button button-accent button-small text-right button-abstract " type="button">
                            MORE CONTENT
                        </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    
                    
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

