import * as React from 'react';

function SvgComponent(props: any) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.873 1.497a3 3 0 00-3.747 0l-9 7.194A3 3 0 000 11.034V21a3 3 0 003 3h18a3 3 0 003-3v-9.966a3 3 0 00-1.127-2.343l-9-7.194zm6.976 8.622a2 2 0 01.75 1.562v8.959a1 1 0 01-1 1H3.4a1 1 0 01-1-1V11.68a2 2 0 01.752-1.562l8.224-6.574a1 1 0 011.249 0l8.224 6.574z"
        fill="#9E9E9E"
      />
    </svg>
  );
}

export default SvgComponent;
