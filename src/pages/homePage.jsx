import React from 'react'
import Header from '../components/Header'
import ImproveSales from '../components/ImproveSales'
import WorkWithUs from '../components/WorkWithUs'
import { Footer } from '../components/Footer'
import Marquee from '../components/Marquee/Marquee'
import StatsSection from '../components/CountUp/CountUp'


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
