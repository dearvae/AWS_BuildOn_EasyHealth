import Link from 'next/link'
import MyLayout from '../../../components/doctor_layout'
import { PageHeader, Avatar } from 'antd';
import React, { useState } from 'react';
import { Card } from 'antd';
import CommentBox from '../../../components/comment'
import { useRouter } from 'next/router'


export default function Post() {
    const router = useRouter()
    const { pid } = router.query
  
    return (
        <>
        <PageHeader
        className="site-page-header"
        onBack={() => router.push("/doctor/forum")}
        title="Title"
        subTitle="3 health tips for 2020"
        />
        <Card title="20 health tips for 2020">
        The start of a new decade brings with it new resolutions to improve one’s life, including a healthier lifestyle. Here are 20 practical health tips to help you start off towards healthy living in 2020.
        
        1. Eat a healthy diet
        Eat a combination of different foods, including fruit, vegetables, legumes, nuts and whole grains. Adults should eat at least five portions (400g) of fruit and vegetables per day. You can improve your intake of fruits and vegetables by always including veggies in your meal; eating fresh fruit and vegetables as snacks; eating a variety of fruits and vegetables; and eating them in season. By eating healthy, you will reduce your risk of malnutrition and noncommunicable diseases (NCDs) such as diabetes, heart disease, stroke and cancer.

        2. Consume less salt and sugar
        Filipinos consume twice the recommended amount of sodium, putting them at risk of high blood pressure, which in turn increases the risk of heart disease and stroke. Most people get their sodium through salt. Reduce your salt intake to 5g per day, equivalent to about one teaspoon. It’s easier to do this by limiting the amount of salt, soy sauce, fish sauce and other high-sodium condiments when preparing meals; removing salt, seasonings and condiments from your meal table; avoiding salty snacks; and choosing low-sodium products.
        On the other hand, consuming excessive amounts of sugars increases the risk of tooth decay and unhealthy weight gain. In both adults and children, the intake of free sugars should be reduced to less than 10% of total energy intake. This is equivalent to 50g or about 12 teaspoons for an adult. WHO recommends consuming less than 5% of total energy intake for additional health benefits. You can reduce your sugar intake by limiting the consumption of sugary snacks, candies and sugar-sweetened beverages.
        
        3. Reduce intake of harmful fats
        Fats consumed should be less than 30% of your total energy intake. This will help prevent unhealthy weight gain and NCDs. There are different types of fats, but unsaturated fats are preferable over saturated fats and trans-fats. WHO recommends reducing saturated fats to less than 10% of total energy intake; reducing trans-fats to less than 1% of total energy intake; and replacing both saturated fats and trans-fats to unsaturated fats.

        The preferable unsaturated fats are found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils; saturated fats are found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard; and trans-fats are found in baked and fried foods, and pre-packaged snacks and foods, such as frozen pizza, cookies, biscuits, and cooking oils and spreads.   
        <CommentBox text="Avoid harmful use of alcohol" />   
        <CommentBox text="Don’t smoke"/>   
        <CommentBox text="Be active"/>    
        </Card>
        </>
    )
  }

  Post.getLayout = (post) => (
    <MyLayout>
      {post}
    </MyLayout>
  )