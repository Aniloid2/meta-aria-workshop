"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import MyMapComponent from "./MapModule";
import Image from "next/image";
import TitleModule from "./WebsiteTitle";

const SectionSystem = () => {
  const imgplaceholder =
    "http://img.ltwebstatic.com/images3_pi/2022/12/22/16716801831dd433a4d8f05098c7de31529d4a06f9_thumbnail_405x552.jpg";

  const grid_size = 3;

  const [img2imgImages, setImg2ImgImages] = useState([]);
  const [images, setImages] = useState([]);
  const [scans, setScanned] = useState([]);

  // Separate the fetch function from the useEffect
  const fetchImages = async (imgType, state_variable) => {
    try {
      const { data, error } = await supabase
        .from("aria01")
        .select(imgType)
        .eq("id", 17);

      if (error) {
        throw error;
      }

      if (data) {
        console.log("Supabase, Fetched Data for img2imggeneration:", data);

        // Extract URLs from the img2imggeneration column
        const imageUrls = data.flatMap((item) => item[imgType]);
        console.log("Image URLs from img2imggeneration:", imageUrls);

        state_variable(imageUrls);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // useEffect with an empty dependency array to run only once
  useEffect(() => {
    fetchImages("scanned_products", setScanned);
  }, []);

  useEffect(() => {
    fetchImages("img2imggeneration", setImg2ImgImages);
  }, []); // Empty dependency array means this effect runs once after the first render

  useEffect(() => {
    fetchImages("suggested_products", setImages);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <section className="py-8">
        <div className="mb-4 ">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 flex justify-center md:block">
            I Scanned, Magic Happened
          </h1>
          <p className="text-base text-gray-600 mt-2 flex justify-center md:block">
            I See It, I Want It
          </p>
        </div>
        <div className="flex justify-center md:block">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {scans.slice(0, grid_size).map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-96 h-96 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={imgSrc || imgplaceholder}
                  alt={`Image ${index + 1}`}
                  className="object-cover min-w-full min-h-full"
                  width={384} // Updated to correspond to w-96 in Tailwind (1rem = 16px)
                  height={384} // Updated to correspond to h-96 in Tailwind
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400  flex justify-center md:block">
            My Style, My Rules
          </h1>
          <p className="text-base text-gray-600 mt-2 flex justify-center md:block">
            Tailored Picks Just For My Closet, Enriched with AI
          </p>
        </div>
        <div className="flex justify-center md:block">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {images.slice(0, grid_size).map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-96 h-96 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={imgSrc || imgplaceholder}
                  alt={`Image ${index + 1}`}
                  className="object-cover min-w-full min-h-full"
                  width={384} // Updated to correspond to w-96 in Tailwind (1rem = 16px)
                  height={384} // Updated to correspond to h-96 in Tailwind
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500  flex justify-center md:block">
            Me in the Latest Gear
          </h1>
          <p className="text-base text-gray-600 mt-2 flex justify-center md:block">
            Imagining How Awesome I'd Look
          </p>
        </div>
        <div className="flex justify-center md:block">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {img2imgImages.slice(0, grid_size).map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-96 h-96 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={imgSrc || imgplaceholder}
                  alt={`Image ${index + 1}`}
                  className="object-cover min-w-full min-h-full"
                  width={384} // Updated to correspond to w-96 in Tailwind (1rem = 16px)
                  height={384} // Updated to correspond to h-96 in Tailwind
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600  flex justify-center md:block">
            Where to Snag These Gems
          </h1>
          <p className="text-base text-gray-600 mt-2 flex justify-center md:block">
            Finding the Best Deals Near Me or Online
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="relative w-100 h-100 flex ">
            <MyMapComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSystem;
