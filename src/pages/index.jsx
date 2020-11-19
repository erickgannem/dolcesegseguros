import React from 'react';
import '../index.css';

import Container from '../components/Container';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Main page</h1>
        <p>Paragraph</p>
      </Container>
    </>

  );
}
