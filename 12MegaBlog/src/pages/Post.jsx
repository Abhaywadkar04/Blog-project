import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
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
                    if (userData && post.userId === userData.$id) {
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
        <div className="py-8 bg-main">
            <Container>
                <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredimg)}
                        alt={post.title}
                        className="rounded-xl z-[1]"
                    />

                    <div className="absolute right-6 top-6 z-[2]">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-blue-600" className="mr-3 z-[2] rounded-xl px-2 py-1 hover:bg-blue-400 duration-300 sm:px-4 py-">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-600" className="rounded-xl px-2 py-1 hover:bg-red-800 duration-300" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-4xl font-bold text-zinc-100">{post.title}</h1>
                </div>
                <div className="browser-css text-2xl font-semibold">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
