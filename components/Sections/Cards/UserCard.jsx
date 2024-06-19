function UserCard() {
    return (
        <section className="w-full flex justify-between items-center text-xs mx-auto z-10 shadow-lg  rounded-xl p-2">
	<div className="flex items-center gap-2">
        <img className="w-12 h-12 rounded-full object-cover" src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="" />
        <div>
        <h2 className="text-left text-base font-bold">Arman Khan</h2>
        <div className="flex items-center justify-between w-full gap-3">
        <p>1.2k Followers</p>
        <p>14 Stories</p>
        </div>
    </div>
    </div>
      <button className="bg-gradient text-white px-2 md:px-4 rounded h-8 flex items-center py-2">Follow</button>
   
		</section>
    );
}

export default UserCard;