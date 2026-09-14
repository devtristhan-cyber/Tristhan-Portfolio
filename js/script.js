// CONST
const siteName = "Tristhan's Portfolio";


// FUNCTION
function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    if (menu) {

        menu.classList.toggle("open");

    }

}


// FUNCTION
function portfolioDemo() {

    // LET
    let visitor = "Guest";

    // CONST
    const requiredConcepts = [
        "let",
        "const",
        "if/else",
        "for",
        "while",
        "function"
    ];


    // IF / ELSE

    let message;

    if (visitor === "Guest") {

        message =
            "Welcome, Guest! ";

    } else {

        message =
            "Welcome back, " + visitor + "! ";

    }


    // FOR LOOP

    let forResult = "";

    for (
        let i = 0;
        i < requiredConcepts.length;
        i++
    ) {

        forResult +=
            requiredConcepts[i];

        if (
            i < requiredConcepts.length - 1
        ) {

            forResult += ", ";

        }

    }


    // WHILE LOOP

    let count = 0;

    let whileResult = 0;

    while (count < 3) {

        whileResult += count + 1;

        count++;

    }


    const output =
        document.getElementById("demoOutput");


    if (output) {

        output.textContent =
            message +
            "Concepts used: " +
            forResult +
            ". While-loop total: " +
            whileResult +
            ".";

    }

}


// CONTACT FORM FUNCTION

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const formMessage =
        document.getElementById("formMessage");


    if (name.trim() !== "") {

        formMessage.textContent =
            "Thank you, " +
            name +
            "! Your message has been prepared successfully.";

        event.target.reset();

    } else {

        formMessage.textContent =
            "Please enter your name.";

    }

}


// CONSOLE MESSAGE

console.log(
    siteName +
    " loaded successfully."
);