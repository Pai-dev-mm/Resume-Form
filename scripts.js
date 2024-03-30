// personal contact input
const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const addressInput = document.getElementById("addressInput");
const file = document.getElementById("file");

// social input select with id
const linkedinInput = document.getElementById("linkedinInput");
const gitInput = document.getElementById("gitInput");
const twitterInput = document.getElementById("twitterInput");
const gmailInput = document.getElementById("gmailInput");

// professional inform input select with id
const objectiveInput = document.getElementById("objectiveInput");
const expInput = document.getElementById("expInput");
const acadamicInput = document.getElementById("acadamicInput");

// profile photo
const selectPhoto = document.querySelector(".select-photo");
const label = document.querySelector(".labelForFile");

const testImg = document.querySelector(".testImg");
const button = document.querySelector(".generate");

// person data
let data = {};

// This is for all input value
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  data.name = nameInput.value;
  data.contactNumber = numberInput.value;
  data.address = addressInput.value;
  data.linkedin = linkedinInput.value;
  data.git = gitInput.value;
  data.twitter = twitterInput.value;
  data.objective = objectiveInput.value;
  data.experience = expInput.value;
  data.qualification = acadamicInput.value;
  data.gmail = gmailInput.value;

  // Image File save in data Object as URL
  let fileReader = new FileReader();
  fileReader.onload = function (event) {
    let imgContent = event.target.result;
    data.image = imgContent;
    localStorage.setItem("fileData", imgContent);
  };
  fileReader.readAsDataURL(file.files[0]);

  // check All input is empty
  let abc = document.getElementsByTagName("input");

  for (let i = 0; i < abc.length; i++) {
    const element = abc[i];
    if (element.value == "") {
      button.style.backgroundColor = "red";
    } else {
      window.location.href = "./ResumeForm/resumeForm.html";
      button.style.backgroundColor = "#0C356A";
    }
  }
  localStorage.setItem("new", JSON.stringify(data));
  console.log(data);
});

selectPhoto.addEventListener("mousemove", (e) => {
  // const localImageData = JSON.parse(localStorage.getItem("fileData"));
  if (file.files.length > 0) {
    label.innerText = file.files[0].name;
  }
});

/*
// add skill button
const addSkill = document.querySelector(".add");
const skillObject = [];
let skillId = -1;

addSkill.addEventListener("click", (e) => {
  e.preventDefault();

  // skill add value from skill input
  const newV = document.getElementById("skillInput");
  skillObject.push(newV.value);
  skillId += 1;

  // store skill text as pills style
  const showSkillContainer = document.querySelector(".showSkill");
  const createSpan = document.createElement("span");
  const skillBox = document.createElement("div");
  const createDeleteCircle = document.createElement("b");

  if (newV.value === "") {
    return;
  } else {
    createSpan.innerText = newV.value;
    createDeleteCircle.innerText = "X";
    createDeleteCircle.classList.add("crossSign");
    createDeleteCircle.style.cursor = "pointer";
    skillBox.id = skillId;
    createDeleteCircle.id = skillId;
    skillBox.append(createSpan, createDeleteCircle);
    showSkillContainer.append(skillBox);
    skillBox.classList.add("skillBox");
    newV.value = "";
    localStorage.setItem("skills", JSON.stringify(skillObject));
  }

  createDeleteCircle.addEventListener("click", (e) => {
    let localSkillData = JSON.parse(localStorage.getItem("skills"));
    if (skillBox.id === e.target.id) {
      var newSkillForLocalStorage = localSkillData.filter(
        (d) => d !== skillBox.firstChild.innerText
      );
      skillBox.remove();
    }
    localStorage.setItem("skills", JSON.stringify(newSkillForLocalStorage));
  });
});
*/
/*
function addNew(e) {
  e.style.borderRadius = "50%";
  e.style.display = "flex";
  e.style.alignItems = "center";
  e.style.justifyContent = "center";
  e.style.border = "1px solid black";
  e.style.width = "30px";
  e.style.height = "30px";
  e.style.position = "absolute";
  e.style.fontSize = "15px";
  e.style.top = "-43px";
  e.style.left = "37px";
  e.textContent = "X";
}

/* 
 This is source of file insert in image element
 let abc = file.files[0]

    let fileReader = new FileReader()
    fileReader.onload = function (event){
        testImg.src = event.target.result
    }
    fileReader.readAsDataURL(abc)

*/

/*
    let abc = document.getElementsByTagName('input')

    for (let i = 0; i < abc.length; i++) {
        const element = abc[i];
        if(element.value == ''){
            
            element.style.border = "1px solid red"
        }else{
            
            
            element.style.border = "1px solid #FFC436"
            
        }
    }
*/
