import React from "react";
import { Accordion } from "react-bootstrap";
import style from "./Accordion.module.css"

function AccordionItems({ item }) {
  return (
    <Accordion.Item eventKey={item.id} className={style.acc_item}>
      <Accordion.Header className={style.accordion_header}>{item.question}</Accordion.Header>
      <Accordion.Body className={style.acc_body}>{item.answer}</Accordion.Body>
    </Accordion.Item>
  );
}

export default AccordionItems;
