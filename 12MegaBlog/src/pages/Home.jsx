import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import useTheme from '../contexts/theme';

function Home() {
    const [posts, setPosts] = useState([]);
    const { theme } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className={`w-full py-16 relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/1587699/pexels-photo-1587699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}></div>
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-screen">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Welcome to Echoes
                    </h1>
                    <p className="text-xl text-gray-300 mb-6">
                        Your journey to amazing stories and inspiration starts here.
                    </p>
                    <button 
                        onClick={() => navigate('/login')} 
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Log In to Explore
                    </button>
                </div>
                
            </div>
        );
    }

    return (
        <div className={`w-full py-8 ${theme === 'light' ? 'bg-white' : 'bg-black'} text-gray-900 dark:text-gray-100`}>
            <Container>
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Discover Amazing Stories</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">Dive into the world of knowledge and inspiration</p>
                </div>
                
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
