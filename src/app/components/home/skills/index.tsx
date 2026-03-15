"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSkills(data?.educationData?.skills || []);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
<div className="flex items-center border-b border-black pb-5 mb-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
    Skills & Expertise
  </h2>

  <p className="ml-auto text-base sm:text-lg md:text-xl text-orange-500 font-medium">
    ( 04 )
  </p>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-softGray rounded-3xl flex flex-col items-center text-center gap-6 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              <div className="relative w-20 h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={getImgPath(skill.icon)}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              <div className="space-y-4 w-full">
                <p className="text-xl font-bold text-black group-hover:text-orange-600 transition-colors">
                  {skill.name}
                </p>
                
                <div className="flex justify-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        i < skill.rating 
                          ? "bg-orange-500 scale-110 shadow-[0_0_8px_rgba(254,67,0,0.4)]" 
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Hover highlight effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-orange-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
