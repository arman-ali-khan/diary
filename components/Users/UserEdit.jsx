"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function UserEdit() {
  const [selectDivision, setSelectDivision] = useState("");
  //   divisions
  const [division, setDivision] = useState({});

  // selected location
  const [location,setLocation] = useState([])
console.log(location,'location')
  // upazillas
  const [upazillas, setUpazillas] = useState([]);

  useEffect(() => {
    axios
      .get(`https://bdapis.com/api/v1.1/divisions`)
      .then((res) => {
        setDivision(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //   district
  const [district, setDistrict] = useState({});
  useEffect(() => {
    if (selectDivision?.length) {
      axios
        .get(`https://bdapis.com/api/v1.1/division/${selectDivision}`)
        .then((res) => {
          setDistrict(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectDivision, division]);
  //   divisions data
  const divisions = division?.data;
  //   district data
  const districts = district?.data;

  return (
    <section className="flex h-full items-center justify-center">
      <div className="mx-auto w-full">
      <form className="card-body w-full ">
       <div className="sm:flex items-center gap-3 w-full justify-between">  
       <div className="form-control w-full">
          <label htmlFor="fullName" className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input id="fullName" type="text" placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" disabled value={'email'} className="input input-bordered" required />
        </div>
       </div>
       <div className="sm:flex items-center gap-3">
          {/* form */}
          <div className="form-control w-full">
          <label htmlFor="Gender" className="label">
            <span className="label-text">Gender</span>
          </label>
         <select className="select select-bordered" name="" id="">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
         </select>
        </div>
         {/* form */}
         <div className="form-control w-full">
          <label htmlFor="photo" className="label">
            <span className="label-text">Profile Photo</span>
          </label>
          <input id="photo" type="file" placeholder="photo" className="file-input w-full file-input-bordered" required />
        </div>
       </div>
        {/* form */}
        <div className="form-control w-full">
          <label htmlFor="bio" className="label">
            <span className="label-text">Bio</span>
          </label>
          <textarea id="bio" type="text" placeholder="BIO" className="textarea textarea-bordered" required />
        </div>
       <div className="sm:flex items-center gap-3">
          {/* form */}
          <div className="form-control w-full">
          <label htmlFor="username" className="label">
            <span className="label-text">username</span>
          </label>
          <input id="username" type="text" placeholder="username" className="input input-bordered" required />
        </div>
         {/* form */}
         <div className="form-control w-full">
          <label htmlFor="phone" className="label">
            <span className="label-text">Phone</span>
          </label>
          <input id="phone" type="text" placeholder="Phone" className="input input-bordered" required />
        </div>
       </div>
       <div className="sm:flex items-center gap-3">
          {/* form */}
          <div className="form-control w-full">
          <label htmlFor="education" className="label">
            <span className="label-text">Education</span>
          </label>
          <input id="education" type="text" placeholder="education" className="input input-bordered" required />
        </div>
         {/* form */}
         <div className="form-control w-full">
          <label htmlFor="work" className="label">
            <span className="label-text">Work</span>
          </label>
          <input id="work" type="text" placeholder="work" className="input input-bordered" required />
        </div>
       </div>





        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      </div>
    </section>
  );
}

export default UserEdit;
