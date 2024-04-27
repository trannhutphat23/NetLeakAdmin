import React, { useState } from "react";
import SearchTag from "../../components/Search/MovieSearch/SearchTag";
import SearchSelect from "../../components/Search/MovieSearch/SearchSelect";
import ImageTag from "../../components/Table/MovieTable/ImageTag";
import { Link } from "react-router-dom";

const MovieDetail = () => {

    const [isSelectStar, setIsSelectStar] = useState(false)
    const [isSelectDirect, setIsSelectDirect] = useState(false)

    const [images, setImages] = useState([]);
    function handleImageChange(event) {
        const files = event.target.files;
        const imagesArray = [];

        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagesArray.push(e.target.result);
                if (imagesArray.length === files.length) {
                    setImages(imagesArray);
                }
            };

            reader.readAsDataURL(files[i]);
        }

    };

    function handleDeleteImage(index) {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
            <div className="w-full flex flex-row items-start gap-5">
                <div className="w-1/4 flex flex-col items-center gap-10">
                    <div className="w-full h-[50px] border cursor-pointer flex items-center justify-center py-2 rounded-xl bg-[#101A33] hover:bg-[#0A3379] duration-200">
                        <div className="w-auto">
                            <input type="file" name="upload_imgs[]" id="upload-img" hidden onChange={handleImageChange} accept="image/*" />
                            <label htmlFor="upload-img" className="w-full flex flex-row items-center gap-2 cursor-pointer">
                                <i className="fa-solid fa-camera text-white  text-xl"></i>
                                <p className="text-white font-medium">Thêm hình ảnh</p>
                            </label>
                        </div>
                    </div>
                    <div className="relative w-full">
                        {images.map((image, index) => (
                            <div className="relative" key={index}>
                                <img src={image} className="w-full rounded-xl" />
                                <i className="fa-solid fa-xmark absolute top-2 right-2 bg-white rounded-full px-[2px] cursor-pointer hover:bg-[#fc0307] hover:text-white" onClick={() => handleDeleteImage(index)}></i>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-3/4 bg-white rounded-xl p-5">
                    <div className="w-full flex flex-row items-center justify-between  mb-10">
                        <p className="text-4xl font-bold">Thông tin phim</p>
                        <Link
                            to={"/upload"}
                            className="w-1/5 h-[50px] flex flex-row items-center justify-center duration-200 bg-[#101A33] rounded-xl hover:bg-[#0A3379] group hover:border-[#0A3379]"
                        >
                            <p className="font-bold text-white">Quản lý phim</p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="w-full flex flex-row items-center">
                            <p className="w-1/4">Tên phim:</p>
                            <input
                                type="text"
                                placeholder="Tên phim"
                                className="w-2/3 h-[40px] pl-3 border border-[#3e3e3e] rounded-md outline-none"
                            />
                        </div>
                        <div className="w-full flex flex-row items-center">
                            <p className="w-1/4">Dòng phim:</p>
                            <select className='w-1/4 h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]'>
                                <option value="" disabled selected>Loại</option>
                                <option value="">Phim bộ</option>
                                <option value="">Phim tập</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-row items-center">
                            <p className="w-1/4">Thể loại:</p>
                            <select className='w-1/4 h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]'>
                                <option value="" disabled selected>Loại</option>
                                <option value="">Phim bộ</option>
                                <option value="">Phim tập</option>
                            </select>
                        </div>

                        <div className="w-full  flex flex-row flex-wrap gap-2">
                            <SearchTag />
                            <SearchTag />
                            <SearchTag />
                            <SearchTag />
                        </div>

                        <div className="w-full flex flex-row items-center">
                            <p className="w-1/4">Thể loại:</p>
                            <div className='w-3/4 relative '>
                                <div className='relative w-2/3 flex items-center group'>
                                    <input
                                        onFocus={() => setIsSelectStar(true)}
                                        onBlur={() => setIsSelectStar(false)}
                                        type='text'
                                        placeholder='Tìm kiếm diễn viên...'
                                        className="w-full h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]"
                                    />
                                    <i class="absolute right-2 fa-solid fa-star"></i>
                                </div>
                                {isSelectStar && (
                                    <div className='absolute w-2/3 h-[200px] bg-white flex flex-col border border-[#3e3e3e] rounded-lg p-1 z-10'>
                                        <SearchSelect />
                                        <SearchSelect />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full  flex flex-row flex-wrap gap-2">
                            <ImageTag />
                            <ImageTag />
                            <ImageTag />
                            <ImageTag />
                        </div>

                        <div className="w-full flex flex-row items-center">
                            <p className="w-1/4">Đội ngũ:</p>
                            <div className='w-3/4 relative '>
                                <div className='relative w-2/3 flex items-center group'>
                                    <input
                                        onFocus={() => setIsSelectDirect(true)}
                                        onBlur={() => setIsSelectDirect(false)}
                                        type='text'
                                        placeholder='Tìm kiếm đội ngũ...'
                                        className="w-full h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]"
                                    />
                                    <i class="absolute right-2 fa-solid fa-video"></i>
                                </div>
                                {isSelectDirect && (
                                    <div className='absolute w-2/3 h-[200px] bg-white flex flex-col border border-[#3e3e3e] rounded-lg p-1'>
                                        <SearchSelect />
                                        <SearchSelect />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full  flex flex-row flex-wrap gap-2">
                            <ImageTag />
                            <ImageTag />
                            <ImageTag />
                            <ImageTag />
                        </div>
                        <div className="mt-10 flex items-center justify-center w-3/4">
                            <button className="h-[60px] w-2/5 border border-black rounded-lg hover:bg-[#0A3379] group hover:border-[#0A3379]">
                                <p className="text-xl font-bold group-hover:text-white">CẬP NHẬT</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;