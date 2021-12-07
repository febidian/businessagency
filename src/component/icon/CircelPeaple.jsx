import React from "react";

function CircelPeaple(props) {
  return (
    <>
      <svg
        width={60}
        height={60}
        className="mr-3 tablet:w-14 tablet:h-14 w-10 h-10"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle cx={30} cy={30} r={30} fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use
              xlinkHref="#image0_5_3015"
              transform="translate(-0.271605) scale(0.00154321)"
            />
          </pattern>
          <image
            id="image0_5_3015"
            width={1000}
            height={648}
          />
        </defs>
      </svg>
    </>
  );
}

export default CircelPeaple;