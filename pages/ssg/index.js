import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
const ssg = ({ postData = [] }) => {
    return (
        <div>
            <h1> This page has been statically generated with getStaticProps..</h1>
            <h3>
                {postData.map(({ id, title, thumbnailUrl }, index) => <Link href={`/ssg/${id}`} key={index} passHref><div><p>{index + 1} : {title}
                    </p>
                    <Image
                        src={thumbnailUrl}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    </div>
                </Link>)}
            </h3>
        </div>
    );
};

export default ssg;

export const getStaticProps = async () => {
    console.log('generating / revalidating');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: {
            postData: data
        },
        revalidate: 10
    }
}