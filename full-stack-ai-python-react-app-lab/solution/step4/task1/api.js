import axios from "axios";

export async function sendPrompt(prompt) {
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
}
