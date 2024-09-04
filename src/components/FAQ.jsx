import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

  
function FAQ({question , answer}) {
  return (
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className=" text-base sm:text-lg">Q. {question}</AccordionTrigger>
      <AccordionContent className=" text-sm sm:text-base text-gray-600">
       A. {answer}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default FAQ