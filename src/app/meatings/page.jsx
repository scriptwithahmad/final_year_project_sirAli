"use client";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { InputMask } from "primereact/inputmask";
import Loader from "@/src/components/Loader";
import { toast } from "react-hot-toast";
import queryString from "query-string";
import { useQuery } from "react-query";
import { useContext } from "react";
import { AuthContext } from "@/src/context/AuthContext";

const tableHeader = [
  { lable: "Name", align: "text-left" },
  { lable: "Status", align: "text-left" },
  { lable: "Room", align: "text-center" },
  { lable: "Start Time", align: "text-center" },
  { lable: "End Time", align: "text-center" },
  { lable: "Date Of Meating", align: "text-center" },
];

const UserTable = () => {
  var { user } = useContext(AuthContext);
  var aType = user?.rights?.find((r) => r.resource == "meatings")?.accessType;

  // Get All Items Stored in Database ------------------------------------------------------
  var [filters, setFilters] = useState({
    keyword: "",
    page: 1,
    limit: 20,
  });

  const { data, isLoading, isError, refetch } = useQuery(
    ["meatings", filters],
    async () => {
      var res = await axios.get(
        `/api/meatings?${queryString.stringify(filters)}`
      );
      return res.data.message;
    }
    );
    





  const filtersChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({ ...filters, page: 1, [name]: value });
  };

  // Add New Item in Database --------------------------------------------------------------
  var [showForm, setShowForm] = useState(false);
  const [formMode, setFormMode] = useState("create");
  const [formLoading, setFormLoading] = useState(false);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    room: "",
    date:"",
    startTime: "",
    endTime: "",
    participants: [],
  });

  


  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date:"",
      room: "",
      startTime: "",
      endTime: "",
      participants: [],
    });
    setFormMode("create");
  };

  const formInputs = [
    {
      lable: "Meating Title",
      name: "title",
      type: "text",
    },
    
    {
      lable: "Venue",
      name: "room",
      type: "text",
    },
    {
      lable: "Start Time",
      name: "startTime",
      type: "time",
    },
    {
      lable: "End Time",
      name: "endTime",
      type: "time",
    },
    {
      lable: "Meating Date",
      name: "date",
      type: "date",
    },
    {
      lable: "Description",
      name: "description",
      type: "text",
    },
    
  ];

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const checked = e.target.checked
    if (name == "participants") {
      var prevUserIDs = formData.participants;

      if (e.target.checked) {
        prevUserIDs.push(value);
      } else {
        prevUserIDs = prevUserIDs.filter((i) => i != value);
      }
      setFormData({ ...formData, participants: prevUserIDs });
      return;
    }
   


   
   

    setFormData({ ...formData, [name]: value });
  };

  const addNewItemHandle = async (e) => {
    e.preventDefault();

    try {
      setFormLoading(true);

   

      var res;

      if (formMode == "create") {
        res = await axios.post(`/api/meatings`, formData);
        if (res.data.success) {
          resetForm();
          toast.success(res.data.message);
        }
      } else if (formMode == "update") {
        res = await axios.put(`/api/meatings/${formData._id}`,
         formData,
          // photo: imgUrl,
      );
        if (res.data.success) {
          // resetForm()
          setFormMode("read");
          toast.success(res.data.message);
        }
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      refetch();
      setFormLoading(false);
    }
  };



  // Get Single Item in Form Model in Read Only mode and After That there is Edit Button To Edit
  const showSingleItemDetail = (item) => {
    item.date = item.date.substring(0, 10);


    setFormMode("read");
    setShowForm(true);
    setFormData(item);

  };







  // Delete an Item From Database ---------------------------------------------------------
  const deleteItem = async (id) => {
    if (!window.confirm("Pakka?")) {
      return;
    }
    try {
      var res = await axios.delete(`/api/meatings/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success("Something went wrong!");
    }
  };
  const users = useQuery(["users"], async () => {
    var res = await axios.get(`/api/employees?meatingUsers=true`);
    // console.log(res.data)
    return res.data.message;
  });


 











  return (
    <div className="h-full">
      {formLoading && <Loader />}

      {/* All Items */}
      <div className="w-full h-full flex flex-col rounded-lg">
        {/* Header with table title, search, filters and add new item Button */}
        <div className="py-4 flex justify-end items-center flex-col gap-3 lg:flex-row">
          <div className="flex items-center">
            <div className="relative">
              <input
                onChange={filtersChangeHandler}
                name="keyword"
                value={filters.keyword}
                className="border border-gray-200 text-gray-400 text-sm pl-3 p-2 rounded-full focus:border-gray-400 transition-colors focus:text-gray-400"
                type="search"
                placeholder="Search here..."
              />
              {!filters.keyword && (
                <i className="absolute top-1/2 -translate-y-1/2 right-3 border-l pl-2 cursor-pointer text-gray-400 hover:text-gray-500 bx bx-search"></i>
              )}
            </div>
            <i
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              title="Add New Employee"
              className="bx ml-2 text-lg border p-1 shadow-xl hover:bg-indigo-400 cursor-pointer bg-indigo-500 text-white rounded-full bx-plus"
            ></i>
          </div>
        </div>

        {/* Table */}
        <div className="w-full border-gray-300 flex-1 border rounded-md overflow-auto">
          <table className="text-sm relative min-w-[1000px] w-full text-left text-gray-500">
            <thead className="text-xs sticky top-0 backdrop-blur-sm bg-white/80 text-gray-700">
              <tr>
                {tableHeader.map((value, index) => {
                  return (
                    <th
                      scope="col"
                      key={index}
                      className={`px-6 py-3 ${value.align}`}
                    >
                      {value.lable}
                    </th>
                  );
                })}

                {aType != "readOnly" && (
                  <th scope="col" className={`px-6 py-3 text-center`}>
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {isLoading
                ? [1, 2, 3, 4].map((v, i) => {
                    return (
                      <tr key={i}>
                        {tableHeader.map((a, b) => {
                          return (
                            <td key={b} className="p-2">
                              <div
                                className={`bg-white/50 border px-5 py-1 text-transparent border-indigo-200 rounded-md animate-pulse ${a.align}`}
                              >
                                {a.lable}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                : data.data?.map((v, i) => {
                  
                    return (
                      <tr
                        key={i}
                        className="border-b text-black border-gray-300"
                      >
                        <td
                          scope="row"
                          className="px-6 flex items-center py-2 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {/* <div className="w-8 h-8 border-gray-300 border mr-2 rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={v.photo || "/images/user.png"}
                              alt=""
                            />
                          </div> */}
                          {v.title}
                        </td>

                        <td className={`px-6 py-2 ${tableHeader[1].align}`}>
                        <div className="flex justify-center">
                              <div
                                className={`${
                                  v.status == "completed"
                                    ? "text-green-500 border-green-500"
                                    : "text-red-500 border-red-500"
                                } border text-xs py-1 px-2 rounded-md text-center `}
                              >
                                {v.status}
                              </div>
                            </div>
                        </td>
                        <td className={`px-6 py-2 ${tableHeader[2].align}`}>
                        {v.room}
                        </td>
                        <td className={`px-6 py-2 ${tableHeader[3].align}`}>
                          {v.startTime}
                        </td>
                        <td className={`px-6 py-2 ${tableHeader[4].align}`}>
                          {v.endTime}
                        </td>
                        <td className={`px-6 py-2 ${tableHeader[5].align}`}>
                          {new Date(v.date).toDateString()}
                        </td>

                        {(user?.isAdmin || aType != "readOnly") && (
                          <td className="px-6 py-2 whitespace-nowrap  text-lg text-center">
                            <i
                              onClick={() => showSingleItemDetail(v)}
                              title="Details"
                              className="bx p-1 cursor-pointer hover:bg-gray-100 rounded-full  bx-detail text-indigo-600"
                            ></i>

                            {(user?.isAdmin || aType == "full") && (
                              <i
                                onClick={() => deleteItem(v._id)}
                                title="Delete"
                                className="bx p-1 cursor-pointer hover:bg-gray-100 rounded-full bx-trash text-red-600"
                              ></i>
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex text-sm justify-end items-center gap-2 py-4 text-[#666]">
          <span>
            {data?.starting}-{data?.ending} of {data?.count}
          </span>
          <div className="flex items-center text-2xl gap-2">
            <button
              disabled={filters.page == 1}
              title="Prev"
              onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
              className="hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-default w-6 flex items-start justify-center h-6 cursor-pointer rounded-full"
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              disabled={data?.ending == data?.count}
              title="Next"
              onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
              className="hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-default w-6 flex items-start justify-center h-6 cursor-pointer rounded-full"
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

{/* pop up modal */}
      <div
        style={{
          visibility: showForm ? "visible" : "hidden",
          opacity: showForm ? "1" : "0",
          transition: ".4s",
        }}
        className="fixed z-10 top-0 left-0 w-full h-screen border-red-600 backdrop-blur-[2px] bg-[#00000094] overflow-auto"
      >
        <form
          ref={formRef}
          onSubmit={addNewItemHandle}
          className={`${
            showForm ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } bg-white duration-500 mx-auto my-10 relative overflow-hidden max-w-3xl border rounded-lg`}
        >
          {/* Form Header with Profile Pic */}
          <div className="relative mb-10">
            <img src="/images/userbanner.jpg" alt="" />

            

            <i
              onClick={() => setShowForm(false)}
              className="bx bx-x cursor-pointer absolute top-4 right-4 bg-indigo-100 border-indigo-300 border text-indigo-700 hover:bg-indigo-200 rounded-full p-1"
            ></i>

            {formMode == "read" && (
              <i
                onClick={() => setFormMode("update")}
                title="Click to Edit"
                className="bx text-gray-600 rounded-full p-2 text-2xl duration-200 cursor-pointer hover:bg-gray-100 absolute -bottom-14 right-6 bx-pencil"
              ></i>
            )}
          </div>

          <div className="grid p-6 grid-cols-6 gap-4">
            {formInputs.map((v, i) => {
              return (
                <div key={i} className={`${v.name === "description" ? "col-span-6":"col-span-3"}`}>
                  <label className="w-full block text-sm" htmlFor={v.name}>
                    {v.lable}
                  </label>
                  {v.mask ? (
                    <InputMask
                      required
                      mask={v.mask}
                      id={v.name}
                      onChange={changeHandler}
                      value={formData[v.name]}
                      name={v.name}
                      placeholder={v.lable}
                      type={v.type}
                      disabled={formMode == "read"}
                      className={`w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                    />
                  ) : v.type == "select" ? (
                    <select
                      value={formData[v.name]}
                      required
                      onChange={changeHandler}
                      // value={formData[v.name]}
                      name={v.name}
                      id={v.name}
                      disabled={formMode == "read"}
                      className={`w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                    >
                      <option value="">Select Option</option>
                      {v.options.map((a, b) => {
                        return <option key={b}>{a}</option>;
                      })}
                    </select>
                  ) : v.type =="date"?(
                    <input
                    required
                    id={v.name}
                    value={formData[v.name]}
                    onChange={changeHandler}
                    name="date"
                    placeholder={v.lable}
                    type={v.type}
                    disabled={formMode == "read"}
                    className={` w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                  />
                  ) : (
                    <input
                      required
                      id={v.name}
                      value={formData[v.name]}
                      onChange={changeHandler}
                      name={v.name}
                      placeholder={v.lable}
                      type={v.type}
                      disabled={formMode == "read"}
                      className={` w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                    />
                  )}
                </div>
              );
            })}
          </div>


          <div className=" p-6 col-span-2">
            <label htmlFor="">Send to participants</label>
            {users?.data?.data?.map((v, i) => (
              <div key={i} className=" flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.participants.includes(v._id)}
                  name="participants"
                  value={v?._id}
                  onChange={changeHandler}
                  id={v?._id}
                />
                <label
                  htmlFor={v?._id}
                  className=" text-sm  text-blue-500 p-1 "
                >
                  {v?.fullName}
                </label>
              </div>
            ))}
          
          </div>





          {formMode != "read" && (
            <div className="col-span-6 p-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="border-blue-600 border hover:bg-blue-100 px-5 py-2 rounded-md text-blue-500 mr-3"
              >
                Cancel
              </button>

              <button className="bg-blue-600 border-blue-600 border hover:bg-blue-500 px-5 py-2 rounded-md text-white">
                <span>
                  {formLoading
                    ? "Processing..."
                    : formMode == "create"
                    ? "Submit"
                    : "Update"}{" "}
                </span>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserTable;
