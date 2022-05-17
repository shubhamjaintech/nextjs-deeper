import React from 'react';
import Image from 'next/image'
const AirDetails = ({ postData: { id, title, thumbnailUrl } }) => {
    return (
        <div>
            <p>ID : {id}</p>
            <p>Title : {title}</p>
            <img
                src={thumbnailUrl}
                alt="Picture of the author"
                width={500}
                height={500}
            />
            {/* <Image
                src={thumbnailUrl}
                alt="Picture of the author"
                width={500}
                height={500}
            /> */}
        </div>
    );
};

export const getStaticProps = async (context) => {
    const { params } = context;
    console.log(params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    console.log(data)
    return {
        props: {
            postData: data
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map((item) => {
        return {
            params: { id: `${item.id}` }
        }
    })
    return {
        paths, fallback: false
    }
}

export default AirDetails;