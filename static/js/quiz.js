document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('dataStructuresQuiz');
    let currentQuestionNumber = 1;

    function showNextQuestion() {
        let currentQuestion = document.getElementById('question' + currentQuestionNumber);
        let nextQuestion = document.getElementById('question' + (currentQuestionNumber + 1));
        const totalQuestions = 12; // Update this with the total number of questions
    
        // Slide out the current question
        currentQuestion.classList.add('slide-out');
    
        // Wait for the slide-out animation to finish
        setTimeout(function() {
            currentQuestion.style.display = 'none';
            currentQuestion.classList.remove('slide-out');
    
            // Show and slide in the next question
            if (nextQuestion) {
                nextQuestion.style.display = 'block';
                nextQuestion.classList.add('slide-in');
    
                // Remove slide-in class to reset the animation
                setTimeout(() => nextQuestion.classList.remove('slide-in'), 500);
    
                // Update the question counter for the next question
                let questionCounter = document.getElementById('questionCounter');
                questionCounter.textContent = `${currentQuestionNumber + 1}/${totalQuestions}`;
            } else {
                document.getElementById('submitQuiz').style.display = 'block';
            }
    
            currentQuestionNumber++;
        }, 500);
    }    

    // Add event listeners to all 'Next' buttons
    const nextButtons = quizForm.querySelectorAll('button[type="button"]');
    nextButtons.forEach(button => {
        button.addEventListener('click', showNextQuestion);
    });

    // Function to calculate and show the quiz score
    function calculateAndShowScore() {
        const questions = document.querySelectorAll('.quiz-question');
        let correctAnswers = 0;
        let incorrectFeedback = '';
        let topicCount = { 'Stack': 0, 'Queue': 0, 'Tree': 0, 'Graph': 0, 'LinkedList': 0 };

        questions.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="question${index + 1}"]:checked`);
            const topic = question.getAttribute('data-topic');

            if (selectedAnswer && selectedAnswer.value === 'correct') {
                correctAnswers++;
            } else {
                incorrectFeedback += `<p>${index + 1}. ${question.querySelector('label').textContent} <strong>Your answer is incorrect.</strong></p>`;
                topicCount[topic] ? topicCount[topic]++ : topicCount[topic] = 1;
            }
        });

        const scorePercentage = (correctAnswers / questions.length) * 100;
        const mostIncorrectTopic = Object.keys(topicCount).reduce((a, b) => topicCount[a] > topicCount[b] ? a : b);

        scoreModalContent.innerHTML = `
            <p>Your score: ${scorePercentage.toFixed(2)}%</p>
            ${incorrectFeedback}
            <p>Suggested Resource: <a href="/resources">Learn more about ${mostIncorrectTopic}</a></p>
        `;
        scoreModal.style.display = 'block';
    }

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateAndShowScore();
    });

    const closeButton = document.getElementsByClassName('close')[0];
    closeButton.onclick = function() {
        scoreModal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === scoreModal) {
            scoreModal.style.display = 'none';
        }
    };

    // Initial setup to show the first question
    document.getElementById('question1').style.display = 'block';
});
