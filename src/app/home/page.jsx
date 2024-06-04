"use client";
import axios from "axios";
import Link from "next/link";
import queryString from "query-string";
import { useQuery } from "react-query";
import { Chart } from "primereact/chart";
import React, { useState, useEffect } from "react";
import { format, render, cancel, register } from "timeago.js";

const tableHeader = [
  { lable: "Name", align: "left" },
  { lable: "Category", align: "left" },
  { lable: "Date", align: "left" },
  { lable: "Author", align: "left" },
];

const Page = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Second Dataset",
          data: [28, 22, 33, 44, 55, 66, 77],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  // Get All Items Stored in Database ------------------------------------------------------
  var [filters, setFilters] = useState({
    keyword: "",
    page: 1,
  });

  // const { data, isLoading, isError, refetch } = useQuery(
  //   ["blogs", filters],
  //   async () => {
  //     var res = await axios.get(`/api/blogs?${queryString.stringify(filters)}`);

  //     return res.data.message;
  //   }
  // );

  const stats = useQuery(["stats"], async () => {
    var res = await axios.get(`/api/stats`);
    return res.data.message;
  });

  return (
    <>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-5 p-4">
          {/* Dashboard Card 01 -----------*/}
          <div className="bg-white rounded-lg hover:border-gray-400/50 border border-transparent hover:shadow-md py-5 px-7 flex globalShadow col-span-1">
            <div className=" flex-1">
              <h2 className=" text-slate-600 text-base mb-2">Employees</h2>
              <div className="text-slate-800 font-semibold text-lg">
                {stats?.data?.employees}
              </div>
              <p className=" my-2 text-sm text-slate-400 font-light">
                <span className="text-[#22c55e]">{stats?.data?.employees}</span>{" "}
                Newly Added Employees
              </p>
            </div>
            <div>
              <i className="bx bx-group text-blue-600 p-2 rounded-md text-3xl"></i>
            </div>
          </div>
          {/* Dashboard Card 02 -----------*/}
          <div className="bg-white rounded-lg hover:border-gray-400/50 border border-transparent hover:shadow-md py-5 px-7 flex globalShadow col-span-1">
            <div className=" flex-1">
              <h2 className=" text-slate-600 text-base mb-2">Chats</h2>
              <div className="text-slate-800 font-semibold text-lg">
                {stats?.data?.chats}
              </div>
              <p className=" my-2 text-sm text-slate-400 font-light">
                <span className="text-[#22c55e]"> {stats?.data?.chats}</span>{" "}
                Newly Added Chats
              </p>
            </div>
            <div>
              <i className="bx bx-chalkboard text-blue-600 p-2 rounded-md text-3xl"></i>
            </div>
          </div>
          {/* Dashboard Card 03 -----------*/}
          <div className="bg-white rounded-lg hover:border-gray-400/50 border border-transparent hover:shadow-md py-5 px-7 flex globalShadow col-span-1">
            <div className=" flex-1">
              <h2 className=" text-slate-600 text-base mb-2">Meatings</h2>
              <div className="text-slate-800 font-semibold text-lg">
                {stats?.data?.meatingsdata}
              </div>
              <p className=" my-2 text-sm text-slate-400 font-light">
                <span className="text-[#22c55e]">
                  {" "}
                  {stats?.data?.meatingsdata}
                </span>{" "}
                Newly Added Meatings
              </p>
            </div>
            <div>
              <i className="bx bx-book-reader text-blue-600 p-2 rounded-md text-3xl"></i>
            </div>
          </div>
          {/* Dashboard Card 04 -----------*/}
          <div className="bg-white rounded-lg hover:border-gray-400/50 border border-transparent hover:shadow-md py-5 px-7 flex globalShadow col-span-1">
            <div className=" flex-1">
              <h2 className=" text-slate-600 text-base mb-2">Events</h2>
              <div className="text-slate-800 font-semibold text-lg">
                {stats?.data?.eventdata}
              </div>
              <p className=" my-2 text-sm text-slate-400 font-light">
                <span className="text-[#22c55e]">
                  {" "}
                  {stats?.data?.eventdata}
                </span>{" "}
                Newly Added Events
              </p>
            </div>
            <div>
              <i className="bx bx-user-voice text-blue-600 p-2 rounded-md text-3xl"></i>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 px-4 py-2">
          <div className="bg-white rounded-lg py-5 flex globalShadow">
            <div className="overflow-x-auto w-full">
              <div className="p-4">
                <h2 className="text-xl text-slate-700">Recently Blogs</h2>
              </div>
              <table className="text-sm min-w-[780px] w-full text-left text-gray-500">
                <thead className="text-xs text-gray-700 bg-gray-50">
                  <tr>
                    {tableHeader.map((value, index) => {
                      return (
                        <th
                          scope="col"
                          key={index}
                          className={`px-6 py-3 text-${value.align}`}
                        >
                          {value.lable}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((v, i) => {
                    return (
                      <tr key={i} className="bg-white border-b border-gray-100">
                        <td
                          scope="row"
                          className="px-6 flex items-center py-3 text-gray-600"
                        >
                          <div className="w-10 h-10 mr-3 overflow-hidden">
                            <img
                              className="w-full h-full object-contain"
                              src={v.featuredImage?.url || "/images/image.png"}
                              alt="Image Here"
                            />
                          </div>
                          <h2 className=" line-clamp-1 font-normal">
                            {v.title}
                          </h2>
                        </td>
                        <td className="px-6 py-3"> {v.category} </td>
                        <td className="px-6 py-3">
                          {format(new Date(v.createdAt), "en_US")}{" "}
                        </td>
                        <td className="px-6 py-3"> {v.author?.fullName} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className=" flex items-center justify-center gap-4 w-full my-5 border-b border-gray-100 pb-4">
                <i className="bx bx-chevrons-left text-gray-400 text-base"></i>
                <i className="bx bx-chevron-left text-gray-400 text-base"></i>
                <div className="flex items-center">
                  <span className="bg-[#EEF2FF] text-blue-600 text-xs p-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
                    1
                  </span>
                  <span className="text-xs text-gray-500 p-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
                    2
                  </span>
                </div>
                <i className="bx bx-chevron-right text-gray-400 text-base"></i>
                <i className="bx bx-chevrons-right text-gray-400 text-base"></i>
              </div>
            </div>
          </div>

          <div className="card bg-white rounded-lg py-5 px-7 flex globalShadow">
            <Chart
              type="line"
              data={chartData}
              className="w-full"
              options={chartOptions}
            />
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Page;
