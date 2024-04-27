import TableMovie from './TableMovie';
import { useContext } from "react";
import { UserContext } from "../../../context/user/userContext";

const Table = () => {
    const { movies } = useContext(UserContext)
    return (
        <div className='w-full flex justify-center bg-white rounded-t-lg '>
            <div className='w-full flex flex-col '>
                <div className='w-full h-[50px] flex flex-row items-center gap-3 bg-[#0A3379] rounded-t-lg'>
                    <p className='w-1/12 text-center font-bold text-white'>STT</p>
                    <p className='w-10/12 text-center font-bold text-white'>Thông tin phim</p>
                    <div className='w-1/12'></div>
                </div>
                <div className='w-full flex flex-col border border-b-0 border-[#0A3379]'>
                    {movies.map((item,index)=> {
                        console.log(item)
                        return <TableMovie 
                            key={index}
                            title={item.title}
                            type={item.type}
                            releaseDate={item.released}
                            lastUpdateDate={item.updatedAt}
                            genres={item.genres}
                            cast={item.cast}
                            directors={item.directors}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Table;
