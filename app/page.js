'use client';

import React, { useState } from 'react';
import ReceiptForm from '../components/ReceiptForm';

export default function Home() {
  const [receipts, setReceipts] = useState([]);

  const handleSubmit = (formData) => {
    setReceipts(prevReceipts => [...prevReceipts, formData]);
  };

  const generateReport = () => {
    if (receipts.length === 0) {
      alert('No receipts to generate report from.');
      return;
    }
    
    let report = 'Expense Report\n\n';
    let total = 0;
    
    receipts.forEach((receipt, index) => {
      report += `Receipt ${index + 1}:\n`;
      report += `Store: ${receipt.storeName}\n`;
      report += `Address: ${receipt.storeAddress}\n`;
      report += `Items: ${receipt.totalItems}\n`;
      report += `Amount: $${receipt.totalAmount}\n\n`;
      total += parseFloat(receipt.totalAmount);
    });
    
    report += `Total Expenses: $${total.toFixed(2)}`;
    
    alert(report);  // In a real app, you'd want to display this in a more user-friendly way
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Receipt Scanner App</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Input Receipt</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Scan Receipt</h3>
          <input type="file" accept="image/*" className="mb-2" />
          <button 
            onClick={() => alert('Scanning not implemented yet')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Scan Receipt
          </button>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Manual Input</h3>
          <ReceiptForm onSubmit={handleSubmit} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Saved Receipts</h2>
        {receipts.length > 0 ? (
          <ul className="list-disc pl-5">
            {receipts.map((receipt, index) => (
              <li key={index} className="mb-1">
                Receipt {index + 1}: {receipt.storeName} - ${receipt.totalAmount}
              </li>
            ))}
          </ul>
        ) : (
          <p>No receipts saved yet.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Generate Report</h2>
        <button 
          onClick={generateReport}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Generate Expense Report
        </button>
      </section>
    </div>
  );
}