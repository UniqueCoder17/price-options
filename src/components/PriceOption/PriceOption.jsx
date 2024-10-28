import { AiFillCheckCircle } from "react-icons/ai";

const PriceOption = ({ option }) => {
    const { priceOptionName, price, features } = option;

    return (
        <div className="border rounded-lg p-6 m-4 shadow-lg transition-transform duration-200 hover:scale-105 bg-white flex flex-col h-full">
            <div className="flex-grow">
                <h2 className="text-5xl md:text-7xl text-center text-gray-800">
                    <span>${price}</span>
                    <span className="text-2xl md:text-3xl">/month</span>
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-center mt-4">{priceOptionName}</h3>
                <ul className="list-none p-0 mt-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 mt-2 text-base md:text-lg">
                            <AiFillCheckCircle className="text-green-500 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-400">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default PriceOption;
