'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  const isOperator = (val) => ['+', '-', '*', '/'].includes(val);

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        type="text"
        value={input}
        readOnly
        placeholder="0"
      />
      <div style={styles.buttons}>
        {['7', '8', '9', '/'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              ...styles.button,
              backgroundColor: isOperator(btn) ? '#ccc' : '#b35b00',
              color: 'black',
            }}
          >
            {btn}
          </button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              ...styles.button,
              backgroundColor: isOperator(btn) ? '#ccc' : '#b35b00',
              color: 'black',
            }}
          >
            {btn}
          </button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={{
              ...styles.button,
              backgroundColor: isOperator(btn) ? '#ccc' : '#b35b00',
              color: 'black',
            }}
          >
            {btn}
          </button>
        ))}
        {['0', '.', 'C', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === 'C' ? handleClear() : handleClick(btn))}
            style={{
              ...styles.button,
              backgroundColor: isOperator(btn) ? '#ccc' : '#b35b00',
              color: 'black',
            }}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleCalculate}
          style={{
            ...styles.button,
            gridColumn: 'span 4',
            backgroundColor: '#b35b00',
            color: 'black',
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 320,
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    width: '100%',
    height: 60,
    fontSize: 36,
    marginBottom: 15,
    padding: '0 15px',
    textAlign: 'right',
    borderRadius: 6,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: 'black',
    fontWeight: 'bold', // bold result text
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 10,
  },
  button: {
    fontSize: 20,
    padding: '15px 0',
    borderRadius: 4,
    border: '1px solid #999',
    cursor: 'pointer',
  },
};
