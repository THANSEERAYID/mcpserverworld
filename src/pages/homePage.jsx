import React from 'react'
import Header from '../components/Header'
import ImproveSales from '../components/ImproveSales'
import WorkWithUs from '../components/WorkWithUs'
import Marquee from '../components/Marquee/Marquee'


export function HomePage() {


  return (
    <>
      <Header/>
      <Marquee/>
      <ImproveSales/>
      <WorkWithUs/>
    </>
  )
}
