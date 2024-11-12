import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({ 
    cloud_name: 'dzuyuugvb', 
    api_key: process.env.API_KEY_CLOUDINARY , 
    api_secret: process.env.API_SECRET_CLOUDINARY
});

    
export default async function upload(file) {
    return new Promise((resolve, reject) => {
        const buffer = Buffer.from(file.buffer);

        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "api-project-imgs", resource_type: "auto" },
            (error, result) => {
                if (error) {
                    console.error('Upload failed:', error);
                    return reject(error);
                }
                resolve(result.secure_url);
            }
        );

        uploadStream.end(buffer);
    });
}
