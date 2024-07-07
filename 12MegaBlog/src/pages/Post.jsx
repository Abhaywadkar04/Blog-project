import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [isAuthor, setIsAuthor] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    if (userData && post.userid === userData.$id) {
                        setIsAuthor(true);
                    } else {
                        setIsAuthor(false);
                    }
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate, userData]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredimg);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="bg-gray-100 min-h-screen">
            <Container>
                <div className="w-full flex justify-center mb-4 relative rounded-xl p-4 bg-white shadow-lg">
                    <img
                        src={appwriteService.getFilePreview(post.featuredimg)}
                        alt={post.title}
                        className="rounded-xl z-[1] max-w-sm"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <button className="mr-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
                                    Edit
                                </button>
                            </Link>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
                                onClick={deletePost}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6 text-gray-900 text-4xl font-semibold">
                    {post.title}
                </div>
                <div className="browser-css text-gray-900 text-2xl font-light">
                    <div className="p-8 bg-white rounded-xl shadow-lg">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
