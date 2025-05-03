const ReservationSidebar = () => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$540 for 1 night</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>


                <select className="w-full -ml-1 text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white hover:bg-airbnb-dark bg-airbnb rounded-xl">Book</div>

            <div className="mb-4 flex justify-between align-center">
                <p>$540 * 5 nights</p>

                <p>$2,700</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Mia's fee</p>

                <p>$50</p>
            </div>

            <hr />
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p>$2,750</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar;