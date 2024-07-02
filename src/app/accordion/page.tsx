// "use client";
// import React, { useState, useRef, useEffect } from 'react';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

// type AccordionType = {
//   id: number;
//   title: string;
//   body: string;
// };

// const accordionItems: AccordionType[] = [
//   { id: 1, title: "Accordion item #1", body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." },
//   { id: 2, title: "Accordion item #2", body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." },
//   { id: 3, title: "Accordion item #3", body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." },
// ];

// export default function Accordion() {
//   const [isOpen, setIsOpen] = useState<number | null>(null);
//   const [angle, setAngle] = useState<number | null>(null);
//   const [headerColor, setHeaderColor] = useState<number | null>(null);
//   const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

//   const handleToggle = (itemId: number) => {
//     if (isOpen !== null && isOpen === itemId) {
//       setIsOpen(null);
//       setAngle(null);
//       setHeaderColor(null);
//     } else {
//       setIsOpen(itemId);
//       setAngle(itemId);
//       setHeaderColor(itemId);
//     }
//   };

//   useEffect(() => {
//     if (isOpen !== null) {
//       const content = contentRefs.current[isOpen];

//       if (content) {
//         content.style.maxHeight = `${content.scrollHeight}px`;
//       }
//     }

//     return () => {
//       if (isOpen !== null) {
//         const content = contentRefs.current[isOpen];
//         if (content) {
//           content.style.maxHeight = '0px';
//         }
//       }
//     };
//   }, [isOpen]);

//   return (
//     <ul className="bg-white border max-w-xs divide-y">
//       {accordionItems.map(item => (
//         <li key={item.id}>
//           <div onClick={() => handleToggle(item.id)} className={`flex flex-row justify-around items-center gap-20 p-3 text-black-900 ${headerColor === item.id ? 'bg-blue-200' : 'bg-white'}`}>
//             {item.title}
//             <FontAwesomeIcon icon={faChevronDown} className={`transform transition-transform duration-500 ${item.id === angle ? 'rotate-180' : 'rotate-0'}`} />
//           </div>
//           <div
//             ref={el => {contentRefs.current[item.id] = el}}
//             className={`border overflow-hidden transition-max-height duration-500 ease-in-out`}
//           >
//             <div className='p-5 text-justify bg-white '>{item.body}</div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }


import React from 'react'
import Accordion from '../components/Accordion'

export default function page() {
  return (
    <>
    <Accordion />
    </>
  )
}
