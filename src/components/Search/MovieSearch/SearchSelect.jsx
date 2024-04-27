import React from "react";
import image from '../../../assets/img.jpg'

const SearchSelect = () => {
    return (
        <div className="w-full flex flex-row items-center p-2 hover:bg-blue-200 rounded-lg gap-3 cursor-pointer">
            <img
                src={image}
                className="w-1/6 rounded-lg"
            />
            <p className="font-medium text-lg">Phong Ly</p>
        </div>
    );
}

export default SearchSelect;