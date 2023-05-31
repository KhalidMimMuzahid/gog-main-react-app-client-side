import React from "react";

import { toast } from "react-hot-toast";


const PriceTable = ({ relod, load, copuoninfo }) => {
  const id = copuoninfo._id;

  const priceSubmit = (e) => {
    e.preventDefault();
    load(true);
    const coupon = e.target.price.value;
    const newpice = {
      coupon,
      id,
    };

    // fetch user post
    fetch("https://geeks-of-gurukul-server-side.vercel.app/newprice", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newpice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully ");
          relod();
          load(false);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        load(false);
      });
  };

  return (
    <tr>
      <td>{copuoninfo?.program}</td>
      <td>{copuoninfo?.name}</td>
      <td>{copuoninfo?.price}</td>

      <td>
        <form onSubmit={priceSubmit}>
          {" "}
          <input type="text" placeholder="Price" name="price" />
          <button className="btn mar-1 btn-success" type="submit">
            Submit
          </button>{" "}
        </form>
      </td>
      {/* <td></td> */}
    </tr>
  );
};

export default PriceTable;
