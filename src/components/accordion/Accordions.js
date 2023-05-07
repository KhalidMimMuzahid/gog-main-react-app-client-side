import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Accordions.css";

const Accordions = () => {
  return (
    <div className="accordion-area" id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="row">
          <div className="col-md-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Geeks of Gurukul ?</Accordion.Header>
                <Accordion.Body>
                  Geeks of Gurukul is India’s Best Gurukul Online Platform for
                  Students. Geeks of Gurukul help students to gain the skills
                  and knowledge needed to succeed in the technology industry.
                  that offers a wide range of industrial courses like full stack
                  web development, data analytics, and core engineering which
                  help students bridge the gap between college curriculum and
                  industry expectations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What kind of courses and tutorials do Geeks of Gurukul offer ?
                </Accordion.Header>
                <Accordion.Body>
                  We provide a wide range of courses taught by industry experts
                  from tier 1 colleges, and tutorials on topics such as
                  programming languages such as Python, web development
                  frameworks such as React and Node.js, data structures and
                  algorithms, data analytics, machine learning, and artificial
                  intelligence.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Who can take courses on Geeks of Gurukul ?
                </Accordion.Header>
                <Accordion.Body>
                  Anyone can take courses on Geeks of Gurukul. The courses are
                  designed for beginners as well as those with more experience
                  in programming and IT.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Should I have Computer Science Background to apply at Geeks of
                  Gurukul?
                </Accordion.Header>
                <Accordion.Body>
                  NO. You need not have CS Background or need not know any
                  programming language before joining Geeks of Gurukul. We’ll
                  teach all the skills/ concepts from the very basics
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  What programming languages are covered in the courses offered
                  by Geeks of Gurukul ?
                </Accordion.Header>
                <Accordion.Body>
                  Geeks of Gurukul offers courses on several programming
                  languages, including Python, Java, SQL, and more.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
