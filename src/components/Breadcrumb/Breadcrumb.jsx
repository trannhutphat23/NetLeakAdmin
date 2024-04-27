/* eslint-disable react/no-unknown-property */

const Breadcrumb = () => {
    return (
        <div className="w-auto h-[40px] flex flex-row items-center gap-1">
            <div className="flex flex-row items-center gap-2 text-white cursor-pointer hover:bg-white rounded-md duration-200 group py-1 px-3">
                <i className="fa-solid fa-chart-simple text-xl group-hover:text-[#0A3379] duration-200"></i>
                <p className=" font-medium group-hover:text-[#0A3379] duration-200">Thống kê</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-white">
                <svg className="rtl:rotate-180 w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <p className="font-medium">Thêm diễn viên</p>
            </div>
        </div>
    );
}

export default Breadcrumb;