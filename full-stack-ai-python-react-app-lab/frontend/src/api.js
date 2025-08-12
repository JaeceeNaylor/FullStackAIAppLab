import axios from "axios";

export async function sendPrompt(prompt) {
  try {
    const res = await axios.post("http://localhost:8000/analyze", { prompt });
    return res.data;
  } catch (error) {
    return { error: error.message };
  }
}
