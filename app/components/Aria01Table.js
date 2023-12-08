"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Aria01Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data: rows, error } = await supabase.from("aria01").select("*");
    if (error) console.error("Error: ", error);
    else setData(rows);
  };

  useEffect(() => {
    fetchData();

    // Set up a realtime listener
    const subscription = supabase
      .from("aria01")
      .on("*", () => fetchData())
      .subscribe();

    // Clean up the realtime subscription
    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  return (
    <div>
      {data.map((row, index) => (
        <div key={index}>
          {Object.entries(row).map(([key, value]) => (
            <p key={key}>{`${key}: ${value}`}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Aria01Table;
