# Datalyzer
#### Video Demo: https://www.youtube.com/watch?v=1LK0QQmN714
#### Description:

Datalyzer is an interactive Flask web application designed to enhance the learning experience of computer science students, specifically those exploring data structures. This application is a culmination of the skills and knowledge I acquired in CS50, showcasing both frontend and backend development.

The application is structured into several key components:

1. **Interactive Data Structures:** Users can interact with various data structures such as stacks, queues, and trees. This section allows users to perform operations like push, pop, or enqueue and see these actions' effects in real-time.

2. **Curated Resources List:** Datalyzer provides a comprehensive list of resources including articles, tutorials, and videos to help users deepen their understanding of data structures. This carefully selected collection serves as an educational guide for those who wish to extend their learning beyond the classroom.

3. **Data Structures Quiz:** To reinforce learning and test understanding, Datalyzer includes a quiz section. This interactive quiz poses questions on various data structures, offering users a chance to assess their knowledge and learn in a fun, engaging way.

### Technical Overview

The application is built using Flask, a Python web framework, which handles the server-side operations. The frontend is developed with HTML, CSS, and JavaScript, creating an interactive and responsive user interface. 

### Files in the Project

- `app.py`: The Flask application's main file. It handles routing, interactions with the database, and rendering templates.
- `models.py`: Contains the SQLAlchemy models for the application's data structures.
- `resources.js`: A JavaScript file managing the frontend logic for form submissions and interactive elements.
- `templates/`: This directory contains HTML files for various components of the application, including the main page, resource list, and quiz sections.
- `static/`: Includes CSS for styling and additional JavaScript files for frontend interactivity.

### Design Choices

When designing Datalyzer, I focused on creating an application that was not only functional but also intuitive and user-friendly. Key design choices included using modal forms for submissions to keep the user on the same page and employing AJAX for seamless interaction without needing to reload the page. The choice of Flask as a backend framework was driven by its simplicity and Python's powerful data-handling capabilities.

### Conclusion

Datalyzer represents a significant personal achievement in my journey of learning computer science. It embodies the principles of CS50 - a blend of theory and practice. I hope it serves as a useful tool for fellow learners and a testament to the knowledge and skills gained in this course.

### How to Run

To run Datalyzer, clone the repository and install the required Python packages. Ensure you have Flask and SQLAlchemy installed. Run `app.py` to start the Flask server and access the application in your web browser at `localhost:5000`.
