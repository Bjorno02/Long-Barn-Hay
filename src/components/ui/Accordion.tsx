'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn('divide-y divide-steel-200', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        
        return (
          <div key={item.id} className="group">
            <button
              onClick={() => toggle(item.id)}
              className="w-full py-5 flex items-center justify-between text-left hover:bg-steel-50/50 transition-colors px-2 -mx-2 rounded-lg"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="font-medium text-steel-900 pr-4">{item.question}</span>
              <span className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300',
                isOpen ? 'chrome-red rotate-180' : 'chrome-surface'
              )}>
                <svg 
                  className={cn('w-4 h-4 transition-colors', isOpen ? 'text-white' : 'text-steel-600')} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
              )}
              aria-hidden={!isOpen}
            >
              <p className="text-steel-600 leading-relaxed pl-2">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
