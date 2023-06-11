import React from "react";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./CardInfo/TestimonialCard";

import ImageOne from "../../../assets/images/1.png"

export default function CarouselPage() {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      Interval={5000}
      showStatus={false}
    >
      <TestimonialCard
        name="Micheal Caldwell"
        image = {ImageOne}
        description="This is the best Mediterranean food that I've ever had!"
      />
      <TestimonialCard
        name="Alan Chen"
        image = {ImageOne}
        description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."
      />
      <TestimonialCard
        name="Casey Lau"
        image = {ImageOne}
        description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
      />
      <TestimonialCard
        name="John Rosenblum"
        image = {ImageOne}
        description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
      />
      <TestimonialCard
        name="Jim Reynor"
        image = {ImageOne}
        description="The food here really refreshed me after a late night shift
                at the local supply depot."
      />
      <TestimonialCard
        name="Brian Dean"
        image = {ImageOne}
        description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."
      />
      <TestimonialCard
        name="Tyler Tohmine"
        image = {ImageOne}
        description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."
      />
      <TestimonialCard
        name="Jack Hu"
        image = {ImageOne}
        description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"
      />
    </Carousel>
  );
}
