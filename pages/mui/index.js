import React from 'react';
import Link from 'next/link';
import NativeSelects from '../../components/NativeSelects';
const mui = ({ postData = [] }) => {

    return (
        <div>
            <h1> Demo Multi Select</h1>
            <NativeSelects />
            <h3>
                {postData.map(({ id, title }, index) => <Link href={`/ssg/${id}`} key={index} passHref><div><p>{index + 1} : {title}
                </p>
                </div>
                </Link>)}
            </h3>
            <>
                <NativeSelects />
            </>
        </div>
    );
};

export default mui;

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