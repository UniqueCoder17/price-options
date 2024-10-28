import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetching data from the API
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(response => {
                // Accessing the 'data' property and then the 'data' array of phones
                const fetchedPhones = response.data.data;
                const phoneData = fetchedPhones.map(phone => {
                    const name = phone.phone_name; // Get phone name directly from the API
                    const price = Math.floor(Math.random() * (1000 - 300 + 1)) + 300; // Generate random price
                    return { name, price }; // Return the data
                });
                setPhones(phoneData); // Set the phone data
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false even if there is an error
            });
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ResponsiveContainer width="90%" height={300}>
                    <BarChart data={phones}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
};

export default Phones;
