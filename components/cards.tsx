"use client";

import React, { CSSProperties, useContext, useMemo } from "react";
import { Card3DEffect } from "@/components/card-3d-effect";
import { FlipCard } from "@/components/flip-card";
import {
  ButtonComponents,
  IconComponents,
  ImageComponents,
} from "@theogu/aa-design-system";

export const Cards = () => {
  const FrontCard = ({
    imageProduct,
    certificateName,
    brandLogo,
  }: {
    brandName: string | undefined;
    imageProduct: string;
    certificateName: string;
    collectionName: string;
    brandLogo: string;
    background: string | undefined;
  }) => {
    return (
      <div
        className="flex size-full items-center justify-center rounded-xl p-4"
        style={{
          backgroundColor: "#0015FF",
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-1">
            <p className="font-normal text-white">
              Ollie Pope Pro Edition Tempesta 1.1
            </p>
            <p className="mt-8 font-light text-white">Certified by</p>
            <ImageComponents
              src={
                "https://media-cdn.incrowdsports.com/88fe596c-bea7-4bab-9404-dede95e42c8f.png?width=1920&format=webp"
              }
              alt="Product image"
              className="mt-1 size-12 object-cover"
              data-atropos-offset="8"
            />
          </div>
          <ImageComponents
            src={
              "https://firebasestorage.googleapis.com/v0/b/develop-5181c.appspot.com/o/66fd5d149d7c7e9269fa3d9c%2Ftmp%2Fcollections%2Fnfts%2F1728643324352%2F1728643324352_jersy-png.png?alt=media&token=820abb05-4939-4b37-a942-c769a2708aa2"
            }
            alt="Product image"
            className="h-40 w-28 object-cover"
            data-atropos-offset="10"
          />
        </div>
        <ImageComponents
          src="/assets/cards/chip.svg"
          data-atropos-offset="3"
          alt="chip"
          className="absolute bottom-5 right-5 size-12"
        />
      </div>
    );
  };

  const BackCard = ({
    brandImage,
    text,
    tokenNumber,
    collectionName,
    issueDate,
  }: {
    brandName: string | undefined;
    signatureImage: string;
    brandImage: string;
    text: string;
    tokenNumber: string;
    collectionName: string;
    issueDate: string;
    background: string | undefined;
  }) => {
    const tokenNumber16Chars = tokenNumber.slice(0, 16);
    const tokenFormatted = "AAAA BBBB CCCC DDDD";

    return (
      <div
        className="relative flex size-full flex-col gap-2 rounded-xl p-2"
        style={{
          backgroundColor: "#0015FF",
        }}
      >
        <div className="flex w-full justify-between gap-2">
          <div className="flex flex-col pt-2">
            <p className="font-semibold" data-atropos-offset="5">
              {text}
            </p>
            <p data-atropos-offset="5">Super collection</p>
          </div>
          <img
            src={
              "https://media-cdn.incrowdsports.com/88fe596c-bea7-4bab-9404-dede95e42c8f.png?width=1920&format=webp"
            }
            alt="Signature"
            className="size-14 object-cover"
            data-atropos-offset="15"
          />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
          <p className="text-xl uppercase" data-atropos-offset="5">
            {tokenFormatted}
          </p>
          <div className="flex items-center">
            <p
              className="w-10 text-[10px] uppercase leading-3"
              data-atropos-offset="5"
            >
              Issue Date.g
            </p>
            <p data-atropos-offset="5">DD/MM/YYYY</p>
          </div>
        </div>
        <IconComponents
          name="arrow-left"
          className="absolute bottom-3 left-3 text-white"
        />
      </div>
    );
  };

  return (
    <div
      className="relative flex w-full flex-col items-center text-white [background:radial-gradient(100.93%_39.22%_at_49.87%_35.34%,var(--first-gradient-stop)_0%,var(--second-gradient-stop)_100%),linear-gradient(0deg,#000966,#000966),#D9D9D9]"
      style={
        {
          "--first-gradient-stop": "#0015FF",
          "--second-gradient-stop": "#000963",
        } as CSSProperties
      }
    >
      <div className="mt-6">
        <ButtonComponents
          variant="ghost"
          className="absolute left-3 top-6 gap-1 p-0 opacity-75"
          id="close-btn"
        >
          <IconComponents name="close" />
          <span>Close</span>
        </ButtonComponents>
        <h1 className="text-center text-2xl font-bold">Passport</h1>
      </div>
      <div className="z-10 mt-6 h-60">
        <Card3DEffect className="rounded-xl shadow-2xl">
          <FlipCard
            className="h-48 w-80"
            front={
              <FrontCard
                background={undefined}
                brandName={"Kujtim"}
                certificateName={"Certificate Name" as string}
                collectionName={"Collection name"}
                imageProduct={""}
                brandLogo={""}
              />
            }
            back={
              <BackCard
                background={""}
                brandName={""}
                text={"Certificate of ownership"}
                signatureImage={""}
                brandImage={""}
                tokenNumber={""}
                issueDate={""}
                collectionName={""}
              />
            }
          />
        </Card3DEffect>
      </div>
      {/*<div*/}
      {/*  className="absolute top-60 h-64 w-full min-w-[550px] bg-dark-200 lg:h-32"*/}
      {/*  style={{*/}
      {/*    borderTopLeftRadius: "50%",*/}
      {/*    borderTopRightRadius: "50%",*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
};
