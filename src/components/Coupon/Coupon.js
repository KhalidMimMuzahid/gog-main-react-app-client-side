import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../shared/Loading/Loading';

const Coupon = () => {
    // Coupon get
    // react query data fatch
    const urlcoupon = `http://localhost:5000/coupon`;
    const { data: coupon = [], refetch, isLoading } = useQuery({
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

    // delete copun
    const deletecopun = (copuoninfo) => {
        fetch(`http://localhost:5000/coupon/${copuoninfo._id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)

                refetch()
            })
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(coupon);
    return (
        <table class="table">
            <thead>
                <tr>
                   
                    <th scope="col">Program</th>
                    <th scope="col">Course</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Code</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    coupon?.data?.map(copuoninfo => <tr key={copuoninfo._id}>

                        
                        <td>{copuoninfo?.selectprogramme}</td>
                        <td>{copuoninfo?.selectCourse}</td>
                        <td>{copuoninfo?.discount}</td>
                        <td>{copuoninfo?.coupon}</td>
                        <td><button onClick={() => deletecopun(copuoninfo)} className="btn btn-danger">Delete</button></td>

                    </tr>)
                }


            </tbody>
        </table>
    );
};

export default Coupon;