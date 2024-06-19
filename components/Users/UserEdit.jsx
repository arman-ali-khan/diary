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
    <section className="flex h-full items-center justify-center p-12">
      <div className="mx-auto w-full ">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="">
                <label
                  for="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="">
                <label
                  for="lName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="">
            <label
              for="guest"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              How many guest are you bringing?
            </label>
            <input
              type="number"
              name="guest"
              id="guest"
              placeholder="5"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* location */}
          <div>
            {/* divisions */}
            <select
              className="px-4 py-2 border"
              onChange={(e) => {
                setSelectDivision(e.target.value)
                setLocation(e.target.name)
            }}
              name="location"
              id="location"
            >
              {divisions?.map((div) => {
                return (
                  <option key={div?._id} value={div?.division}>
                    {div?.divisionbn}
                  </option>
                );
              })}
            </select>
            {/* districts */}
            {districts?.length ? (
              <select
                className="px-4 py-2 border"
                onChange={(e) => {
                    setUpazillas(e.target.value)
                    setLocation(e.target.key)
                }}
                id="location2"
              >
                {districts?.map((dis) => {
                  return (
                    <option key={dis?._id} value={dis?.upazilla}>
                      {dis?.district}
                    </option>
                  );
                })}
              </select>
            ) : (
              ""
            )}
            {/* upazillas */}
            {upazillas?.length ? (
              <select
                className="px-4 py-2 border"
                  onChange={(e) => setLocation(e.target.value)}
                name="location2"
                id="location2"
              >
                {!upazillas?.length
                  ? ""
                  : upazillas?.split(",")?.map((upazilla) => {
                      return (
                        <option key={upazilla} value={upazilla}>
                          {upazilla}
                        </option>
                      );
                    })}
              </select>
            ) : (
              ""
            )}
          </div>
          <div>
            <button className="hover:shadow-form inline-block rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UserEdit;
