import ImageBox from "./ImageBox";
// import { useContext } from "react";
// import { UserContext } from "../../../context/user/userContext";

const Table = () => {
    // const { casts , setCasts } = useContext(UserContext)

    return (
        <div className='w-full h-full grid grid-cols-4 gap-5'>
            <ImageBox />
        </div>
    );
}

export default Table;
