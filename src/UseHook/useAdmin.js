import { useState } from "react";
import Loading from "../components/shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { logDOM } from "@testing-library/react";

const useAdmin = (email) => {
  const [isAdmin, setAdmin] = useState(false);
  const [isAdminLoading, setAdminLoding] = useState(true);
  useState(() => {
    if (email) {
      console.log(email, "emai;");

      fetch(`https://geeks-of-gurukul-server-side.vercel.app/admin/admin/${email}`, {
        headers: {
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.isAdmin);
          console.log(data.isAdmin);
          setAdminLoding(false);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
