"use client"
import React, { useEffect, useRef, useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type AccordionItem = {
    id: number;
    title: string;
    body: string;
}

const accordionItems: AccordionItem [] = [
    {id: 1, title:'title 1', body:'body 1'},
    {id: 2, title:'title 2', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias doloribus sed corrupti impedit nesciunt consequuntur, accusantium odit labore itaque error repellendus necessitatibus doloremque dolorum eaque! Sequi minima, quae ducimus a adipisci dolores facilis, tempore perspiciatis optio consequuntur ex velit rem maxime ratione dolorum vitae modi quidem recusandae eaque. Fugit.'},
    {id: 3, title: 'title 3', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium impedit similique magni ullam aliquam delectus iure, repellendus atque neque id accusamus dignissimos ex nemo eveniet earum placeat asperiores sunt autem modi praesentium nihil repellat alias in nostrum. Amet impedit blanditiis autem aspernatur fugit in illum quis, eveniet veritatis sequi, consequuntur asperiores. Sequi, voluptas libero, sed est aspernatur iusto repellat facilis ducimus earum labore iste reiciendis qui fuga quidem tempora cumque molestias cum quas? Delectus blanditiis corporis hic dolor sequi ad eveniet amet commodi sed, quasi neque aliquid dolore necessitatibus ratione incidunt! Non nam, nobis reiciendis at veritatis voluptas repudiandae amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias doloribus sed corrupti impedit nesciunt consequuntur, accusantium odit labore itaque error repellendus necessitatibus doloremque dolorum eaque! Sequi minima, quae ducimus a adipisci dolores facilis, tempore perspiciatis optio consequuntur ex velit rem maxime ratione dolorum vitae modi quidem recusandae eaque. Fugit.'}
]
export default function Accordion() {
    const [activeAccordionItem, setActiveAccordionItem] = useState<number | null>(null)
    const contentRef = useRef<{[key: number]: HTMLDivElement | null}>({})
    const handleToggle = (currentAccordionItem: number) => {
        if(activeAccordionItem !== null && activeAccordionItem === currentAccordionItem){
            setActiveAccordionItem(null)
        } else {
            setActiveAccordionItem(currentAccordionItem)
        }
    }

    useEffect(() => {
        if(activeAccordionItem !== null){
            const content = contentRef.current[activeAccordionItem]
            if (content){
                content.style.maxHeight = `${content.scrollHeight}px`
            }
        }

        return () => {
            if(activeAccordionItem !== null){
                const content = contentRef.current[activeAccordionItem]
                if(content){
                    content.style.maxHeight = '0px'
                }
            }
        }
    },[activeAccordionItem])

  return (
    <ul className='w-5/5 mx-5 mt-2 border rounded-lg divide-y'>
        {accordionItems.map(item => {
            return(
                <li key={item.id} >
                    <div onClick={() => handleToggle(item.id)}
                    className={`flex flex-row justify-between items-center p-5  ${item.id === activeAccordionItem && item.id === 1 ? 'rounded-t-lg' : 'rounded-non'} ${item.id === activeAccordionItem ? 'border-xl border-blue-200 bg-blue-300' : 'border-5 border-blue-700 bg-white'}`}
                    >
                        {item.title} 
                        <FontAwesomeIcon icon={faChevronDown} className={`${item.id === activeAccordionItem ? 'rotate-180' : 'rotate-0'}`}/>
                    </div>
                    <div ref={el => {contentRef.current[item.id] = el}} 
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out`} 
                    style={{maxHeight: item.id === activeAccordionItem ? `${contentRef.current[item.id]?.scrollHeight}px` : '0px'}}
                    >
                        <div className='p-5 text-justify'>{item.body}</div>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}
