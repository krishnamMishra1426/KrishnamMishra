"use client";
import { getDataPath } from "@/utils/image";
import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducation(data?.educationData?.education || []);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Education</h2>
          <p className="text-xl text-orange-500 font-medium">( 03 )</p>
        </div>

        <div className="relative border-l-2 border-softGray ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative group">

              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-orange-500 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-black group-hover:text-orange-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="bg-softGray/40 p-6 rounded-2xl border border-softGray/50 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
