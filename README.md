# Datalyzer
#### Video Demo: https://www.youtube.com/watch?v=1LK0QQmN714
#### Description:

Datalyzer is an interactive Flask web application designed to enhance the learning experience of computer science students, with a focus on data structures. This project, created as part of my journey through CS50, showcases frontend and backend development skills.

### Key Features:

1. **Interactive Data Structures:** Allows users to interactively explore data structures such as stacks, queues, and trees. This hands-on approach aids in understanding the operations and behaviors of these structures.

2. **Curated Resources List:** Provides a compilation of educational resources to further understand data structures. This list is a valuable tool for extending learning beyond the interactive elements.

3. **Data Structures Quiz:** An interactive quiz section to test and reinforce the understanding of data structures.

### Technical Overview

The application is built with Flask, HTML, CSS, and JavaScript, creating a responsive user interface. While initially planned, the application currently does not implement a backend database. This choice was made due to challenges encountered in integrating and managing database operations seamlessly with the frontend.

### Challenges Faced:

One significant challenge in the development of Datalyzer was implementing the user-submitted resources feature. The initial plan was to allow users to submit resources, which would be stored and displayed from a database. However, difficulties arose in the integration of database operations with Flask and the frontend interface. Issues included:

- **Data Persistence:** Without a database, persisting user submissions across sessions proved to be complex.
- **Frontend-Backend Integration:** Encountered challenges in seamlessly connecting the frontend form submissions with a backend database.
- **User Interface:** Struggled to maintain a user-friendly interface while integrating dynamic content updates.

These challenges led to the decision not to use a database for this version of the project. Instead, I focused on refining the static components and ensuring a smooth user experience.

### Learning Outcomes:

Despite the challenges, this project provided valuable lessons in web development, particularly in understanding the complexities of full-stack development and the importance of feature scoping and project management.

### How to Run

To run Datalyzer:
- Clone the repository: `git clone https://github.com/Bryan-Webifi-dev/Datalyzer.git`
- Install required packages: `pip install -r requirements.txt`
- Run the application: `python app.py`
- Access the app in a web browser at `localhost:5000`.

### Conclusion

Datalyzer, while not fully realizing the initial vision of dynamic user interactions, stands as a testament to the learning process and the iterative nature of software development. It represents a significant step in my coding journey, embodying the core principles of problem-solving and perseverance I learned in CS50.

### Future Directions

Looking forward, I plan to revisit the challenges faced in this project, particularly integrating a database to manage user submissions, to further enhance Datalyzer’s capabilities.
