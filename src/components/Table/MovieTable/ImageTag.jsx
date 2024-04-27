import React from "react";
import image from '../../../assets/img.jpg'

const ImageTag = () => {
    return (
        <div className="p-1 pr-3 bg-slate-300 rounded-full flex flex-row items-center gap-3">
            <img
                src={image}
                className="w-10 rounded-full"
            />
            <p className="font-bold">Phong Ly</p>
        </div>
    );
}

export default ImageTag;