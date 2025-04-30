const SearchFilters = () => {
    return (
        <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <div className="cursor-pointer w-[250px] h-[64px] px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">where</p>
                        <p className="text-sm">wantedddd</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">check in</p>
                        <p className="text-sm">add dates</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">check out</p>
                        <p className="text-sm">add dates</p>
                    </div>

                    <div className="cursor-pointer h-[64px] px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
                        <p className="text-xs font-semibold">who</p>
                        <p className="text-sm">add guests</p>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="cursor-pointer p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
                    <svg viewBox="0 0 32 32" style={{display:'block', fill:'none', height:'16px', width:'16px', stroke:'currentColor', strokeWidth:4, overflow:'visible'}} aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default SearchFilters;