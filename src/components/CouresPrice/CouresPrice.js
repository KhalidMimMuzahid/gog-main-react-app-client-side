import React from 'react';
import './CouresPrice.css'
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import PriceTable from '../PriceTable/PriceTable';
const CouresPrice = () => {

    // loading
    const [loading, setLoading] = useState(false)

    // react query data fatch
    const url = `http://localhost:5000/program`;
    const { data: price = [], refetch, isLoading } = useQuery({
        queryKey: ['price'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }

            });
            const data = await res.json();
            return data
        }
    })

    console.log(price.data);



    if (isLoading || loading ) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="CouresPrice-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 offset-lg-2">
                            <div className="price-text">
                                <h2>Our All Program</h2>
                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th scope="col">Program</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Current Price</th>
                                            <th scope="col">New Price</th>
                                            <th scope="col">Submit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            price?.data?.map(copuoninfos => <PriceTable copuoninfo ={copuoninfos} load={setLoading} relod={refetch} key={copuoninfos._id}></PriceTable>)


                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouresPrice;