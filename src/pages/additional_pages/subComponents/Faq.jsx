import React from "react";
import { accordionData } from "../data";
import AccordionItems from "./faqComponents/AccordionItems";
import { Accordion } from "react-bootstrap";
import "./faqComponents/Accordion.css"

function Faq() {
  return (
    <div className="mx-auto outer-acc">
      <div className="accordion">
        <Accordion defaultActiveKey="0" className="text-start">
          {accordionData.map((item, index) => (
            <AccordionItems item={item} key={item.id} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
