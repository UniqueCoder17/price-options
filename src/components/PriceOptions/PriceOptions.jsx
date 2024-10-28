import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const options = [
        {
            "id": 1,
            "priceOptionName": "Basic",
            "price": 20,
            "features": [
                "Access to gym facilities during staffed hours",
                "Free initial fitness assessment",
                "Locker room access",
                "Standard cardio and strength equipment access",
                "One guest pass per quarter",
                "Member discount on select gym merchandise"
            ]
        },
        {
            "id": 2,
            "priceOptionName": "Standard",
            "price": 40,
            "features": [
                "24/7 gym access",
                "Unlimited group fitness classes",
                "Free guest pass once a month",
                "Access to all basic equipment",
                "10% discount on personal training sessions",
                "Monthly wellness newsletter",
                "Standard locker rental included",
                "Access to virtual workout library"
            ]
        },
        {
            "id": 3,
            "priceOptionName": "Premium",
            "price": 60,
            "features": [
                "All Standard plan benefits",
                "Access to sauna and steam rooms",
                "Monthly fitness and diet consultation",
                "Personal trainer for one session per month",
                "15% discount on all merchandise",
                "Priority access to popular group classes",
                "Access to premium cardio and strength equipment",
                "Weekly virtual fitness challenges with rewards"
            ]
        },
        {
            "id": 4,
            "priceOptionName": "VIP",
            "price": 90,
            "features": [
                "All Premium plan benefits",
                "Dedicated locker",
                "Unlimited personal training sessions",
                "Access to VIP lounge",
                "Priority booking for fitness classes",
                "Customized fitness and meal planning",
                "Complimentary health supplements and snacks",
                "Free entry to special gym events and workshops",
                "Quarterly one-on-one wellness consultations",
                "Spa access with free monthly treatments"
            ]
        }
    ];

    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {
                options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
