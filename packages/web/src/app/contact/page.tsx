import React from 'react';
import Layout from './layout';
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <>
    
    <Layout>
     <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcom22e to My Website</h1>
        <p className="text-lg mt-4">Enjoy the Tailwind CSS styles!</p>
      </div>
    </Layout>
    </>
  );
}

export default Page;