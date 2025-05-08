import React from "react";
import { Header } from "../components/Header";
import { SpecialityMenu } from "../components/SpecialityMenu";
import { TopDoctors } from "../components/TopDoctors";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <SpecialityMenu></SpecialityMenu>
      <TopDoctors></TopDoctors>
      <Banner></Banner>
    </div>
  );
};
