"use client";
import React from "react";
import { supabase } from "../supabaseClient";

const Aria01Table = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    // Fetch data from Supabase
    const fetchData = async () => {
      const { data: rows, error } = await supabase
        .from("aria01")
        .select("suggested_products")
        .limit(3); // Assuming you want 3 images

      if (error) {
        console.error("Error: ", error);
      } else {
        // Extract URLs from the rows and update the images state
        const imageUrls = rows.map((row) => row.suggested_products);
        setImages(imageUrls);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Full Table</h1>
      <div>
        {data.map((row, index) => (
          <div key={index}>
            {Object.entries(row).map(([key, value]) => (
              <p key={key}>{`${key}: ${value}`}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aria01Table;
