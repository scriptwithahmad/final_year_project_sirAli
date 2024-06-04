"use client";
import axios from "axios";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import queryString from "query-string";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";

import { format, render, cancel, register } from "timeago.js";

const tableHeader = [
  { lable: "User", align: "text-left" },
  { lable: "Designation", align: "text-left" },
  { lable: "Admin", align: "text-left" },
  { lable: "Username", align: "text-left" },
  { lable: "Actions", align: "text-center" },
];

const UserTable = () => {
  var router = useRouter();

  // Get All Items Stored in Database ------------------------------------------------------
  var [filters, setFilters] = useState({
    keyword: "",
    page: 1,
  });

  const { data, isLoading, isError, refetch } = useQuery(
    ["users", filters],
    async () => {
      var res = await axios.get(`/api/users?${queryString.stringify(filters)}`);
      return res.data.message;
    }
  );

  const filtersChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({ ...filters, page: 1, [name]: value });
  };

  // Delete an Item From Database ---------------------------------------------------------
  const deleteItem = async (id) => {
    if (!window.confirm("Are you sure to delete this User?")) {
      return;
    }
    try {
      var res = await axios.delete(`/api/users/${id}`);
      if (res.data.success) {
        toast.success(res.data.message);
        refetch()
      }
    } catch (error) {
      toast.success("Something went wrong!");
    }
  };

  return (
    <div className="h-full">
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
              onClick={() => router.push("/users/upload")}
              title="Add New User"
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
                              className="w-full h-full"
                              src={v.photo || "/images/user.png"}
                            />
                          </div>
                          {v.fullName}
                        </td>

                        <td className={`px-6 py-2 ${tableHeader[1].align}`}>
                          {v.designation || "Not Found"}
                        </td>

                        <td className={`px-6 py-2 ${tableHeader[2].align}`}>
                          {v.isAdmin ? "Administrator" : "User"}
                        </td>

                        <td className={`px-6 py-2 ${tableHeader[3].align}`}>
                          {v.username}
                        </td>

                        <td className="px-6 py-2 whitespace-nowrap  text-lg text-center">
                          <i
                            onClick={() => router.push(`/users/edit/${v._id}`)}
                            title="Edit"
                            className="bx p-1 cursor-pointer hover:bg-gray-100 rounded-full  bx-edit text-indigo-600"
                          ></i>

                          <i
                            onClick={() => deleteItem(v._id)}
                            title="Delete"
                            className="bx p-1 cursor-pointer hover:bg-gray-100 rounded-full bx-trash text-red-600"
                          ></i>
                        </td>
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
    </div>
  );
};

export default UserTable;
