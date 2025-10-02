import { baseUrl } from "./info.js";
import { getUser } from "./common.js";
import { showAlert } from "./utils.js";

document.querySelector("#frmSignup").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = e.target.txtEmail.value.trim();
    const pwd = e.target.txtPassword.value.trim();
    const repeatPwd = e.target.txtRepeatPassword.value.trim();

    const emailExists = async (email) => {
        const user = await getUser(email);
        console.log(user);

        return user.length > 0;
    };

    const insertUser = (email, pwd) => {
        // Calculate the new ID based on the highest existing one

        return fetch(baseUrl + "/users")
            .then((response) => response.json())
            .then((data) => {
                // Handle the case where data might be an object with users array
                const users = Array.isArray(data) ? data : data.users || [];

                let newID;
                if (users.length === 0) {
                    newID = 1;
                } else {
                    newID = parseInt(users[users.length - 1].id) + 1;
                }

                const userData = {
                    id: String(newID),
                    email: email,
                    pwd: pwd,
                };

                return fetch(baseUrl + "/users", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .catch((error) => {
                        console.log("JSON POST failed, trying form data:", error);
                        return false
                    });
            });
    };

    if (pwd !== repeatPwd) {
        showAlert("The passwords do not match");
    } else {
        const exists = await emailExists(email);
        if (exists) {
            showAlert("The email already exists");
        } else {
            const ret = await insertUser(email, pwd);
            if (ret) {
                showAlert("The user was created successfully");
                const alert = document.querySelector("#alert");
                alert.close();
                e.target.reset();
            } else {
                showAlert("There was a problem while trying to create the user");
            }
        }
    }
});
