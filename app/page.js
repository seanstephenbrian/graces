import { getSinglePost } from '@/lib/posts';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default async function Home() {

    const post = await getSinglePost('first-post')
        .then((post) => {
            return post;
        })
        .catch((err) => console.log(err));
    
    if (post) {
        return (
            <main className={inter.className}>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </main>
        )
    } else {
        return;
    }  
}
