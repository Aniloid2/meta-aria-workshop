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

  useEffect(() => {
    const fetchGenImages = async () => {
      try {
        const { data, error } = await supabase
          .from("aria01")
          .select("img2imggeneration")
          .eq("id", 17);

        if (error) {
          throw error;
        }

        if (data) {
          console.log("Supabase, Fetched Data for img2imggeneration:", data);

          // Extract URLs from the img2imggeneration column
          const imageUrls = data.flatMap((item) => item.img2imggeneration);

          console.log("Image URLs from img2imggeneration:", imageUrls);

          setImg2ImgImages(imageUrls);
          console.log("img2imgImages");
          console.log(img2imgImages);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchGenImages();
  }, []);

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchImages = async () => {
      try {
        // Fetch data from Supabase
        const { data, error } = await supabase
          .from("aria01")
          .select("suggested_products")
          .eq("id", 17); // Filter to get the row where id is 17
        // .limit(grid_size);

        if (error) {
          throw error;
        }

        if (data) {
          console.log("Fetched Data:", data); // Log the fetched data

          // Extract URLs and update state
          // const imageUrls = data.map((item) => item.suggested_products);
          const imageUrls = data.flatMap((item) => item.suggested_products);

          console.log("Image URLs:", imageUrls); // Log the extracted URLs

          setImages(imageUrls);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    // Call the async function
    fetchImages();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <section className="py-8">
        <div className="mb-4 ">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 flex justify-center md:block">
            My Fashion Faves
          </h1>
          {/* <h1 className="text-2xl font-bold text-gray-800">My Fashion Faves</h1> */}
          <p className="text-base text-gray-600 mt-2 flex justify-center md:block">
            {/* <p className="text-base text-gray-600 mt-2"> */}
            Picked from My Amazon Adventures
          </p>
        </div>
        <div className="flex justify-center md:block">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {images.slice(0, grid_size).map((imgSrc, index) => (
              <div className="relative w-96 h-96 flex items-center justify-center overflow-hidden">
                <Image
                  key={index}
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
            I've Got to Get These Quick!
          </h1>
          <p className="text-base text-gray-600 mt-2 flex justify-center md:block">
            Cool Picks Just for Me
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="relative w-100 h-100 flex items-center justify-center">
            <Image
              src={imgplaceholder || imgplaceholder}
              alt=""
              width={300} // Adjust this to your desired square size
              height={300} // Adjust this to your desired square size
              objectFit="cover" // This will crop the image as needed to fit the square container
            />
          </div>
          <div className="relative w-100 h-100 flex items-center justify-center">
            <Image
              src={imgplaceholder || imgplaceholder}
              alt=""
              width={300} // Adjust this to your desired square size
              height={300} // Adjust this to your desired square size
              objectFit="cover" // This will crop the image as needed to fit the square container
            />
          </div>

          <div className="relative w-100 h-100 flex items-center justify-center">
            <Image
              src={imgplaceholder || imgplaceholder}
              alt=""
              width={300} // Adjust this to your desired square size
              height={300} // Adjust this to your desired square size
              objectFit="cover" // This will crop the image as needed to fit the square container
            />
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
              <div className="relative w-96 h-96 flex items-center justify-center overflow-hidden">
                <Image
                  key={index}
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
        {/* <div className="flex justify-center md:block">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12"> */}
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
