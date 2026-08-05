import React from 'react';

const DnaStrand = ({ skills }) => {
  return (
    <div className="relative py-1">
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 lab-strand-flow" aria-hidden="true" />

      <ul className="relative space-y-3">
        {skills.map((skill, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <li
              key={skill}
              className={`group relative flex items-center ${isLeft ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}
            >
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(150,218,190,0.25)] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_2px_rgba(150,218,190,0.7)]"
                aria-hidden="true"
              />
              <span
                className={`absolute top-1/2 -translate-y-1/2 h-px bg-primary/30 transition-colors duration-300 group-hover:bg-primary ${
                  isLeft ? 'right-1/2 w-[8%] mr-1' : 'left-1/2 w-[8%] ml-1'
                }`}
                aria-hidden="true"
              />
              <span className="relative min-w-0 max-w-full break-words px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:shadow-primary/30 cursor-default">
                {skill}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DnaStrand;
