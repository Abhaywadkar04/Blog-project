import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import useTheme from '../contexts/theme';


function Home() {
    const [posts, setPosts] = useState([])
    const { theme } = useTheme();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className={`w-full py-8 mt-4 relative overflow-hidden ${theme === 'light' ? 'bg-gray-800' : 'bg-black'}`}>
                <div className="relative z-10">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold absolute bottom-8 left-8 text-white">
                                Welcome to DevUI - Your Blogging App
                            </h1>
                        </div>
                    </div>
                </div>
                <img
                    src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="blog background"
                    className="w-full h-full object-cover bg-cover bg-center"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1200)"
                    }}
                />
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
