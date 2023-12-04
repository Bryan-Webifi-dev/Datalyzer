from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/stack")
def stack():
    return render_template("stack.html")

@app.route("/queue")
def queue():
    return render_template("queue.html")

@app.route("/tree")
def tree():
    return render_template("tree.html")

@app.route("/graph")
def graph():
    return render_template("graph.html")

@app.route("/linkedList")
def linkedList():
    return render_template("linkedList.html")

@app.route("/resources")
def resources():
    return render_template("resources.html")

if __name__ == "__main__":
    app.run(debug=True)
