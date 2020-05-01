import React from 'react'
import Navbar from '../components/Navbar'
import Leadertable from '../components/Leadertable'
import Head from 'next/head';

export default function leaderboard() {
  return (
    <div>
      <Head>
        <title>Leaderboard</title>
        
      </Head>
      
      <Navbar />
      
      
      <Leadertable />
    </div>
  )
}
