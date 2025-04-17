"use client";
import { QRCodeCanvas } from "qrcode.react";
import Head from "next/head";

export default function Home() {
  // const url = "http://localhost:3000/info";
  const url = "https://smart-first-aid-kit.vercel.app/info";

  return (
    <>
      <Head>
        <title>QR Code Page</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col gap-5">
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">Smart First Aid Kit</h1>
        </div>
        
        <div className="p-6 bg-white rounded-2xl shadow-xl text-center">
          <h1 className="text-2xl font-bold mb-4">Scan this QR Code</h1>
          <QRCodeCanvas value={url} size={200} />
        </div>
      </div>
    </>
  );
}
