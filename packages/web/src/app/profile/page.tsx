"use client"
import React from 'react';
import Layout from './layout';
import Navbar from '@/components/Navbar';
// import { getServerSession } from 'next-auth';
import authOptions from '@/utils/authOptions';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

async function Page() {
    // const session = await getServerSession(authOptions)
    const {data: session} = useSession()


    if(!session) {
        console.log("no session")
        redirect('/api/auth/signin')
        
    }
    
  return (
    <>
    
    <Layout>
    <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcom22e to My Website</h1>
        <p className="text-lg mt-4">Protected Page!</p>
      </div>
    </Layout>
    </>
  );
}

export default Page;