"use client";
import { useState } from "react";

const faqData = [
  {
    question: "How am I a good fit for this role?",
    answer: "I love web dev :D Though my background is primarily in backend development, my familiarity with general programming, databases, languages such as TypeScript and Python, as well as my willingness to learn is what I believe contributes the most to my success.",
  },
  {
    question: "What is my history in software development?",
    answer: "I started off my career making video games because I loved playing them, but eventually delved more into other areas, working as a computer science research assistant, teaching competitive programming, and more. I'm currently hyperfixated on AI, ML, cybersecurity, and data.",
  },
  {
    question: "Am I a real person?",
    answer: "YES I have a big life outside of the 'puter! I do archery and go for walks alone and make art and play video games, and part of the reason I love programming so much is because I think it's as valid a form of expression as language or art is!",
  },
  {
    question: "Am I excited to work at AllMind?",
    answer: "ONE HUNDRED PERCENT!!! I would honestly so much more prefer to work at a start-up that actually makes me Do Stuff TM than a bigger company that puts me in a cubicle with nothing to do. Not to mention that AllMind's projects are exactly what I'm looking for: a mix of full-stack, AI/ML, and data.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-[65vw] w-[100vw] mx-auto p-6 text-white">
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
