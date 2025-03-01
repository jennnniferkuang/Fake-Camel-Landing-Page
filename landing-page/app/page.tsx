import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center bg-gradient-to-tr from-purple-900 via-teal-800 to-orange-700 text-white">

      <div className="flex w-[calc(100vw-10px)] h-[50px] mt-5 bg-black opacity-20 rounded-md items-center">
      </div>

      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold">The AI Data Analyst</h1>
        <p className="mt-4 text-lg">Ask questions, get instant charts and insights from your data.</p>
      </div>

    </div>
  );
}
