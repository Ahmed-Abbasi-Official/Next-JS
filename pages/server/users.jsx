
const users = ({name}) => {
    console.log(name);
    
  return (
    <div>users</div>
  )
}

export async function getServerSideProps() {
    // Fetch data from an API
    console.log("Server is running");
   return {}
    
}

export default users