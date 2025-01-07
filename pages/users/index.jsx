import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const [data, setData] = useState("");
  const router=useRouter();
  console.log(router);
  

  // GET USERS FUNCTION
  async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    setData(await res.json());
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(data);

  return (
    <div>
      {data ? (
        <ul>
          {data?.map((elm) => (
            <li key={elm.id}>
              <Link href={`users/${elm.id}`}> Name : {elm.name}</Link>
            </li>
          ))}
        </ul>
      ):(
        <p>Loading...</p>
      )}
    </div>
  );
};

export default index;
