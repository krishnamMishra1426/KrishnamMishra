"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = workData?.filter((item: any) => {
    if (activeCategory === "all") return true;
    return item.application === activeCategory;
  });

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black pb-7 mb-9 md:mb-16">
              <div className="flex items-center gap-4">
                <h2>Projects</h2>
                <p className="text-xl text-orange-500">
                  ( {filteredData?.length < 10 ? `0${filteredData?.length}` : filteredData?.length || "00"} )
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {['all', 'web', 'app'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full capitalize text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                      ? 'bg-orange-500 text-white shadow-md  '
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {filteredData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={value?.image}
                        alt={value?.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized={value?.image?.startsWith('http')}
                      />
                      <Link
                        href={value?.link || "#!"}
                        target="_blank"
                        className="absolute top-0 left-0 backdrop-blur-sm bg-black/40 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                      >
                        <span className="p-4 bg-orange-500 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <Link href={value?.link || "#!"} target="_blank">
                          <h5 className="hover:text-orange-500 transition-colors">{value?.title}</h5>
                        </Link>
                        <div className="text-orange-500">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm font-medium">{value?.client}</p>
                      {value?.description && (
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                          {value.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredData?.length === 0 && (
              <div className="flex w-full justify-center items-center py-12">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;

