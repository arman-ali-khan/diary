import UserCard from "../Sections/Cards/UserCard";



function UserFollow() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3'>
        {
          [...Array(12).keys()]?.map((user,i)=>{
            return <UserCard />
          })
        }
        </div>
    );
}

export default UserFollow;