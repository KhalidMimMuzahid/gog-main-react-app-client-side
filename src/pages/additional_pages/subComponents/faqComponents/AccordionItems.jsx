import React from "react";
import { Accordion } from "react-bootstrap";

function AccordionItems({ item }) {
  return (
    <Accordion.Item eventKey={item.id}>
      <Accordion.Header>{item.question}</Accordion.Header>
      <Accordion.Body className="acc-body">{item.answer}</Accordion.Body>
    </Accordion.Item>
  );
}

export default AccordionItems;
