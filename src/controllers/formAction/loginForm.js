/**
 * 
 * @param { Object } userData
 * @example userData = {"id": "userId", "password": "userPassword"}
 */
export function loginForm(userData) {
    try {
        fetch('/api/login', {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userData})
        }).then((response) => {
            console.log(response)
        });
    } catch (e) {
        console.log("Error");
    }

    return false;
}