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
  { lable: "Department", align: "text-left" },
  { lable: "Employee Role", align: "text-center" },
  { lable: "Phone", align: "text-left" },
];

const UserTable = () => {
  var { user } = useContext(AuthContext);
  var aType = user?.rights?.find((r) => r.resource == "employees")?.accessType;

  // Get All Items Stored in Database ------------------------------------------------------
  var [filters, setFilters] = useState({
    keyword: "",
    page: 1,
    limit: 20,
  });

  const { data, isLoading, isError, refetch } = useQuery(
    ["employees", filters],
    async () => {
      var res = await axios.get(
        `/api/employees?${queryString.stringify(filters)}`
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
  const [tempImage, setTempImage] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const formRef = useRef();

  const [formData, setFormData] = useState({
    photo: "",
    fullName: "",
    department: "",
    salary: "",
    allowance: "",
    deduction: "",
    overtime: "",
    bonus: "",
    loan: "",
    jobDescription: "",
    cnic: "",
    designation: "",
    phone: "",
    email: {
      value: "",
    },
    dob: "",
    joining_date: "",
    checkin: "",
    checkout: "",
    rights: [],
  });

  const resetForm = () => {
    setFormData({
      photo: "",
      fullName: "",
      department: "",
      salary: "",
      allowance: "",
      deduction: "",
      overtime: "",
      bonus: "",
      loan: "",
      jobDescription: "",
      cnic: "",
      designation: "",
      phone: "",
      email: {
        value: "",
      },
      dob: "",
      joining_date: "",
      checkin: "",
      checkout: "",
      rights: [],
    });
    setTempImage("");
    setFormMode("create");
  };

  const formInputs = [
    {
      lable: "Employee Name",
      name: "fullName",
      type: "text",
    },
    {
      lable: "Department",
      name: "department",
      type: "select",
      id: "department",
      options: [
        "Management",
        "Development",
        "Art & Designing",
        "Digital Marketing",
        "SEO",
        "E-Commerce",
      ],
    },
    {
      lable: "Department Role",
      name: "designation",
      id: "designation",
      type: "select",
      options: ["Hod", "Assitance Proffessor", "Professor"],
    },
    {
      lable: "Job Description",
      name: "jobDescription",
      type: "text",
      // span:"col-span-2"
    },
    {
      lable: "Joining Date",
      name: "joining_date",
      type: "date",
    },
    {
      lable: "Date of Birth",
      name: "dob",
      type: "date",
    },
    {
      lable: "CNIC",
      name: "cnic",
      mask: "99999-9999999-9",
      type: "mask",
    },
    {
      lable: "Whatsapp Contact",
      name: "phone",
      mask: "03999999999",
      type: "mask",
    },
    {
      lable: "Email",
      name: "email.value",
      type: "email",
    },
    {
      lable: "Username",
      name: "username",
      type: "text",
    },
  
    {
      lable: "Password",
      name: "password",
      type: "password",
    },
    {
      lable: "Salary",
      name: "salary",
      type: "number",
    },
    {
      lable: "Allowance",
      name: "allowance",
      type: "number",
    },
    {
      lable: "Deduction",
      name: "deduction",
      type: "number",
    },
    {
      lable: "Overtime",
      name: "overtime",
      type: "number",
    },
    {
      lable: "Bonus",
      name: "bonus",
      type: "number",
    },
    {
      lable: "Loan",
      name: "loan",
      type: "number",
    },
  ];
  var rights = [
    {
      resource: "employees",
      label: "Employees",
    },
    {
      resource: "applications",
      label: "Applications",
    },
    {
      resource: "applicationsre",
      label: "Applications Review",
    },
    {
      resource: "meatings",
      label: "Meatings",
    },
    {
      resource: "events",
      label: "Events",
    },
    {
      resource: "chats",
      label: "Chats",
    },
    {
      resource: "documents",
      label: "Documnets",
    },
  ];
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "email.value") {
      setFormData({ ...formData, email: { value } });
      return;
    }
    if (name.startsWith("rights")) {
      var rightsCopy = formData.rights;
      if (name == "rights.resource") {
        if (e.target.checked) {
          rightsCopy.push({ resource: value, accessType: "readOnly" });
        } else {
          rightsCopy = rightsCopy.filter((v) => v.resource != value);
        }
      }
      if (name.startsWith("rights.accessType")) {
        rightsCopy = rightsCopy.map((v) => {
          if (v.resource == name.split(".")[2]) {
            v.accessType = value;
          }
          return v;
        });
      }

      setFormData({ ...formData, rights: rightsCopy });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };
  const uploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", tempImage);
      data.append("upload_preset", "ng25a2ez");

      var folderName = `employees/${new Date().getFullYear()}/${new Date().toLocaleString(
        "default",
        { month: "long" }
      )}`;
      data.append("folder", folderName);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dqdsf1q5t/image/upload",
        {
          body: data,
          method: "POST",
        }
      );

      const jsonRes = await res.json();

      return jsonRes.secure_url;
    } catch (error) {
      alert("Something wrong! while Uplading image");
    }
  };

  const addNewItemHandle = async (e) => {
    e.preventDefault();

    try {
      setFormLoading(true);

      const imgUrl = tempImage
        ? await uploadImageToCloudinary()
        : formData.photo;

      var res;

      if (formMode == "create") {
        res = await axios.post(`/api/employees`, {
          ...formData,
          photo: imgUrl,
          isApproved: true,
        });
        if (res.data.success) {
          resetForm();
          toast.success(res.data.message);
        }
      } else if (formMode == "update") {
        res = await axios.put(`/api/employees/${formData._id}`, {
          ...formData,
          photo: imgUrl,
        });
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
    item.joining_date = item.joining_date.substring(0, 10);
    item.dob = item.dob.substring(0, 10);

    window.document.getElementById("phone").value = item.phone;
    window.document.getElementById("cnic").value = item.cnic;

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
      var res = await axios.delete(`/api/employees/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success("Something went wrong!");
    }
  };

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
                ? [1, 2, 3, 4, 5].map((v, i) => {
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
                          <div className="w-8 h-8 border-gray-300 border mr-2 rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-cover"
                              src={v.photo || "/images/user.png"}
                              alt=""
                            />
                          </div>
                          {v.fullName}
                        </td>

                        <td className={`px-6 py-2 ${tableHeader[1].align}`}>
                          {v.designation}
                        </td>
                        <td className={`px-6 py-2 ${tableHeader[2].align}`}>
                          {v.department}
                        </td>
                        <td className={`px-6 py-2 ${tableHeader[3].align}`}>
                          {v.phone}
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

            <div className="absolute -bottom-8 px-6">
              <input
                type="file"
                name="photo"
                id="photo"
                className="hidden"
                onChange={(e) => {
                  setTempImage(e.target.files[0]);
                  setFormData({ ...formData, photo: "" });
                }}
              />
              <label
                className="relative h-32 group w-32 border-[5px] border-white rounded-full overflow-hidden block"
                htmlFor={formMode != "read" && "photo"}
              >
                <img
                  className="h-32 w-32 object-cover rounded-full"
                  src={
                    formData.photo
                      ? formData.photo
                      : tempImage
                      ? URL.createObjectURL(tempImage)
                      : "/images/newUser.png"
                  }
                  alt="image here"
                />
                {formMode != "read" && (
                  <div className="absolute group-hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer bottom-0 left-0 text-center bg-black/30 w-full text-white">
                    <i className="bx bx-camera"></i>
                  </div>
                )}
              </label>
            </div>

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

          <div className="grid p-6 grid-cols-2 gap-4">
            {formInputs.map((v, i) => {
              if (formMode != "create" && v.type == "password") {
                return null;
              }

              var label = (
                <label className="w-full block text-sm" htmlFor={v.name}>
                  {v.lable}
                </label>
              );

              switch (v.type) {
                case "mask":
                  return (
                    <div
                      key={i}
                      className={` ${v.span || "col-span-2 sm:col-span-1"}`}
                    >
                      {label}
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
                    </div>
                  );
                  break;
                case "select":
                  return (
                    <div
                      key={i}
                      className={` ${v.span || "col-span-2 sm:col-span-1"}`}
                    >
                      {label}
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
                    </div>
                  );
                  break;
                case "email":
                  return (
                    <div
                      key={i}
                      className={` ${v.span || "col-span-2 sm:col-span-1"}`}
                    >
                      {label}
                      <input
                        required
                        id={v.name}
                        value={formData?.email?.value}
                        onChange={changeHandler}
                        name={v.name}
                        placeholder={v.lable}
                        type={v.type}
                        disabled={formMode == "read"}
                        className={`w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                      />
                    </div>
                  );
                  break;
                default:
                  return (
                    <div
                      key={i}
                      className={` ${
                        formMode == "create" && v.name == "password"
                          ? "col-span-2"
                          : "col-span-2 sm:col-span-1"
                      }`}
                    >
                      {label}
                      <input
                        required
                        id={v.name}
                        value={formData[v.name]}
                        onChange={changeHandler}
                        name={v.name}
                        placeholder={v.lable}
                        type={v.type}
                        disabled={formMode == "read"}
                        className={`w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                      />
                    </div>
                  );
                  break;
              }
            })}
          </div>

          <div className=" p-6 col-span-2">
            <label htmlFor="">Access Rights</label>
            {rights.map((v, i) => {
              return (
                <div
                  key={i}
                  className="border my-4 shadow-sm rounded-md overflow-hidden"
                >
                  <div className="border-b px-4 py-2 bg-gray-100">
                    <input
                      type="checkbox"
                      onChange={changeHandler}
                      className="mr-2"
                      value={v.resource}
                      name="rights.resource"
                      id={v.resource}
                    />
                    <label htmlFor={v.resource}>{v.label}</label>
                  </div>

                  {formData.rights.find(
                    (right) => right.resource == v.resource
                  ) ? (
                    <div className="grid p-4 grid-cols-2 sm:grid-cols-4 text-sm">
                      <div>
                        <input
                          type="radio"
                          name={`rights.accessType.${v.resource}`}
                          onChange={changeHandler}
                          checked={
                            formData.rights.find(
                              (item) => item.resource == v.resource
                            ).accessType == "readOnly"
                          }
                          id={`rights.${v.resource}.readOnly`}
                          value="readOnly"
                          className="mr-2"
                        />
                        <label htmlFor={`rights.${v.resource}.readOnly`}>
                          Read Only
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name={`rights.accessType.${v.resource}`}
                          onChange={changeHandler}
                          checked={
                            formData.rights.find(
                              (item) => item.resource == v.resource
                            ).accessType == "readAndUpdate"
                          }
                          id={`rights.${v.resource}.readAndUpdate`}
                          value="readAndUpdate"
                          className="mr-2"
                        />
                        <label htmlFor={`rights.${v.resource}.readAndUpdate`}>
                          Read & Edit
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name={`rights.accessType.${v.resource}`}
                          onChange={changeHandler}
                          checked={
                            formData.rights.find(
                              (item) => item.resource == v.resource
                            ).accessType == "full"
                          }
                          id={`rights.${v.resource}.full`}
                          value="full"
                          className="mr-2"
                        />
                        <label htmlFor={`rights.${v.resource}.full`}>
                          Full Access
                        </label>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
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
