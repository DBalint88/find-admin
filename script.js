const lastNameField = document.getElementById("last-name-field");
const gradeLevelField = document.getElementById("grade-level-field");
const submitButton = document.getElementById("submit-button");

const house = document.getElementById("house");
const admin = document.getElementById("admin");
const psych = document.getElementById("psych");
const social = document.getElementById("social-worker");
const counselor = document.getElementById("counselor");

submitButton.addEventListener("click", function(e) {
    updateInfo(lastNameField.value.toLowerCase(), parseInt(gradeLevelField.value));
})

function updateInfo(lastName, gradeLevel) {
    console.log(lastName + " " + gradeLevel);

    // Handle blank entries
    if (lastName === "" || isNaN(gradeLevel) ) {
        alert("Please enter your last name and grade level.")
        return;
    }

    // Determine the house & admin
    if (gradeLevel == "9") {
        house.innerText="Quinnipiac House";
        admin.innerText="Ms. Melissa Richardson";
    }
    if (gradeLevel != "9" && lastName < "g") {
        house.innerText="Whitney House";
        admin.innerText="Mrs. Lisa Dyer";
    }
    if (gradeLevel != "9" && lastName > "f" && lastName < "n") {
        house.innerText="Sleeping Giant House";
        admin.innerText="Mrs. Tegan Willis";
    }
    if (gradeLevel != "9" && lastName > "n") {
        house.innerText="Washburn House";
        admin.innerText="Mr. Scott Trauner";
    }

    // Determine the Psych & Social
    if (lastName < "des") {
        psych.innerText = "Ms. Susan Barnshaw";
        social.innerText = "Ms. Jodie Chodos";
        console.log("lastName between A and Der");
    }
    if (lastName >= "des" && lastName < "ko") {
        psych.innerText = "Mr. Michael Carter";
        social.innerText = "Ms. Sharon Vance";
        console.log("lastName between Des and Kn");
    }
    if (lastName >= "ko" && lastName < "ree") {
        psych.innerText = "Ms. Judy Campbell";
        social.innerText = "Ms. Kristen Schultz";
    }
    if (lastName >= "ree") {
        psych.innerText = "Ms. Catherine King";
        social.innerText = "Mr. John Hanna";
    }

    // Determine the Counselor
    if (lastName < "brf") {
        counselor.innerText = "Ms. Katherine Rosario";
    }
    if (lastName >= "brf" && lastName < "des") {
        counselor.innerText = "Ms Carlene Scarpati";
    }
    if (lastName >= "des" && lastName < "grf") {
        counselor.innerText = "Ms. Jennifer Tulacro";
    }
    if (lastName >= "grf" && lastName < "ko") {
        counselor.innerText = "Ms. Connie LaFemina";
    }
    if (lastName >= "ko" && lastName < "mis") {
        counselor.innerText = "Ms. Janine Gaffney";
    }
    if (lastName >= "mis" && lastName < "ree") {
        counselor.innerText = "Ms. Tracey Jacobson";
    }
    if (lastName >= "ree" && lastName < "su") {
        counselor.innerText = "Ms. Angela Salerno";
    }
    if (lastName >= "su") {
        counselor.innerText = "Ms. Megan Turski";
    }
}
