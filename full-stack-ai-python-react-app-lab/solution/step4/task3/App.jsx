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
    setResponse(res.result);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Preschool Activity Generator</h1>
    </div>
  );
}

export default App;
