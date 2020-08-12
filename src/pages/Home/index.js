import React from 'react';
import Hero from '../../components/Hero'
import ImageGrid from '../../components/ImageGrid';
import Footer from '../../components/Footer';
import Container from '../../components/Container'

function Home() {
  return(
    <Container>
      <Hero />
      <ImageGrid />
      <Footer />
    </Container>
  )
}

export default Home;