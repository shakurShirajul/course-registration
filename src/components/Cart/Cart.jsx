const Cart = ({ creditHour, price, courseCart}) => {
    return (
        <div className="w-1/3">
            <div className="p-6 border-2 rounded-xl">
                <div className="border-b-2">
                    <h1 className="text-lg font-bold text-[#2F80ED] mb-4">Credit Hour Remaining {20-creditHour} hr</h1>
                </div>
                <div className="border-b-2">
                    <h1 className="text-xl font-bold mt-4">Course Name</h1>
                    <div className="m-5">
                        <ol className="list-decimal text-[#1C1B1B99] text-base font-normal">
                            {
                                courseCart.map(c=>
                                    <li>{c}</li>
                                )
                            }
                        </ol>
                    </div>
                </div>
                <div className="border-b-2">
                    <h1 className="my-4 font-medium text-base">Total Credit Hour : {creditHour}</h1>
                </div>
                <div>
                    <h1 className="mt-4 font-semibold text-base">Total Price : {price} USD</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;