"use client";
import React from "react";
import { supabase } from "../supabaseClient";
import Image from "next/image";

const LastElement = () => {
  const [latestRow, setLatestRow] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data: rows, error } = await supabase
        .from("aria01")
        .select("query, amazon_url, suggestion1img") // Select only 'query' and 'amazon_url' columns
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) {
        console.error("Error: ", error);
      } else {
        setLatestRow(rows[0]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>I Like Your Style</h1>
      {latestRow ? (
        <div>
          <p>{`Query: ${latestRow.query}`}</p>
          <p>{`Amazon URL: ${latestRow.amazon_url}`}</p>
          <Image
            src={latestRow.suggestion1img}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LastElement;
