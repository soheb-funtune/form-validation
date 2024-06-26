"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [quranList, setQuranList] = useState<any>([]);

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    const apiUrl = `https://api.alquran.cloud/v1/edition
    `;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.data[0]);
        setQuranList(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="lg:max-w-[800px] p-3 m-auto  flex flex-col">
      <h3
        className=" pb-1 mb-3 relative 
       before:absolute before:w-10 before:h-[3px] before:bg-red-500
        before:let-0  before:bottom-0 before:rounded-[40px]"
      >
        Hadees Category
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 ">
        {quranList?.map(({ identifier, englishName, language, name }: any) => (
          <Link
            href={`/quran/${identifier}`}
            className="link-tag flex flex-col gap-3 relative  cursor-pointer shadow-md rounded-lg px-3 pt-7 pb-5 text-[13px]"
          >
            <p>
              {name} | {identifier}
            </p>
            <small className="">{englishName}</small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
