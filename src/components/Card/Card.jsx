import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";


const Card = ({ card }) => {
    // console.log(card);
    const { name, description, photo, price, credit } = card;
    return (
        <div>
            <div className="border-2 rounded-xl p-4">
                <div className="mb-4">
                    <img src={photo} alt="" className="w-full" />
                </div>
                <div className="space-y-3">
                    <h1 className="font-semibold text-lg">{name}</h1>
                    <p className="text-sm font-normal text-[#1C1B1B99]">{description}</p>
                </div>
                <div className="flex space-x-4 mt-5 mb-6">
                    <div className="flex items-center gap-3">
                        <FiDollarSign className="text-xl" />
                        <h1 className="text-base text-[#1C1B1B99]">Price: {price}</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <GoBook className="text-xl" />
                        <h1 className="text-base text-[#1C1B1B99]">Credit: {credit}hr</h1>
                    </div>
                </div>
                <div>
                    <button className="primary-btn">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;