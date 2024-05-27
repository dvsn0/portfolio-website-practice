import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Based on the original work by {" "} 
        <a href="https://github.com/ByteGrad/portfolio-website" target="_blank"><span className="underline">ByteGrad</span></a>.
      </p>
    </footer>
  );
}
