'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface FAQData {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors duration-200 px-4 md:px-0"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-6 h-6 text-gray-600" />
          ) : (
            <Plus className="w-6 h-6 text-gray-600" />
          )}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="pb-6 px-4 md:px-0">
          <p className="text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData: FAQData[] = [
    {
      question: "What makes TM special?",
      answer: "TM stands out through its unique combination of cutting-edge technology, user-centric design, and exceptional customer support. Our platform leverages advanced algorithms and machine learning to deliver personalized experiences that adapt to your specific needs and preferences."
    },
    {
      question: "Why wouldn't I just hire my own designer to do this work?",
      answer: "While hiring your own designer is certainly an option, TM offers several advantages: cost-effectiveness, faster turnaround times, access to a diverse team of specialists, ongoing support and updates, and the ability to scale your design needs up or down as required. You get enterprise-level design capabilities without the overhead of full-time employees."
    },
    {
      question: "What is frontier technology and why is it important?",
      answer: "Frontier technology refers to cutting-edge innovations that are at the forefront of scientific and technological advancement. These include AI, quantum computing, biotechnology, and advanced materials. It's important because it drives progress, creates new opportunities, solves complex problems, and shapes the future of how we live and work."
    },
    {
      question: "What do you NOT do?",
      answer: "We don't provide one-size-fits-all solutions, compromise on quality for speed, work without clear communication, or take on projects outside our expertise areas. We also don't provide 24/7 support for non-critical issues, work on projects that conflict with our values, or guarantee specific business outcomes as results depend on many factors beyond our control."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          FAQ
        </h1>
        <div className="w-full h-px bg-gray-200"></div>
      </div>
      
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
}