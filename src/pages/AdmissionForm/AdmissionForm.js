import React, { useContext, useEffect, useRef, useState } from 'react';
import './AdmissionForm.css'
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Loading from '../../components/shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import banner from '../../assets/images/0jpg 1 (1).png'
const AdmissionForm = () => {


    // context 
    const { user } = useContext(AuthContext);

    // Example: "+12133734253".
    const [value, setValue] = useState()

    // loading
    const [loading, setLoading] = useState(false)


    // navigate
    const navigate = useNavigate();

    // Select Programme
    const programmes = ['Select Programme', 'School Champs', 'Coding Bees', 'Engineering Nerds']

    // Select Course
    const courses = {
        'Select Programme': ['Select Course '],
        'School Champs': ['Select Course', 'Basic Coding', 'Advance Coding'],
        'Coding Bees': ['Select Course', 'Full Stack Data Analytics', 'Full Stack Web Development'],
        'Engineering Nerds': ['Select Course', 'Electrical Engineering', 'Mechanical Engineering'],
    }
    // Programme value
    const [selectprogramme, setSelectprogramme] = useState('Select Programme');

    // Course value
    const [aselectCourse, setSelectCourse] = useState('')

    // course state
    const [courseName, setCoursName] = useState([])

    // refelhande
    const [refelInput, setrefelInput] = useState(0)

    // data lode 
    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setCoursName(data))
    }, [])

    //main price filter 
    const mainCourse = courseName?.filter(nameCourse => aselectCourse === nameCourse?.name)

    const selectedOption = useRef('');

    const handleOptionChange = (event) => {
        selectedOption.current = event.target.value;
    };


    // Coupon get
    // react query data fatch
    const urlcoupon = `http://localhost:5000/coupon`;
    const { data: coupon = [] } = useQuery({
        queryKey: ['coupon'],
        queryFn: async () => {
            const res = await fetch(urlcoupon, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })

    // Coupon get
    // react query data fatch
    const urlrefel = `http://localhost:5000/referee`;
    const { data: referee = [] } = useQuery({
        queryKey: ['referee'],
        queryFn: async () => {
            const res = await fetch(urlrefel, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })

    console.log(referee.data);


    // fromHandler
    const fromHandler = (e) => {

        e.preventDefault()
        setLoading(true)
        const common = e.target
        const name = common.name.value;
        const email = common.email.value;
        const phone = common.phone.value;
        const date = common.date.value;
        const course = aselectCourse
        const gander = selectedOption.current;


        const usersInfo = {
            name, email, phone, date, course, refelInput, gander
        }

        console.log(usersInfo);

        // fetch user post
        fetch('https://geeks-of-gurukul-server-side.vercel.app/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(usersInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Successfully ')
                    setLoading(false)
                }
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })


        // console.log(usersInfo);
        // navigate('/pay/')
    }

    // payment system count
    const discount = mainCourse[0]?.price - 150


    // Coupon Code
    const [couponInput, setCouponInput] = useState(0)
    const couponHandler = (e) => {
        e.preventDefault()
        const coupon1s = e.target.coupon.value;

        const couponcount = coupon?.data?.filter(couponcheck => coupon1s === couponcheck?.coupon && couponcheck?.selectCourse == aselectCourse && couponcheck?.selectprogramme === selectprogramme)

        setCouponInput(couponcount[0].discount)

    }



  



    const refelhande = (e) => {
        e.preventDefault()
        const refel = e.target.referal.value;
        const dataRefel = referee?.data?.filter(refalsingle => refalsingle?.code === refel)
        console.log(dataRefel);

        if (dataRefel.length === 1) {
            setrefelInput(refel)
            toast.success('Referee')
        } else {
            toast.error("This didn't work.")
        }

    }

    // check Coupon and set data
    let totalCopulall = 0
    let totalcopons = 0
    let totalDiscount = 0

    // check Coupon
    if (couponInput) {
        const subcopun = mainCourse[0]?.price * couponInput
        const discountpart = subcopun / 100
        totalcopons = Math.floor(discount - discountpart)
        totalCopulall = Math.floor(discountpart + 150)
        totalDiscount = Math.floor(discountpart)
        toast.success('Coupon Add')
    } else {
        const subcopun = discount
        totalcopons = subcopun
        totalCopulall = 0
        totalCopulall = 150
    }

    // set loading

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="admission-area">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className="admission-from">
                                <img src={banner} alt="" />
                                <h4>Admission Form</h4>
                                <form onSubmit={fromHandler}>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="single-from-admission ma-btt">
                                                <p>Full Name</p>
                                                <input type="text" required name="name" defaultValue={user?.displayName} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="single-from-admission ma-btt">
                                                <p>Email Address</p>
                                                <input type="email"  defaultValue={user?.email} name='email' />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="single-from-admission">
                                                <p>Phone Number</p>
                                                {/* <input type="tel" required defaultValue={user?.phoneNumber ? user?.phoneNumber : ''} placeholder='Enter phone number ' name='phone' /> */}
                                                <PhoneInput

                                                    required disabled defaultValue={user?.phoneNumber ? user?.phoneNumber : ''} placeholder='Enter phone number ' name='phone'
                                                    defaultCountry="IN"
                                                    value={value}
                                                    onChange={setValue} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="single-from-admission">
                                                <p>Birth Date</p>
                                                <input type="date" required name='date' placeholder='Enter Birth Date' />
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <div className="single-from-admission mt-3">
                                                <p>Gender</p>
                                                <div className='gander'>
                                                    <div className='single-from'>
                                                        <input type="radio" required name="options" value="male" onChange={handleOptionChange} />
                                                        <label htmlFor='gander-1' >
                                                            male
                                                        </label>
                                                    </div>


                                                    <div className='single-from'>
                                                        <input type="radio" name="options" value="female" onChange={handleOptionChange} />
                                                        <label htmlFor='gander-2'>

                                                            Female
                                                        </label>

                                                    </div>


                                                    <div className='single-from'>
                                                        <input type="radio" name="options" value="other" onChange={handleOptionChange} />
                                                        <label htmlFor='gander-3' >

                                                            prefer not to say
                                                        </label>

                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">

                                            <div className="single-from-admission">
                                                <p>Select Programme</p>
                                                <select required onChange={(e) => { setSelectprogramme(e.target.value) }}>
                                                    {
                                                        programmes?.map((programme, i) => <option key={i} value={programme}>{programme}</option>)
                                                    }


                                                </select>
                                                <p> Select Course</p>
                                                <select required onChange={(e) => { setSelectCourse(e.target.value) }}>
                                                    {
                                                        courses[selectprogramme]?.map((course, i) => <option key={i} value={course}>{course}</option>)
                                                    }


                                                </select>
                                            </div>
                                            <div className="check-box-btu">
                                                <input type="checkbox" checked />
                                                <span>Opted for Digital Basta</span>
                                            </div>
                                            <div className="submit-btu">
                                                <button type='submit'>Pay</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
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
                                                <form onSubmit={refelhande}>
                                                    <div className="code">
                                                        <input type="text" placeholder='Referal Code' name='referal' />
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
                                            {/* <button>Pay</button> */}
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