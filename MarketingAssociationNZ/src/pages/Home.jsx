import Header from "../components/Header";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Content/>
    </>
  );
}
