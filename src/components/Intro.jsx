import React from 'react';

function Intro() {
    return (
        <div className="flex items-center 
        justify-center 
        flex-col 
        text-center 
        pt-20 pb-6">
            <h1 className="text-4x1 md:text-7xl mb-1 md:mb-3 font-bold
            underline decoration-dotted">
            Amrit Pandher
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium italic">Software Engineer & Data Analyst</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Business Intelligence Analyst at Spacelabs Healthcare with a focus on visualizing and 
                presenting data in digestable formats dependent on company needs. My current passion project
                involves the analysis of CDC Avian Influenza data in order to detect trends and forecasting
                potential outbreaks. If you would like to connect feel free to reach out!  </p>
            <p className="text-sm max-w-xl font-bold text-red-800">
                [Avian Influenza CDC Dataset Analysis GitHub Repo In-Progress]
            </p>
            <p className="text-sm max-w-xl font-bold text-green-600">
                [Automated Greenhouse GitHub Repo Published]
            </p>
            <p className="text-sm max-w-xl font-bold text-green-600">
                [Minimalistic Developer Portfolio GitHub Repo Published]
            </p>
        </div>
    )
}

export default Intro;