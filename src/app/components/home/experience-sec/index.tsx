import React from 'react';

const ExperienceSec = () => {
    const experiences = [

        {
            year: "May 2024 - Present",
            title: "React JS / Front-End & React Native Developer",
            company: "Steve`s AI Lab Pvt Ltd, Indore",
            type: "Fulltime",
            active: true,
            description:
                "Developing modern and responsive web applications using React.js, Next.js, HTML, CSS, and JavaScript. Also building cross-platform mobile applications using React Native. Working on AI-powered solutions, integrating secure APIs, and optimizing application performance to deliver scalable and user-friendly products."
        },
        {
            year: "Jan 2023 - Feb 2024",
            title: "Full Stack Developer (MERN Stack)",
            company: "DreamWorks Software`s, Indore",
            type: "Fulltime",
            active: false,
            description:
                "Developed scalable full-stack applications using React.js, Next.js for frontend and Node.js with Express.js for backend. Worked with MongoDB and built responsive and user-friendly applications."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div
                                            className={`w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center ${exp.active ? "border-primary" : "border-black"
                                                }`}
                                        >
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full ${exp.active ? "bg-primary" : "bg-black"
                                                    }`}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;