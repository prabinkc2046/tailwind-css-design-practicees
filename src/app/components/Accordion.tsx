"use client"

import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
type AccordionItemType = {
    id: number;
    title: string;
    body: React.JSX.Element;
} | {
    id: number;
    title: string;
    body: string;
}

type AccordionProps = {
    accordionItems: AccordionItemType[]
}
export default function Accordion({accordionItems}: AccordionProps) {
    const [activeHeadingItem, setActiveHeadingItem] = useState<number | null>(1)
    const [activeBorderItem, setActiveBorderItem] = useState<number | null>(null)
    const bodyContent = useRef<{[key: number] : HTMLDivElement | null}>({})
    const ulContent = useRef<HTMLUListElement | null>(null)
    const handleToggle = (itemId: number) => {   
        setActiveBorderItem(itemId)
        setTimeout(() => {
            if(activeHeadingItem !== null && activeHeadingItem === itemId){
                setActiveHeadingItem(null)
            } else {
                setActiveHeadingItem(itemId)
            }          
        }, 200);
        
    }


    useEffect(() => {
     if(activeHeadingItem !== null){
        const content = bodyContent.current[activeHeadingItem]
        console.log(content?.scrollHeight)
        if(content){
            content.style.maxHeight = `${content.scrollHeight}px`
        }
     }

     return () => {
        if(activeHeadingItem !== null){
            const content = bodyContent.current[activeHeadingItem]
            if(content){
                content.style.maxHeight = '0px'
            }
        }
     }
    },[activeHeadingItem])

    

    // detects the click outside of ul and set activeBorderItem to null
    useEffect(() => {
        const detectOutsideClick =(e: MouseEvent) => {
            if(ulContent.current && !ulContent.current.contains(e.target as Node)){
                setActiveBorderItem(null)
            }
        }
        
        document.addEventListener('mousedown', detectOutsideClick)

        return () => {
            document.removeEventListener('mousedown', detectOutsideClick)
        }
    },[])

   return(
    <ul ref={ulContent} className={` border mx-20`}>
        

        {accordionItems.map(item => (
        <li key={item.id}>
            {/* accordion heading container */}
            <div onClick={() => handleToggle(item.id)} className={` flex flex-row justify-between items-center p-2 ${item.id === activeBorderItem ? 'border-4 border-blue-700 ' : 'border'} ${item.id === activeHeadingItem ? 'bg-blue-300' : 'bg-white'} ${activeBorderItem === 1 ? 'rounded-t-[10px]' : 'rounded-none'}`}>{item.title} <FontAwesomeIcon size='sm' className={`h-5  ${item.id === activeHeadingItem ? 'rotate-270' : 'rotate-90'}`} icon={faChevronDown}/></div>
            <div  ref={el => {bodyContent.current[item.id] = el}} className="overflow-hidden transition-max-height duration-500 ease-in-out " style={{maxHeight: item.id === activeHeadingItem ? `${bodyContent.current[item.id]?.scrollHeight}px` : '0px'}}>
                <div className={`p-2 text-justify`}>{item.body}</div>
            </div>
        </li>
        ))}
    </ul>
   )
}

