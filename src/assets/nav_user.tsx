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
      <path d="M11.9 0C8.5 0 5.7 2.8 5.7 6.3s2.8 6.3 6.2 6.3S18 9.8 18 6.3 15.3 0 11.9 0zm.1 10.2c-2.2 0-3.9-1.8-3.9-3.9S9.8 2.4 12 2.4s3.9 1.8 3.9 3.9-1.7 3.9-3.9 3.9zM14.2 13.8H9.8C5 13.8 1 17.7 1 22.6c0 .7.6 1.4 1.5 1.4h19.1c.8 0 1.5-.7 1.5-1.5-.1-4.8-4-8.7-8.9-8.7zM3.4 21.6c.4-3.1 3.1-5.5 6.3-5.5h4.5c3.2 0 5.9 2.4 6.3 5.5H3.4z" />
    </svg>
  );
}

export default SvgComponent;
