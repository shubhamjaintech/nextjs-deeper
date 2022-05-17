import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
const redirectTwo = ({ postData = [] }) => {
    return (
        <div>
           redirectTwo
        </div>
    );
};

export default redirectTwo;

// export const getStaticProps = async () => {
//     const res = await fetch('http://localhost:3004/posts');
//     const data = await res.json();
//     return {
//         props: {
//             postData: data
//         }
//     }
// }

export const getServerSideProps = async (context) => {
    const {params:{zipCode}}=context;
    console.log('getServerSideProps');
   console.log(zipCode);
   return{
       props:{
           data:""
       }
   }
}