const URL = "https://todo-app-7yv2.onrender.com" || "http://localhost:4000";
// const URL = "http://localhost:4000";

export const loginCall = async (email, password) => {
  try {
    const response = await fetch(`${URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result = await response.json();
    console.log("Result from loginCall: ", result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};