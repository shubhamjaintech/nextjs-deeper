import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router'
const redirectTwo = ({ postData = [] }) => {
    return (
        <div>
           redirectTwo
        </div>
    );
};

export default redirectTwo;

export const getServerSideProps = async (context) => {
    const {params:{zipCode}}=context;
   return{
       props:{
           data:""
       }
   }
}