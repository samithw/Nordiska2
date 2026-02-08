'use client';

import { Contacts } from "@/components/Contacts";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Success } from "@/components/Success";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Stats />
      <Success />
      <Contacts />
    </main>
  );
};

export default Page;