from flask import Flask

app = Flask("test")
@app.route("/")
def hello_test():
    return "<p>Test</p>"
