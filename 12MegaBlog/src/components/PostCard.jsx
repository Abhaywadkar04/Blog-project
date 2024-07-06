import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimg }) {
    // Generate the preview URL safely
    let previewUrl = '';
    if (featuredimg) {
        try {
            previewUrl = appwriteService.getFilePreview(featuredimg);
        } catch (error) {
            console.error("Error getting file preview:", error);
        }
    } else {
        console.error("Missing fileId (featuredImage)");
    }

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {previewUrl ? (
                        <img src={previewUrl} alt={title} className='rounded-xl' />
                    ) : (
                        <div className="placeholder-image">Image not available</div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
