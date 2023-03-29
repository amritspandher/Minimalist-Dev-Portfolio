import React from 'react';

function Intro() {
    return (
        <div className="flex items-center 
        justify-center 
        flex-col 
        text-center 
        pt-20 pb-6">
            <h1 className="text-4x1 
            md:text-7xl 
            mb-1 
            md:mb-3 
            font-bold">
            Amrit
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Data Analyst</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I am a recent graduate with a B.S. in Computer Science (August 2022).
                My goal is to utilize my experience and aptitude from working in team-oriented environments during an opportunity to gain experience in the field of software engineering. 
                I have more than 3 years of experience striving towards sales goals and communicating efficiently with clientele.
                <br />
                My current pursuit is performing data analyses and trend detection of large datasets in the domain of health and growing my knowledge of optimized coding/problem solving.
                If you would like to connect feel free to reach out!  </p>
        </div>
    )
}

export default Intro;