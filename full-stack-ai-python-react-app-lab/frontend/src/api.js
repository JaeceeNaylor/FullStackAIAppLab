import axios from "axios";

export async function sendPrompt(prompt) {
  try {
    const res = await axios.post(
        "/api/analyze",
        { prompt },
        {
            headers: {
            'Content-Type': 'application/json',
            },
        }
  );
    return res.data;
  } catch (error) {
    return { error: error.message };
  }
}
