import { Minus } from "lucide-react";
import Image from "next/image";
import React from "react";

type CoreValuesProps = {
  test?: string;
};

export default function CoreValues({ test }: CoreValuesProps) {
  const values = [
    {
      label: "Dedication",
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
      label: "Intellectual Honesty",
      content:
        "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
    },
    {
      label: "Curiosity",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    },
  ];

  return (
    <div
      id='core'
      className='bg-gray-100 !pb-0 md:flex md:flex-row md:gap-10 md:items-center overflow-hidden'
    >
      <div className='section-padding flex flex-col gap-10'>
        <p className='section-title text-center'>Our Core Values</p>
        <div className='text-gray-500 flex flex-col gap-4'>
          <p>
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
          </p>
          <p>
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          {values?.map((item: any, index: number) => {
            return (
              <div key={index} className='flex flex-row gap-2'>
                <div className='-translate-y-1'>
                  <Minus size={40} strokeWidth={1} />
                </div>
                <div>
                  <p className='text-2xl mb-2'>{item?.label}</p>
                  <p className='text-gray-500 font-light'>{item?.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='relative bottom-0 -right-24 md:block md:right-0 '>
        <Image
          className='w-[500px] md:w-[1000px]'
          src='/images/illust.png'
          width={800}
          height={800}
          alt='Core Value'
        />
      </div>
    </div>
  );
}
