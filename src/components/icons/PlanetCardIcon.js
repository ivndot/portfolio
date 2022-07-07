import React from "react";

const PlanetCardIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="none" viewBox="0 0 65 65" {...props}>
      <mask
        id="mask0_228_103"
        style={{ maskType: "alpha" }}
        width="65"
        height="65"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="32.5" cy="32.5" r="32.5" fill="#5289E3"></circle>
      </mask>
      <g mask="url(#mask0_228_103)">
        <circle cx="32.5" cy="32.5" r="32.5" fill="#5ABAFA"></circle>
        <path
          fill="#4D6AFA"
          d="M-12.678 17.74C22.112 11.63 38.499 2.774 71.436-.08c2.736 4.377 3.744 7.012 4.986 11.902C40.84 23.93-13.025 24.61-13.025 24.61s-.363-4.38.347-6.87z"
        ></path>
        <path
          fill="#4AD1F0"
          d="M-4.138 35.675s18.687-4.062 24.944-4.706c6.257-.645 15.979-1.219 25.475-4.857 10.4 1.961 15.296.048 24.348-2.334l5.611 4.307s-23.254 6.74-26.095 8.52c-2.841 1.778-22.975 2.2-26.25 4.615-3.276 2.414-20.84 2.31-33.371.89l5.338-6.435z"
        ></path>
        <path
          fill="#534AF0"
          d="M7.245 54.695s12.938-4.001 14.511-.973c1.574 3.028 17.626.449 18.126-.805s23.902-5.629 23.902-5.629l-6.659 7.68S43.868 56.443 42.61 58.42c-1.26 1.975-17.692 3.096-18.582 1.733-.89-1.363-12.31-1.865-12.31-1.865l-4.472-3.593z"
        ></path>
      </g>
    </svg>
  );
};

export default React.memo(PlanetCardIcon);
