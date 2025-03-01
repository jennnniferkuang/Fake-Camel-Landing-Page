"use client";
import { useState } from "react";

const faqData = [
  {
    question: "How is my data stored?",
    answer: "camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted.",
  },
  {
    question: "Do you train on my data?",
    answer: "No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies here.",
  },
  {
    question: "Are my app connections secure?",
    answer: "Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.",
  },
  {
    question: "How do you pull my data?",
    answer: "camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[65vw] mx-auto p-6 text-white">
      {faqData.map((item, index) => (
        <div key={index} className={openIndex === index ? "border-transparent" : "border-b-3 border-gray-700"}>
          <button className="w-full text-left py-7 px-4 flex justify-between items-center transition duration-400" onClick={() => toggleFAQ(index)}>
            <span className="text-xl font-semibold">{item.question}</span>
            <img className={openIndex === index ? "justify-end h-5 transition duration-400" : "justify-end h-5 transition duration-400 rotate-180"} src="https://camelai.com/assets/images/chevron-up-white.png" alt={openIndex === index ? "Collapse" : "Expand"}/>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-800 font-mono rounded-md">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
