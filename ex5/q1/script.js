function showAbout(){
    const aboutEle = document.querySelector("#about");
    const experienceEle = document.querySelector("#experience");
    const educationEle = document.querySelector("#education");
    const skillsEle = document.querySelector("#skills");

    aboutEle.style.display = "block";
    experienceEle.style.display = "none";
    educationEle.style.display = "none";
    skillsEle.style.display = "none";
}
function showExperience() {
    const aboutEle = document.querySelector("#about");
    const experienceEle = document.querySelector("#experience");
    const educationEle = document.querySelector("#education");
    const skillsEle = document.querySelector("#skills");


    aboutEle.style.display = "none";
    educationEle.style.display = "none";
    skillsEle.style.display = "none";
    experienceEle.style.display = "block";
}

function showEducation() {
    const aboutEle = document.querySelector("#about");
    const experienceEle = document.querySelector("#experience");
    const educationEle = document.querySelector("#education");
    const skillsEle = document.querySelector("#skills");

    aboutEle.style.display = "none";
    experienceEle.style.display = "none";
    skillsEle.style.display = "none";
    educationEle.style.display = "block";
}

function showSkills() {
    const aboutEle = document.querySelector("#about");
    const experienceEle = document.querySelector("#experience");
    const educationEle = document.querySelector("#education");
    const skillsEle = document.querySelector("#skills");

    aboutEle.style.display = "none";
    experienceEle.style.display = "none";
    educationEle.style.display = "none";
    skillsEle.style.display = "block";
}

