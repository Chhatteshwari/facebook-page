
const users = [
    { username: "user1", email: "user1@example.com", password: "password1" },
    { username: "user2", email: "user2@example.com", password: "password2" },
];

const registrationForm = document.getElementById("registration-form");
const loginForm = document.getElementById("login-form");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    
    console.log(`Registered: Username - ${username}, Email - ${email}, Password - ${password}`);
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        console.log(`Logged in as ${user.username}`);
    } else {
        console.log("Invalid credentials");
    }
});
