import Image from 'next/image';
import React from 'react'

const Bg = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          className="object-cover object-top h-28 w-28"
          fill
        />
      </div>
    </div>
  );
}

export default Bg
