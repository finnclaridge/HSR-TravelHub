import Image from "next/image";

export default function Home() {
  console.log("What am I doing here? - SERVER/CLIEN");
  return (
    <div> 
      <h1 className="text-3xl font-bold underline">HSR Navi App</h1>
      <p>Welcome to the HSR Navi App!</p>
      
    </div>
  );
}
