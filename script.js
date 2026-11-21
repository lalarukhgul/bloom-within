
// ===================================
// 1. SELECT HTML ELEMENTS
// ===================================

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const questionCount = document.getElementById("question-count");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");


// ===================================
// 2. FLOWER INFORMATION
// ===================================

const flowers = {

    lavender: {
        name: "Lavender 🪻",
        image: "images/lavender.jpg",
        description:
            "You are peaceful, thoughtful and quietly beautiful. You appreciate little things, enjoy peaceful moments and bring calm wherever you go."
    },

    sunflower: {
        name: "Sunflower 🌻",
        image: "images/sunflower.jpg",
        description:
            "You are cheerful, energetic and full of positive energy. You brighten people's days and always try to find a little sunshine in every situation."
    },

    tulip: {
        name: "Tulip 🌷",
        image: "images/tulip.jpg",
        description:
            "You are sweet, caring and warm-hearted. You value genuine connections and make people feel loved through your thoughtful actions."
    },

    daisy: {
        name: "Daisy 🌼",
        image: "images/daisy.jpg",
        description:
            "You are gentle, simple and naturally charming. You find happiness in small moments and believe that life's simplest things are often the most beautiful."
    },

    peony: {
        name: "Peony 🌸",
        image: "images/peony.jpg",
        description:
            "You are creative, romantic and full of imagination. You see beauty in details and express yourself through your unique ideas and emotions."
    }

};


// ===================================
// 3. QUIZ QUESTIONS
// ===================================

const questions = [

    {
        question: "How would you describe yourself?",
        options: [
            { text: "Quiet and thoughtful", flower: "lavender" },
            { text: "Happy and energetic", flower: "sunflower" },
            { text: "Sweet and caring", flower: "tulip" },
            { text: "Simple and gentle", flower: "daisy" },
            { text: "Creative and emotional", flower: "peony" }
        ]
    },

    {
        question: "What's your ideal weekend?",
        options: [
            { text: "Reading a book in peace", flower: "lavender" },
            { text: "Exploring somewhere new", flower: "sunflower" },
            { text: "Spending time with loved ones", flower: "tulip" },
            { text: "Enjoying a quiet day at home", flower: "daisy" },
            { text: "Painting or creating something", flower: "peony" }
        ]
    },

    {
        question: "Choose your dream place.",
        options: [
            { text: "A peaceful lavender garden", flower: "lavender" },
            { text: "A sunny flower field", flower: "sunflower" },
            { text: "A cozy little cottage", flower: "tulip" },
            { text: "A quiet garden full of daisies", flower: "daisy" },
            { text: "A beautiful art studio", flower: "peony" }
        ]
    },

    {
        question: "What makes you happiest?",
        options: [
            { text: "Having time for myself", flower: "lavender" },
            { text: "Trying new experiences", flower: "sunflower" },
            { text: "Making someone smile", flower: "tulip" },
            { text: "Enjoying little things", flower: "daisy" },
            { text: "Expressing my creativity", flower: "peony" }
        ]
    },

    {
        question: "How do you handle a difficult day?",
        options: [
            { text: "I spend some time alone", flower: "lavender" },
            { text: "I stay positive and keep going", flower: "sunflower" },
            { text: "I talk to someone I trust", flower: "tulip" },
            { text: "I take things slowly", flower: "daisy" },
            { text: "I express my feelings creatively", flower: "peony" }
        ]
    },

    {
        question: "Choose a perfect gift.",
        options: [
            { text: "A beautiful journal", flower: "lavender" },
            { text: "A surprise adventure", flower: "sunflower" },
            { text: "A handwritten love letter", flower: "tulip" },
            { text: "A little bunch of flowers", flower: "daisy" },
            { text: "Art supplies or something handmade", flower: "peony" }
        ]
    },

    {
        question: "What would your friends say about you?",
        options: [
            { text: "You are calm and understanding", flower: "lavender" },
            { text: "You bring positive energy", flower: "sunflower" },
            { text: "You are always there for others", flower: "tulip" },
            { text: "You are easygoing and genuine", flower: "daisy" },
            { text: "You have a creative mind", flower: "peony" }
        ]
    },

    {
        question: "Which weather do you love?",
        options: [
            { text: "A peaceful rainy afternoon", flower: "lavender" },
            { text: "A bright sunny morning", flower: "sunflower" },
            { text: "A warm spring day", flower: "tulip" },
            { text: "A soft cloudy day", flower: "daisy" },
            { text: "A dreamy evening sunset", flower: "peony" }
        ]
    },

    {
        question: "What is most important to you?",
        options: [
            { text: "Inner peace", flower: "lavender" },
            { text: "Freedom and happiness", flower: "sunflower" },
            { text: "Love and connection", flower: "tulip" },
            { text: "Simplicity and kindness", flower: "daisy" },
            { text: "Creativity and self-expression", flower: "peony" }
        ]
    },

    {
        question: "Choose a little life motto.",
        options: [
            { text: "Grow quietly and beautifully", flower: "lavender" },
            { text: "Always turn towards the sunshine", flower: "sunflower" },
            { text: "Spread love wherever you go", flower: "tulip" },
            { text: "Find beauty in little things", flower: "daisy" },
            { text: "Bloom in your own unique way", flower: "peony" }
        ]
    }

];


// ===================================
// 4. QUIZ VARIABLES
// ===================================

let currentQuestion = 0;

let scores = {
    lavender: 0,
    sunflower: 0,
    tulip: 0,
    daisy: 0,
    peony: 0
};


// ===================================
// 5. START THE QUIZ
// ===================================

startBtn.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();

});


// ===================================
// 6. DISPLAY QUESTIONS
// ===================================

function showQuestion() {

    const current = questions[currentQuestion];

    questionText.textContent = current.question;

    questionCount.textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width = progress + "%";

    progressText.textContent =
        Math.round(progress) + "% completed";

    optionsContainer.innerHTML = "";

    current.options.forEach(function (option) {

        const button = document.createElement("button");

        button.classList.add("option-btn");

        button.textContent = option.text;

        button.addEventListener("click", function () {

            selectAnswer(option.flower);

        });

        optionsContainer.appendChild(button);

    });

}


// ===================================
// 7. SAVE ANSWER AND MOVE FORWARD
// ===================================

function selectAnswer(flower) {

    scores[flower]++;

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}


// ===================================
// 8. CALCULATE THE FINAL RESULT
// ===================================

function showResult() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let winningFlower = "lavender";

    for (const flower in scores) {

        if (scores[flower] > scores[winningFlower]) {

            winningFlower = flower;

        }

    }

    const result = flowers[winningFlower];

    resultImage.src = result.image;
    resultImage.alt = result.name;

    resultName.textContent = result.name;

    resultDescription.textContent = result.description;

}


// ===================================
// 9. RESTART THE QUIZ
// ===================================

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;

    scores = {
        lavender: 0,
        sunflower: 0,
        tulip: 0,
        daisy: 0,
        peony: 0
    };

    resultScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");

    progressFill.style.width = "10%";

});
