import React from "react";

const PlanetIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" {...props}>
      <mask
        id="mask0_228_55"
        style={{ maskType: "alpha" }}
        width="28"
        height="28"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="14" cy="14" r="14" fill="#5289E3"></circle>
      </mask>
      <g mask="url(#mask0_228_55)">
        <circle cx="14" cy="14" r="14" fill="#5465FF"></circle>
        <path
          fill="#5ABAFA"
          d="M-.758-1.017C10.437.045 16.138-1.362 26.528.577c.532 1.633.655 2.56.689 4.228-11.87.783-28.575-3.66-28.575-3.66s.202-1.429.6-2.162z"
        ></path>
        <path
          fill="#0B132B"
          d="M.33 9.792s7.285-.54 9.798-.368c2.513.173 6.461.653 10.002-.4 4.488 1.786 6.31 1.225 9.796.759l2.755 2.569s-8.893 1.505-9.882 2.162c-.988.656-9.243-.717-10.346.22-1.102.936-8.352-.495-13.663-2.181L.33 9.792z"
        ></path>
        <path
          fill="#4AD1F0"
          d="M-1.995 18.448c5.608-.87 8.855-1.125 15.668.716 5.537 1.727 8.56 1.593 13.876.349l-1.275 3.53c-4.407 1.119-7.018 1.083-11.931-.207-6.3-1.497-9.74-1.775-15.754-1.545l-.584-2.843z"
        ></path>
      </g>
    </svg>
  );
};

export default PlanetIcon;
