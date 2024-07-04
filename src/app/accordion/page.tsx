import React from 'react'
import Accordion from '../components/Accordion'

const accordionItems = [
  {id: 1, title:'title 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vel!'},
  {id: 2, title:'title 2', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias doloribus sed corrupti impedit nesciunt consequuntur, accusantium odit labore itaque error repellendus necessitatibus doloremque dolorum eaque! Sequi minima, quae ducimus a adipisci dolores facilis, tempore perspiciatis optio consequuntur ex velit rem maxime ratione dolorum vitae modi quidem recusandae eaque. Fugit.'},
  {id: 3, title: 'title 3', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium impedit similique magni ullam aliquam delectus iure, repellendus atque neque id accusamus dignissimos ex nemo eveniet earum placeat asperiores sunt autem modi praesentium nihil repellat alias in nostrum. Amet impedit blanditiis autem aspernatur fugit in illum quis, eveniet veritatis sequi, consequuntur asperiores. Sequi, voluptas libero, sed est aspernatur iusto repellat facilis ducimus earum labore iste reiciendis qui fuga quidem tempora cumque molestias cum quas? Delectus blanditiis corporis hic dolor sequi ad eveniet amet commodi sed, quasi neque aliquid dolore necessitatibus ratione incidunt! Non nam, nobis reiciendis at veritatis voluptas repudiandae amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias doloribus sed corrupti impedit nesciunt consequuntur, accusantium odit labore itaque error repellendus necessitatibus doloremque dolorum eaque! Sequi minima, quae ducimus a adipisci dolores facilis, tempore perspiciatis optio consequuntur ex velit rem maxime ratione dolorum vitae modi quidem recusandae eaque. Fugit.'}
]

export default function page() {
  return (
    <>
    <Accordion accordionItems={accordionItems}/>
    </>
  )
}
