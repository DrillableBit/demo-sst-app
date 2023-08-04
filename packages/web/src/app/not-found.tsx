import React from 'react';
import Layout from './layout';
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <Layout>
      <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl font-bold">OooOOoops!</h1>
        <p className="text-lg mt-4">Page was not found.</p>
      </div>
    </Layout>
  );
}

export default Page;