const Cart = () => {
    return (
        <div className="w-1/3">
            <div className="p-6 border-2 rounded-xl">
                <div className="border-b-2">
                    <h1 className="text-lg font-bold text-[#2F80ED] mb-4">Credit Hour Remaining hr</h1>
                </div>
                <div className="border-b-2">
                    <h1 className="mb-5 text-xl font-bold mt-4">Course Name</h1>
                    <div>
                        <ol className="">
                            <li>Introduction to c programming</li>
                            <li>Introduction to C++ for DSA</li>
                            <li>Software Engineering</li>
                        </ol>
                    </div>
                </div>
                <div className="border-b-2">
                    <h1 className="my-4 font-medium text-base">Total Credit Hour : {}</h1>
                </div>
                <div>
                    <h1 className="mt-4 font-semibold text-base">Total Price : {} USD</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;