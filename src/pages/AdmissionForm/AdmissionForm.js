import React, { useEffect, useState } from 'react';
import './AdmissionForm.css'
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
const AdmissionForm = () => {

    // navigate
    const navigate = useNavigate();

    // Select Programme
    const programmes = ['Select Programme', 'School Champs', 'Coding Bees', 'Engineering Nerds']

    // Select Course
    const courses = {
        'Select Programme': ['Select Course '],
        'School Champs': ['Basic Coding', 'Advance Coding'],
        'Coding Bees': ['Full Stack Data Analytics', 'Full Stack Web Development'],
        'Engineering Nerds': ['Electrical Engineering', 'Mechanical Engineering'],
    }

    // Programme value
    const [selectprogramme, setSelectprogramme] = useState('Select Programme');

    // Course value
    const [selectCourse, setSelectCourse] = useState('School Champs')

    // course state
    const [courseName, setCoursName] = useState([])

    // data lode 
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setCoursName(data))
    }, [])

    //main price filter 
    const mainCourse = courseName?.filter(nameCourse => selectCourse === nameCourse?.name)




    // fromHandler
    const fromHandler = (e) => {
        e.preventDefault()
        const common = e.target
        const name = common.name.value

        // navigate('/pay/')
    }

    // payment system count
    const discount = mainCourse[0]?.price - 150

    // Coupon Code
    const [couponInput, setCouponInput] = useState(0)
    const couponHandler = (e) => {
        e.preventDefault()
        const coupon = e.target.coupon.value;
        setCouponInput(coupon)

    }



    let totalCopulall = 0

    let totalcopons = 0

    let totalDiscount = 150

    if (couponInput == 150) {
        const subcopun = discount - 169
        totalcopons = subcopun
        totalCopulall = 150 + 169

    } else {
        const subcopun = discount
        totalcopons = subcopun
        totalCopulall = 0
        totalCopulall = 150
    }

    console.log(totalCopulall);

    return (
        <div>
            <div className="admission-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="admission-from">
                                <h4>Admission Form</h4>
                                <form onSubmit={fromHandler}>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="single-from-admission ma-btt">
                                                <p>Full Name</p>
                                                <input type="text" name="name" placeholder='Enter full name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="single-from-admission ma-btt">
                                                <p>Full Name</p>
                                                <input type="text" placeholder='Enter full name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="single-from-admission">
                                                <p>Full Name</p>
                                                <input type="text" placeholder='Enter full name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="single-from-admission">
                                                <p>Full Name</p>
                                                <input type="text" placeholder='Enter full name' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <div className="single-from-admission">
                                                <span>Gender</span>
                                                <div className='gander'>
                                                    <div className='single-from'>
                                                        <input type='radio' name='option' id='gander-1' />
                                                        <label htmlFor='gander-1' >
                                                            male
                                                        </label>
                                                    </div>


                                                    <div className='single-from'>
                                                        <input type='radio' name='option' id='gander-2' />
                                                        <label htmlFor='gander-2'>

                                                            Female
                                                        </label>

                                                    </div>


                                                    <div className='single-from'>
                                                        <input type='radio' name='option' id='gander-3' />
                                                        <label htmlFor='gander-3' >

                                                            prefer not to say
                                                        </label>

                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <div className="single-from-admission">
                                                <p>Course</p>
                                                <select onChange={(e) => { setSelectprogramme(e.target.value) }}>
                                                    {
                                                        programmes?.map((programme, i) => <option key={i} value={programme}>{programme}</option>)
                                                    }


                                                </select>
                                                <select onChange={(e) => { setSelectCourse(e.target.value) }}>
                                                    {
                                                        courses[selectprogramme]?.map((course, i) => <option key={i} value={course}>{course}</option>)
                                                    }


                                                </select>
                                            </div>
                                            <div className="check-box-btu">
                                                <input type="checkbox" checked />
                                                <span>Opted for Digital Basta</span>
                                            </div>
                                            {/* <div className="submit-btu">
                                                <button type='submit'>Submit</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="admission-right">
                                <div className="discount-area">
                                    <h2>Apply Discount</h2>
                                    <p>₹169 instant discounted</p>
                                </div>
                                <div className="discount-area">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Apply Referal Code</Accordion.Header>
                                            <Accordion.Body>
                                                <form >
                                                    <div className="code">
                                                        <input type="text" placeholder='Referal Code' />
                                                        <button>Submit</button>
                                                    </div>
                                                </form>
                                            </Accordion.Body>
                                        </Accordion.Item>


                                    </Accordion>



                                </div>
                                <div className="discount-area">
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Apply Coupon Code</Accordion.Header>
                                            <Accordion.Body>
                                                <form onSubmit={couponHandler}>
                                                    <div className="code">
                                                        <input type="text" name='coupon' placeholder='Coupon Code' />
                                                        <button type='submit'>Submit</button>
                                                    </div>
                                                </form>
                                            </Accordion.Body>
                                        </Accordion.Item>


                                    </Accordion>
                                    



                                </div>

                                <div className="pricing">
                                    <h2>Pricing Details</h2>
                                    <div className="pricing-area">
                                        <div className="pricing-details">
                                            <p>Total</p>
                                            <p> <strong>₹{mainCourse[0]?.price ? mainCourse[0]?.price : 0}</strong> </p>
                                        </div>
                                        <div className="pricing-details">
                                            <p>Discount</p>
                                            <p> -₹150 </p>
                                        </div>
                                        <div className="pricing-details">
                                            <p className='red'>Total</p>
                                            <p> <strong>₹{discount ? discount : 0}</strong> </p>
                                        </div>
                                        <div className="pricing-details">
                                            <p className='green'>Referal  Applied</p>
                                            <p> <strong>₹0</strong> </p>
                                        </div>
                                        <div className="pricing-details">
                                            <p className='green'>Coupon  Applied</p>
                                            <p> <strong>₹{totalDiscount}</strong> </p>
                                        </div>
                                        <div className="pricing-details">
                                            <p>To Pay</p>
                                            <p> <strong>₹{totalcopons ? totalcopons : 0}</strong> </p>
                                        </div>
                                        <div className="pricing-details green">
                                            <p>Total Discount</p>
                                            <p> <strong>₹{totalCopulall}</strong> </p>
                                        </div>

                                        <div className="pay">
                                            <button>Pay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wonder-area">
                    <p>BASTA is India’s Largest Skill Building School enabling students to start their Tech-career and get <br /> placed at upto 40 LPA jobs as Data Analyst, Business Analyst, <br /> Data Scientist, Product Analyst Software Developer, Full Stack Web Developer etc.</p>
                    <div className="wonder-btu">
                        <button className="border">About us</button>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;