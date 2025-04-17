import React from 'react'
import Head from "next/head";


function page() {
    
  return (
    <>
      <Head>
        <title>Info Page</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="p-6 bg-white rounded-2xl shadow-xl text-center max-w-xl">
          
          <p className="text-3xl mt-6 text-gray-800 font-semibold">
            A first aid kit is on its way to you.
          </p>
          <p className="text-3xl mt-2 text-gray-800 font-semibold" dir="rtl">
            توجد حقيبة إسعافات أولية تصل إليك الآن
          </p>
        </div>
      </div>
    </>
  )
}

export default page