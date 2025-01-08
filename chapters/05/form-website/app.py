# app.py
from flask import Flask, render_template, request
from markupsafe import escape
import re

app = Flask(__name__)

def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(pattern, email)

@app.route('/')
@app.route('/')
def home():
    return render_template('form.html', data={}, errors={})


@app.route('/submit', methods=['POST'])
def submit_form():
    errors = {}
    data = {
        'firstname': request.form.get('firstname', '').strip(),
        'lastname': request.form.get('lastname', '').strip(),
        'email': request.form.get('email', '').strip(),
        'country': request.form.get('country', ''),
        'message': request.form.get('message', '').strip(),
        'gender': request.form.get('gender', ''),
        'subjects': request.form.getlist('subject'),
        'honeypot': request.form.get('honeypot', '').strip()
    }

    if data['honeypot']:
        return "Form submission rejected as spam."

    if not data['firstname']:
        errors['firstname'] = "Le prénom est obligatoire."
    if not data['lastname']:
        errors['lastname'] = "Le nom est obligatoire."
    if not is_valid_email(data['email']):
        errors['email'] = "L'email est invalide."
    if not data['message']:
        errors['message'] = "Le message est obligatoire."
    if not data['gender']:
        errors['gender'] = "Le genre est obligatoire."

    if errors:
        return render_template('form.html', errors=errors, data=data)

    return render_template('thank_you.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
