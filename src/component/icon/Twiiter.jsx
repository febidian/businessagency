import React from "react";

function Twiiter(props) {
  return (
    <>
      <svg
        className="laptop:h-8 laptop:w-8 laptop:mr-4 h-6 w-6 mr-2"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={40} height={40} rx={8} fill="white" />
        <g clipPath="url(#clip0_5_5413)">
          <path
            d="M30.9946 30.9998V30.9989H31.0001V22.9304C31.0001 18.9832 30.1503 15.9426 25.5358 15.9426C23.3175 15.9426 21.8288 17.16 21.2211 18.314H21.1569V16.3111H16.7816V30.9989H21.3375V23.726C21.3375 21.8111 21.7005 19.9595 24.0719 19.9595C26.4085 19.9595 26.4433 22.1448 26.4433 23.8489V30.9998H30.9946Z"
            fill="#FB3F6C"
          />
          <path d="M9.3631 16.3123H13.9244V31H9.3631V16.3123Z" fill="#FB3F6C" />
          <path
            d="M11.6418 9C10.1834 9 9 10.1834 9 11.6418C9 13.1003 10.1834 14.3084 11.6418 14.3084C13.1003 14.3084 14.2837 13.1003 14.2837 11.6418C14.2828 10.1834 13.0993 9 11.6418 9V9Z"
            fill="#FB3F6C"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_5413">
            <rect
              width={22}
              height={22}
              fill="white"
              transform="translate(9 9)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default Twiiter;
