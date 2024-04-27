/* eslint-disable react/prop-types */

const ImageTag = ({avatar, name}) => {
    return (
        <div className="p-1 pr-3 bg-slate-300 rounded-full flex flex-row items-center gap-3">
            <img
                src={avatar}
                className="w-10 h-10 object-cover rounded-full"
            />
            <p className="font-bold">{name}</p>
        </div>
    );
}

export default ImageTag;