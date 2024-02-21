"use client"

import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  

  return (
    <main className="h-[100vh] w-[100vw] bg-[pink] text-[black] flex flex-col content-center items-center">
      <h1>{(counter)}</h1>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Click Me !</button>
    </main>
  );
}
