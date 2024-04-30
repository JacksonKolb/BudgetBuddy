import React, { useState } from 'react';

type Transaction = {
  description: string;
  amount: number;
  date: string;
};

const TransactionForm = () => {
  const [formData, setFormData] = useState<Transaction>({
    description: '',
    amount: 0,
    date: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Assume some front-end validation happens here
    if (formData.description && formData.amount && formData.date) {
      console.log('Form Submitted', formData); // Placeholder for backend POST request
      setFormData({ description: '', amount: 0, date: '' }); // Reset form fields
      setSubmissionMessage('Transaction submitted successfully!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            name="description"
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={e => setFormData({ ...formData, amount: Number(e.target.value) })}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
          />
        </label>
        <button type="submit">Submit Transaction</button>
      </form>
      {submissionMessage && <p>{submissionMessage}</p>}
    </div>
  );
};

export default TransactionForm;
