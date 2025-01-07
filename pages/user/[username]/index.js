import { useRouter } from "next/router";
import { useEffect } from "react";
const useUser = () => ({ user: "ahmed", loading: false });
const Page = () => {
  const router = useRouter();
  const { user } = useUser();

  // console.log(router);

  useEffect(() => {
    if (user === null) {
      router.replace("/");
    }
  }, [router, user]);

  return (
    <div>
      <h1>This is a {router?.query?.username}</h1>
      <button
        onClick={(e) => {
          console.log(e);

          //  1ST METHOD

          // router.push(`/user/${router?.query?.username}/settings`)

          // SECOND METHOD

          router.push({
            pathname: "/user/[username]/settings",
            query: { username: router?.query?.username },
          });
        }}
      >
        Open Settings Page
      </button>
      <br />
      <br />
      <button onClick={(e) => router.replace(`/`)}>Go To Page</button>
      <br />
      <br />
      <button onClick={(e) => router.reload()}>Reload</button>
    </div>
  );
};

export default Page;
