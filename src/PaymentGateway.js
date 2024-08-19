import React, { useState } from 'react';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2>Choose Payment Method </h2>
        <h2>Cost: 200rs</h2>
        <form>
          <button
            type="button"
            onClick={() => handleOptionChange('upi')}
            className={selectedOption === 'upi' ? 'active' : ''}
          >
            UPI
          </button>
          <button
            type="button"
            onClick={() => handleOptionChange('netbanking')}
            className={selectedOption === 'netbanking' ? 'active' : ''}
          >
            Net Banking
          </button>
          <button
            type="button"
            onClick={() => handleOptionChange('creditcard')}
            className={selectedOption === 'creditcard' ? 'active' : ''}
          >
            Credit Card
          </button>
          <button
            type="button"
            onClick={() => handleOptionChange('debitcard')}
            className={selectedOption === 'debitcard' ? 'active' : ''}
          >
            Debit Card
          </button>
        </form>
      </div>
      <div className="payment-details">
        {selectedOption === 'upi' && (
          <div>
            <h3>UPI Payment</h3>
            <form>
              <label>
                UPI ID:
                <input type="text" name="upiId" required />
              </label>
              <button type="submit">Pay</button>
            </form>
          </div>
        )}
        {selectedOption === 'netbanking' && (
          <div>
            <h3>Net Banking</h3>
            <form>
              <label>
                Bank Name:
                <input type="text" name="bankName" required />
              </label>
              <label>
                Account Number:
                <input type="text" name="accountNumber" required />
              </label>
              <label>
                IFSC Code:
                <input type="text" name="ifscCode" required />
              </label>
              <button type="submit">Pay</button>
            </form>
          </div>
        )}
        {selectedOption === 'creditcard' && (
          <div>
            <h3>Credit Card Payment</h3>
            <form>
              <label>
                Card Number:
                <input type="text" name="cardNumber" required />
              </label>
              <label>
                Expiry Date:
                <input type="text" name="expiryDate" required />
              </label>
              <label>
                CVV:
                <input type="text" name="cvv" required />
              </label>
              <button type="submit">Pay</button>
            </form>
          </div>
        )}
        {selectedOption === 'debitcard' && (
          <div>
            <h3>Debit Card Payment</h3>
            <form>
              <label>
                Card Number:
                <input type="text" name="cardNumber" required />
              </label>
              <label>
                Expiry Date:
                <input type="text" name="expiryDate" required />
              </label>
              <label>
                CVV:
                <input type="text" name="cvv" required />
              </label>
              <button type="submit">Pay</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentGateway;
