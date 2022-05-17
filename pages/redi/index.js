import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Router,{ useRouter } from 'next/router'
const redirectOne = ({ postData = [] }) => {
const router = useRouter()
const zip='560085'

    const redirect=()=>{
        router.query.zip_code = zip
        router.push(router);
        alert('redirecting/changing the query params: '+router.query.zip_code)
    }
    return (
        <div>
           redirect one
           <button onClick={redirect}>Redirect</button>
        </div>
    );
};

export default redirectOne;

// export const getStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     return {
//         props: {
//             postData: data
//         }
//     }
// }

export const getServerSideProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log('api data', data);
    if(Object.keys(context.query).length){
    return {
        redirect: {
            permanent: false,
            destination: "/redi2",
          },
        props: {
            postData: 'data'
        }
    }
} else {
    return{
        props: {
            postData: 'data'
        }
    }
}
    
}