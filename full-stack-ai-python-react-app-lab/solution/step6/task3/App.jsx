import { useState } from 'react';
import { sendPrompt } from './api';

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendPrompt(input);
    setLoading(false);
    setResponse(res.result || res.error);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Preschool Activity Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter age and interest (e.g. 3 years old, animals)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "60%" }}
        />
        <button type="submit">Submit</button>
      </form>
      {loading ? <p>Loading...</p> : <p>{response}</p>}s
    </div>
  );
}

export default App;
