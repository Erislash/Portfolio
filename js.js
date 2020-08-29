let navbar = document.querySelector('#navbar'); //navigation bar with sections links
let letsGo = document.querySelector('#lets-go'); //button that shows the navbar

letsGo.addEventListener('click', function(){
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";     

});



//Back Button & Nav Controller
let sectionLinks = document.querySelectorAll('.section-link');
let backButton =  document.querySelector('#back-button');

let welcomeSec = document.querySelector('#welcome-section');
let projectSec = document.querySelector('#projects');
let skillsSec = document.querySelector('#skills');



sectionLinks.forEach(sectionLink => {
    sectionLink.addEventListener('click', function(){
        let linkAtribute = sectionLink.getAttribute('id');

        console.log(linkAtribute);

        switch(linkAtribute){
            case 'main-link':
                backButton.style.visibility = "hidden";
                welcomeSec.style.visibility = "visible";
                projectSec.style.visibility = "hidden";
                skillsSec.style.visibility = "hidden";

                navbar.style.opacity = "0";   
                navbar.style.visibility = "hidden";

                break;
            case 'projects-link':
                backButton.style.visibility = "visible";
                welcomeSec.style.visibility = "hidden";
                projectSec.style.visibility = "visible";
                skillsSec.style.visibility = "hidden";

                navbar.style.opacity = "0";   
                navbar.style.visibility = "hidden";


                break;

            case 'skills-link':
                backButton.style.visibility = "visible";
                welcomeSec.style.visibility = "hidden";
                projectSec.style.visibility = "hidden";
                skillsSec.style.display = "flex";
                skillsSec.style.visibility = "visible";

                navbar.style.opacity = "0";   
                navbar.style.visibility = "hidden";


                break;
        }
        
    });
}); 

backButton.addEventListener('click', function(){
    navbar.style.opacity = "1";   
    navbar.style.visibility = "visible";

    backButton.style.visibility = "hidden";
    welcomeSec.style.visibility = "hidden";
    projectSec.style.visibility = "hidden";

    skillsSec.style.display = "none";
    skillsSec.style.visibility = "hidden";
});

//Nav Controller






//Projects Slider
let projectSlider = document.querySelector('#project-slider');
let rightSliderBtn = document.querySelector('#right-button-projects');
let leftSliderBtn = document.querySelector('#left-button-projects');
let projectsCount = document.querySelectorAll('.project-tile').length;

let currentIndex = 0;

//If I click the right button the slider will move to the left and I'll be able to see the next project "card"

rightSliderBtn.addEventListener('click', function(){
    currentIndex = ((currentIndex + 1) >= projectsCount) ? 0 : (currentIndex + 1);
    projectSlider.style.transform = `translateX(${currentIndex * -100}%)`;
});


//If I click the left button the slider will move to the right and I'll be able to see the previous project "card"
leftSliderBtn.addEventListener('click', function(){
    currentIndex = ((currentIndex - 1) < 0) ? (projectsCount - 1) : (currentIndex - 1);
    projectSlider.style.transform = `translateX(${currentIndex * -100}%)`;
});
