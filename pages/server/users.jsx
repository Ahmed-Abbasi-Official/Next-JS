import Link from "next/link";

const users = ({ res }) => {
  // console.log(res);

  return <div>
    <h1>Users</h1>
    {
      res.length > 0? (
        <ul>
          {res.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )
    }
  </div>;
};

export async function getServerSideProps() {
  // Fetch data from an API
  console.log("Server is running");
  const res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  return {
    props: {
      res,
    },
  };
}

export default users;
