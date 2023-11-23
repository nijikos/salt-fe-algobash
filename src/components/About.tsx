import { ChevronsDown, MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";

type AboutProps = {
  test?: string;
};

export default function About({ test }: AboutProps) {
  const [content, setContent] = useState(0);
  const aboutContents = [
    {
      title: "Who we are",
      subtitle: "Technology Company",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "What we do",
      subtitle: "Professional Brand Management",
      content:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "How we do",
      subtitle: "Strategize, Design, Collaborate",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
    },
  ];

  return (
    <div className='section-padding relative'>
      {/* -------- Next Section Button */}
      <div
        id='about'
        className='w-full absolute top-0 left-0 right-0 grid place-content-center translate-y-[-50%]'
      >
        <a href='#about'>
          <div className='bg-white w-fit h-fit rounded-full p-2 shadow-md'>
            <ChevronsDown />
          </div>
        </a>
      </div>
      {/* --------- Content Start */}
      <div
        className={`${
          content === 0
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0 h-0 overflow-hidden"
        } transition-all md:max-w-[600px] md:mx-auto`}
      >
        <p className='section-title md:text-center mb-6'>
          {aboutContents[0].title}
        </p>
        <p className='text-xl mb-4 md:text-center'>
          {aboutContents[0].subtitle}
        </p>
        <p className='h-36 md:text-center'>{aboutContents[0].content}</p>
      </div>

      <div
        className={`${
          content === 1
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0 h-0 overflow-hidden"
        } transition-all md:max-w-[600px] md:mx-auto`}
      >
        <p className='text-3xl md:text-5xl md:text-center font-semibold mb-6 text-sky-600'>
          {aboutContents[1].title}
        </p>
        <p className='text-xl mb-4 md:text-center'>
          {aboutContents[1].subtitle}
        </p>
        <p className='h-36 md:text-center'>{aboutContents[1].content}</p>
      </div>

      <div
        className={`${
          content === 2
            ? "translate-x-0 opacity-100"
            : "-translate-x-10 opacity-0 h-0 overflow-hidden"
        } transition-all md:max-w-[600px] md:mx-auto`}
      >
        <p className='text-3xl md:text-5xl md:text-center font-semibold mb-6 text-sky-600'>
          {aboutContents[2].title}
        </p>
        <p className='text-xl mb-4 md:text-center'>
          {aboutContents[2].subtitle}
        </p>
        <p className='h-36 md:text-center'>{aboutContents[2].content}</p>
      </div>
      {/* --------- Content End */}

      {/* --------- Controls Star */}
      <div className='flex flex-row md:flex-col items-center justify-between md:justify-center md:gap-4 my-16 md:my-4'>
        <div className='flex flex-row items-baseline gap-1'>
          <p className='font-semibold text-lg'>0{content + 1}</p>
          <p className='font-semibold text-lg text-gray-400'>/</p>
          <p className='font-semibold text-sm text-gray-400'>03</p>
        </div>
        <div>
          <button
            className='bg-gray-100 p-3'
            onClick={() => {
              if (content > 0) {
                setContent((prev: any) => prev - 1);
              }
            }}
          >
            <MoveLeft color='#B6B6B6' />
          </button>
          <button
            className='bg-sky-600 p-3'
            onClick={() => {
              if (content < 2) {
                setContent((prev: any) => prev + 1);
              }
            }}
          >
            <MoveRight color='#fff' />
          </button>
        </div>
      </div>
      {/* --------- Controls End */}
    </div>
  );
}
