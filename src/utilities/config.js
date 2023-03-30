export const URL = "https://ai-backend-2p82.onrender.com";
//  export const URL = "http://127.0.0.1:4000";

export const token = localStorage.getItem("token");
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTlmOGUyNzQyMDJjNmQyZjBiMjdiMyIsIm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsInN0YXR1cyI6dHJ1ZSwiZXhwIjoxNjc5NjcxNzYzNCwiaWF0IjoxNjc5NjcxNDAzfQ.4UP0ZLSUJ_N9xGjFGeN0p3V_J_zlXB-OozMcguHzu7I";

export const config = {
  headers: { Authorization: `Bearer ${token}` },
};
