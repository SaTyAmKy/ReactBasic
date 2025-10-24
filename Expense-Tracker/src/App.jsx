import { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const handleAdd = () => {
    if (text.trim() === "" || amount.trim() === "") return;
    const newTransaction = {
      text,
      amount: parseFloat(amount),

    }
    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  }
  const income = transactions.filter((t) => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
  const balance = income + expense;
  function handleDelete(id) {
    setTransactions(transactions.filter((t) => t.id !== id));
  }

  return (
    <>
      <div className="container">
        <h1>Add Transaction</h1>
        <div className="input-box">
          <input type="text" placeholder='Enter text ...' value={text} onChange={(e) => setText(e.target.value)} />
          <input type="Number" placeholder='Enter number ...' value={amount} onChange={(e) => setAmount(e.target.value)} />
          <button onClick={handleAdd}>Add</button>
        </div>
        <h2>Summary</h2>
        <div className="summary-box">
          <p>Balance : {balance.toFixed(2)} </p>
          <p>Income : {income.toFixed(2)}</p>
          <p>Expense : {expense.toFixed(2)}</p>
        </div>
        <ul>
          {transactions.map((t) => (
            <li
              key={t.id}
              style={{
                color: t.amount > 0 ? "green" : "red",
              }}
            >
              {t.text} — ₹{t.amount}
              <button onClick={() => handleDelete(t.id)}>❌</button>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App
