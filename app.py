from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/stack")
def stack():
    # You'll add more logic here later for handling stack operations
    return render_template("stack.html")

@app.route("/queue")
def queue():
    # Similarly, add logic for queue operations
    return render_template("queue.html")

# Add additional routes for other data structures like linked lists, trees, graphs, etc.

if __name__ == "__main__":
    app.run(debug=True)
