import img from '../../../assets/img.jpg'

const ImageBox = () => {
    return (
        <div className="w-full flex flex-col items-center border border-[#0A3379] ">
            <img
                src={img}
                className="w-full"
            />
            <p className="py-5 font-bold">Phong Ly</p>
        </div>
    );
}

export default ImageBox;