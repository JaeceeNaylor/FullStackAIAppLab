import { useState } from 'react';
import { sendPrompt } from './api';

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Preschool Activity Generator</h1>
    </div>
  );
}

export default App;
