import React from "react";
import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ViewPdf = () => {
  //   const fileName = useLoaderData();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     console.log(
  //       `https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${fileName}.pdf`
  //     );
  //     // window.open(
  //     //   `https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${fileName}.pdf`,
  //     //   "_blank"
  //     // );
  //     setTimeout(() => {
  //       console.log(
  //         `xxxxxxxxxxxxxxxxxxxxxxxxxxxxhttps://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${fileName}.pdf`
  //       );
  //       window.open(
  //         `https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${fileName}.pdf`,
  //         "_blank"
  //       );
  //     }, 2000);

  //     // navigate("/");
  //   }, [fileName]);
  //   window.open(
  //     `https://all-files-for-gog.s3.ap-south-1.amazonaws.com/assets/pdfdocs/${fileName}.pdf`,
  //     "_blank"
  //   );
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>pdf page</h1>
    </div>
  );
};

export default ViewPdf;
