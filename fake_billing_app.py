from flask import Flask, request, render_template_string, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "demo-secret-key"

# Dummy credentials
USERNAME = "demo"
PASSWORD = "password123"

# Dummy billing data
FAKE_BILL = "$1,234.56"

# Templates
login_page = """
<!DOCTYPE html>
<html><body>
  <h2>Login</h2>
  <form method="post">
    <input name="username" placeholder="Username"><br>
    <input name="password" type="password" placeholder="Password"><br>
    <button type="submit">Login</button>
  </form>
</body></html>
"""

dashboard_page = f"""
<!DOCTYPE html>
<html><body>
  <h2>Welcome to the Billing Dashboard</h2>
  <p>Your current AWS bill is: <span class='billing-amount'>{FAKE_BILL}</span></p>
</body></html>
"""

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        if request.form["username"] == USERNAME and request.form["password"] == PASSWORD:
            session["user"] = USERNAME
            return redirect(url_for("dashboard"))
    return render_template_string(login_page)

@app.route("/dashboard")
def dashboard():
    if "user" not in session:
        return redirect(url_for("login"))
    return render_template_string(dashboard_page)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
