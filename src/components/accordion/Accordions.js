import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Accordions.css'

const Accordions = () => {
    return (
        <div className='accordion-area'>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="row">
                    <div className="col-md-12">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Where is Geeks of Gurukul
                                    Located ?</Accordion.Header>
                                <Accordion.Body>
                                    The Head Office of geeks of Gurukuk is located in
                                    Bengaluru, India.
                                    All programs provided by Geeks of Gurukul are held
                                    online in an interactive environment.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Will Geeks of Gurukul provide
                                    certificate after completion of the program?</Accordion.Header>
                                <Accordion.Body>
                                    Will Geeks of Gurukul provide
                                    certificate after completion of the program?
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What should
                                    candidate know before Joining?</Accordion.Header>
                                <Accordion.Body>
                                    Student need not have any technical background for joining our course. We’ll teach from very basics. All we expect from a student is basic communication skills and a laptop with a good processor
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Should I have
                                    Computer Science Background to apply at Geeks of
                                    Gurukul?</Accordion.Header>
                                <Accordion.Body>
                                    NO. You need not have CS Background or need not know any programming language before joining Geeks of Gurukul. We’ll teach all the skills/ concepts from the very basics
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Can I do this
                                    program along with my college/job?</Accordion.Header>
                                <Accordion.Body>
                                    Yes absolutely. Most of our students are either final year undergraduates or already working professionals. Our programs are designed especially for you so that you can balance both the course work and your job/studies
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