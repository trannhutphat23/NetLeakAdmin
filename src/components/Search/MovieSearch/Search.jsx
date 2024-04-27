import React, { useState } from 'react';
import SearchSelect from './SearchSelect';
import SearchTag from './SearchTag';

const Search = () => {

    const [isSelectStar, setIsSelectStar] = useState(false)
    const [isSelectDirect, setIsSelectDirect] = useState(false)

    return (
        <div className='w-[95%] flex flex-col gap-5'>
            <div className='w-full flex flex-row gap-3'>
                <div className='relative w-1/4 flex items-center group'>
                    <input
                        type='text'
                        placeholder='Tìm kiếm...'
                        className="w-full h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]"
                    />
                    <i class="absolute right-2 fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='w-1/4 relative '>
                    <div className='relative w-full flex items-center group'>
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
                        <div className='absolute w-full h-[200px] bg-white flex flex-col border border-[#3e3e3e] rounded-lg p-1'>
                            <SearchSelect />
                            <SearchSelect />
                        </div>
                    )}
                </div>

                <div className='w-1/4 relative '>
                    <div className='relative w-full flex items-center group'>
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
                        <div className='absolute w-full h-[200px] bg-white flex flex-col border border-[#3e3e3e] rounded-lg p-1'>
                            <SearchSelect />
                            <SearchSelect />
                        </div>
                    )}
                </div>

                <select className='w-[12%] h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]'>
                    <option value="" disabled selected>Loại</option>
                    <option value="">Phim bộ</option>
                    <option value="">Phim tập</option>
                </select>

                <select className='w-[12%] h-[40px] pl-2 rounded-lg border border-[#3e3e3e] focus:ring-[#679cf8] focus:outline-[#679cf8]'>
                    <option value="" disabled selected>Thể loại</option>
                    <option value="">Anime</option>
                    <option value="">Wibu</option>
                </select>
            </div>

            <div className='flex flex-row items-start justify-between'>
                <div className='flex flex-row gap-3 w-auto'>
                    <p className='w-auto font-bold text-lg'>Tìm kiếm: </p>
                    <div className='w-auto flex flex-row flex-wrap gap-2'>
                        <SearchTag />
                        <SearchTag />
                        <SearchTag />
                        <SearchTag />
                        <SearchTag />
                    </div>
                </div>
                <button className='border border-[#3e3e3e] py-1 px-4 rounded-lg hover:bg-[#0A3379] duration-150 group'>
                    <p className='font-medium group-hover:text-white duration-150'>Reset</p>
                </button>
            </div>


        </div>
    );
}

export default Search;
