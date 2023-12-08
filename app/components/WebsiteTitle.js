import React from "react";
import Head from "next/head";

const TitleModule = () => {
  return (
    <>
      <Head>
        <title>I Like Your Style</title>
      </Head>
      <div className="flex justify-center items-center h-20 mt-10">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 leading-none pb-4">
          I Like Your Style
        </h1>
      </div>
    </>
  );
};

export default TitleModule;
