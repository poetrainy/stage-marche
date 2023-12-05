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
        d="M17.3 2.2c.6 0 1 .5 1 1v18.3l-4.9-4-1.4-1.1-1.4 1.1-4.9 4V3.2c0-.6.5-1 1-1h10.6m0-2.2H6.7C5 0 3.5 1.4 3.5 3.2V22c0 1.2 1 2 2 2 .4 0 .9-.1 1.2-.4l5.3-4.3 5.3 4.3c.4.3.8.4 1.2.4 1 0 2-.8 2-2V3.2C20.5 1.4 19 0 17.3 0z"
        fill="#9E9E9E"
      />
    </svg>
  );
}

export default SvgComponent;
