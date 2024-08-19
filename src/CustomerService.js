import React from 'react';
import './CustomerService.css';

const CustomerService = () => {
  const handleCustomerService = () => {
    const phoneNumber = '+919500455058';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  const [selectedQuestion, setSelectedQuestion] = React.useState(null);

  const faqs = [
    {
      question: "What is the procedure to join the class?",
      answer: "Go to the application page, fill in your details, and register (cost: 200rs). It will be processed within the next 24 hours."
    },
    {
      question: "Can I go offline and book my slot?",
      answer: "Yes, you can straight away go to the venue and register your slots."
    },
    {
      question: "What are the details required to place the slot offline?",
      answer: "Passport size photo, copy of Aadhar, bonafide from your institution, mark sheet (any)."
    },
    {
      question: "How many batches are taken in the class?",
      answer: "Batch 1: 7:00 AM to 9:00 AM, Batch 2: 5:00 PM to 7:00 PM, Batch 3: 7:30 PM to 9:15 PM."
    }
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="customer-service-page">
      <div className="contact-frame">
        <h2>Contact Us(Interact with human)</h2>
        <button className="service-button" onClick={handleCustomerService}>
          Contact via WhatsApp
        </button>
      </div>
      <div className="faq-frame">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${selectedQuestion === index ? 'active' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            {selectedQuestion === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerService;
