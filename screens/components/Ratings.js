import { View, Text } from 'react-native'
import React from 'react'
import {AirbnbRating } from 'react-native-ratings';

export default function Ratings() {
    const submitRating=(rating)=>{
        console.log("Rating:", rating)
    }
  return (
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad","OK", "Good","Amazing!"]}
        defaultRating={0}
        size={30}
        showRating={false}
        starContainerStyle={{
            gap:12
        }}
        ratingContainerStyle={{
            flexDirection:"row-reverse",
            gap:12,
            justifyContent:"flex-end"
        }}
        reviewColor='#322962'
        reviewSize={18}
        onFinishRating={(rating)=>submitRating(rating)}
/>
  )
}