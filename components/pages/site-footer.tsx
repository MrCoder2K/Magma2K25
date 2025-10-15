import Link from "next/link";

import React from "react";
const Footer = () => {
  return (
    <section className="py-10">
      <hr className="mt-16 mb-10 border-gray-200" />

      <p className="text-sm text-center text-gray-600">
        © Copyright 2025, Asan Institute of Management. All Rights Reserved.
      </p>
      <p className="text-sm text-center text-gray-600 py-1">
        <Link href="https://www.instagram.com/mr.coder_2k?igsh=MWk3djJlOGtmamNhag==" target="_blank"
                rel="noopener noreferrer" >
        Designed by Mr.Coder@2k
        </Link>
      </p>
    </section>
  );
};
export default Footer;
