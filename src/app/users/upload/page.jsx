"use client";
import { useState, useRef, useEffect, useContext, cloneElement } from "react";
import { InputMask } from "primereact/inputmask";
import { toast } from "react-hot-toast";
import axios from "axios";
import Loader from "@/src/components/Loader";
import { AuthContext } from "@/src/context/AuthContext";

var rights = [
  {
    resource: "users",
    label: "Users",
  },
  {
    resource: "employees",
    label: "Employees",
  },
  {
    resource: "attendance",
    label: "Attendance",
  },
  {
    resource: "courses",
    label: "Courses",
  },
  {
    resource: "blogs",
    label: "Blogs",
  },
  {
    resource: "enquiries",
    label: "Enquiries",
  },
  {
    resource: "certificates",
    label: "Certificates",
  },
  {
    resource: "programs",
    label: "Programs",
  },
  {
    resource: "news",
    label: "News and Updates",
  },
];

const Page = ({ params }) => {
  var { user } = useContext(AuthContext);

  const [formLoading, setFormLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    designation: "",
    email: {
      value: "",
    },
    password: "",
    rights: [],
  });

  const resetForm = () => {
    setFormData({
      fullName: "",
      username: "",
      designation: "",
      password: "",
      rights: [],
    });
  };

  const [programs, setPrograms] = useState([]);

  const formInputs = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      cols: 2,
    },
    {
      label: "Designation",
      name: "designation",
      type: "text",
      cols: 1,
    },
    {
      label: "Email",
      name: "email.value",
      type: "email",
      cols: 1,
    },
    {
      label: "Portal Username",
      name: "username",
      type: "text",
      cols: 1,
    },
    {
      label: "Portal Password",
      name: "password",
      type: "text",
      cols: 1,
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

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setFormLoading(true);

      var res = await axios.post(`/api/users`, {
        ...formData,
        isApproved: true,
      });
      if (res.data.success) {
        resetForm();
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setFormLoading(false);
    }
  };

  const getAllPrograms = async () => {
    var { data } = await axios.get("/api/programs");
    setPrograms(data.message.data);
  };

  useEffect(() => {
    getAllPrograms();
  }, []);

  return (
    <div>
      {formLoading && <Loader />}

      <form
        onSubmit={submitForm}
        className={`overflow-hidden border-blue-200 shadow-lg border bg-white max-w-3xl duration-500 mx-auto relative rounded-lg`}
      >
        <img src="/images/userbanner.jpg" className="mb-5" alt="" />

        <div className="grid grid-cols-2 p-4 gap-6">
          {formInputs.map((v, i) => {
            return (
              <div key={i} className={`relative bg-white col-span-${v.cols}`}>
                {v.mask ? (
                  <InputMask
                    required
                    mask={v.mask}
                    id={v.name}
                    onChange={changeHandler}
                    value={formData[v.name]}
                    name={v.name}
                    placeholder=""
                    type={v.type}
                    className={`w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                  />
                ) : v.type == "select" ? (
                  <select
                    value={formData[v.name]}
                    required
                    onChange={changeHandler}
                    name={v.name}
                    id={v.name}
                    className={`w-full py-2 placeholder:text-sm rounded-md px-3 border-gray-300 focus:outline-none focus:border-indigo-500 border`}
                  >
                    <option value="">Select Option</option>
                    {v.options.map((a, b) => {
                      return (
                        <option value={a.value} key={b}>
                          {a.label}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  <input
                    required
                    id={v.name}
                    value={formData[v.name]}
                    onChange={changeHandler}
                    name={v.name}
                    placeholder=""
                    type={v.type}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  />
                )}
                <label
                  className="absolute rounded-sm bg-white text-sm text-gray-500  duration-300 transform -translate-y-4 scale-[0.85] top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[0.85] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  htmlFor={v.name}
                >
                  {v.label}
                </label>
              </div>
            );
          })}


          <div className="col-span-2">
            <label htmlFor="">Access Rights</label>
            {rights.map((v, i) => {
              return (
                <div key={i} className="border my-4 shadow-sm rounded-md overflow-hidden">
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

          <div className="col-span-2 flex justify-end">
            <button
              type="reset"
              onClick={resetForm}
              className="border-blue-600 border hover:bg-blue-100 px-5 py-2 rounded-md text-blue-500 mr-3"
            >
              Reset
            </button>

            <button className="bg-blue-600 border-blue-600 border hover:bg-blue-500 px-5 py-2 rounded-md text-white">
              <span>{formLoading ? "Processing..." : "Generate"}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
