/* eslint-disable react/prop-types */
import movie from '../../../assets/movie.jpg'
import GenreTag from "./GenreTag";
import ImageTag from "./ImageTag";
import SearchTag from '../../Search/MovieSearch/SearchTag';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/user/userContext";
import { genreContext } from '../../../context/genre/genreContext';

const TableMovie = ({ index, id, title, type, releaseDate, lastUpdateDate, genresFilm, castFilm, directorsFilm }) => {
    const { casts, directors } = useContext(UserContext)
    const { genres } = useContext(genreContext)
    // const [genreData, setGenreData] = useState([]);
    // const [directorData, setDirectorData] = useState([]);
    const formatDate = (date) => {
        const originalDate = new Date(date);

        const day = originalDate.getDate().toString().padStart(2, '0');
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
        const year = originalDate.getFullYear();

        return `${day}/${month}/${year}`;
    }
    releaseDate = formatDate(releaseDate)
    lastUpdateDate = formatDate(lastUpdateDate)

    // useEffect(() => {
    //     const fetchGenreData = async () => {
    //         const newData = await Promise.all(genres.map(item => getGenreById(item)));
    //         setGenreData(newData);
    //         console.log(newData)
    //     };
    //     const fetchDirectorData = async () => {
    //         const newData = await Promise.all(directors.map(item => getDirectorById(item)));
    //         setDirectorData(newData);
    //         console.log(newData)
    //     }

    //     fetchGenreData();
    //     fetchDirectorData();
    // }, []);

    return (
        <div className="flex flex-row items-center border-b border-[#0A3379] ">
            <p className="w-1/12 text-center font-bold text-2xl">{index + 1}</p>
            <div className="w-10/12 border-x border-[#0A3379] p-2 flex flex-row gap-5">
                <div className="w-1/4 ">
                    <img
                        src={movie}
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="w-3/4 flex flex-col gap-1">
                    <div className="flex flex-row items-center">
                        <p className="w-1/5">Tên phim:</p>
                        <p className="font-bold capitalize">{title}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="w-1/5">Dòng phim:</p>
                        <p className='capitalize'>{type == 'series'?'Phim bộ':type == 'movie'?'Phim tập':''}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="w-1/5">Ngày ra mắt:</p>
                        <p>{releaseDate}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="w-1/5">Cập nhật:</p>
                        <p>{lastUpdateDate}</p>
                    </div>

                    <div className="flex flex-row items-center">
                        <p className="w-1/5">Thể loại:</p>
                        <div className="flex flex-row gap-1 flex-wrap">
                            {/* {genreData.length!=0 && genreData.map((item, index)=> {
                            return <GenreTag key={index} title={item.title}/>
                        })} */}

                            {
                                genres.map((genre, index) => {
                                    if (genresFilm.some(id => id == genre._id))
                                        return (
                                            <div key={index} >
                                                <SearchTag content={genre.title} />
                                            </div>
                                        )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col mb-3">
                        <p className="w-1/5 mb-1">Diễn viên:</p>
                        <div className="flex flex-row gap-2 flex-wrap">
                            {
                                casts.map((cast, index) => {
                                    if (castFilm.some(id => id == cast._id))
                                        return (
                                            <div key={index} >
                                                <ImageTag image={cast.avatar} content={cast.name} />
                                            </div>
                                        )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-col mb-3">
                        <p className="w-1/5 mb-1">Đội ngũ:</p>
                        <div className="flex flex-row gap-2 flex-wrap">
                            {
                                directors.map((director, index) => {
                                    if (directorsFilm.some(id => id == director._id))
                                        return (
                                            <div key={index}
                                            >
                                                <ImageTag image={director.avatar} content={director.name} />
                                            </div>
                                        )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/12 flex items-center justify-center'>
                <Link
                    to={`/chi-tiet/${id}`}
                    className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center rounded-full hover:bg-[#0A3379] duration-150 east-out group"
                >
                    <i className="fa-solid fa-gear text-2xl  text-[#0A3379] group-hover:text-white group-hover:rotate-90 duration-150 east-out"></i>
                </Link>
            </div>
        </div>
    );
}

export default TableMovie;