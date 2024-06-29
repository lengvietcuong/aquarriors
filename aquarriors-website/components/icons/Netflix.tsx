import React from "react";

const Netflix = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="#d32f2f"
      d="M304 0h96v512h-96zM112 0h96v512h-96z"
      data-original="#d32f2f"
    />
    <path fill="#f44336" d="M400 512h-96L112 0h96z" data-original="#f44336" />
  </svg>
);

export default Netflix;
