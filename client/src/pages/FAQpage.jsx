import React from "react";

const FAQPage = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is ServiceHub?",
          a: "ServiceHub is a platform that connects skilled professionals with clients who need their services. Whether you're looking for legal help, digital marketing, accounting, or skilled trades, ServiceHub is here to simplify your search."
        },
        {
          q: "Who can use ServiceHub?",
          a: "Anyone! Clients looking for reliable services and professionals offering services such as legal advice, digital marketing, accounting, and more can both benefit from the platform."
        }
      ]
    },
    {
      category: "For Clients",
      questions: [
        {
          q: "Can I contact professionals directly?",
          a: "Yes. Once you’ve selected a provider, you can view their contact details"
        },
        {
          q: "How do I know the professionals are reliable?",
          a: "Each profile includes a bio, experience, and user reviews. We also verify details during registration to maintain authenticity."
        }
      ]
    },
    {
      category: "For Professionals",
      questions: [
        {
          q: "How do I register as a professional on ServiceHub?",
          a: "Click on the “Register” button, fill in your details including profession, experience, and availability, upload your profile picture, and submit the form."
        },
        {
          q: "Is it free to register?",
          a: "Yes, registering on ServiceHub is completely free."
        },
        {
          q: "What kind of professionals can join?",
          a: "We currently support categories like Legal Services, Digital Marketing, Accounting, Chartered Accountants, and Skilled Trade Professionals."
        },
        {
          q: "Can I update my profile later?",
          a: "Yes, once registered, you can log in and update your profile information anytime."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "I forgot my login credentials. What should I do?",
          a: "Use the \"Forgot Password\" option on the login page to reset your password via email."
        },
        {
          q: "I’m facing a bug or technical issue. Whom do I contact?",
          a: "Please report issues using the “Contact Us” form or email our support team at support@servicehub.com."
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">🛠️ service<span className="text-[#0574B9]">Hub</span> – FAQ</h1>
      {faqs.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0574B9] mb-4">{section.category}</h2>
          <div className="space-y-4">
            {section.questions.map((item, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold">Q: {item.q}</h3>
                <p className="text-gray-700 mt-1">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
