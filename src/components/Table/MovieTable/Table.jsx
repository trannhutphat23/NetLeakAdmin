import React from 'react';
import TableMovie from './TableMovie';

const Table = () => {
    return (
        <div className='w-full flex justify-center bg-white rounded-t-lg '>
            <div className='w-full flex flex-col '>
                <div className='w-full h-[50px] flex flex-row items-center gap-3 bg-[#0A3379] rounded-t-lg'>
                    <p className='w-1/12 text-center font-bold text-white'>STT</p>
                    <p className='w-10/12 text-center font-bold text-white'>Thông tin phim</p>
                    <div className='w-1/12'></div>
                </div>
                <div className='w-full flex flex-col border border-b-0 border-[#0A3379]'>
                    <TableMovie />
                    <TableMovie />
                    <TableMovie />
                    <TableMovie />
                    <TableMovie />
                </div>
            </div>
        </div>
    );
}

export default Table;
