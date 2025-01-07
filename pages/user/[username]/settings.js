import { useRouter } from "next/router"

export default function(){
  const {query} = useRouter();
  return (
    <div>
      <h1>This is {query?.username} Settings</h1>
    </div>
  )
}