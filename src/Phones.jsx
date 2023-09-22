import axios from "axios";
import { useEffect, useState } from "react";
import { XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Legend } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                setPhones(phonesWithFakeData)
            })
    }, [])
    console.log(phones)
    return (
        <div>
            <h2>
                Phones: {phones.length}
            </h2>
            <BarChart
                width={800}
                height={500}
                data={phones}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" stackId="name" fill="blue" />
            </BarChart>
        </div>
    );
};

export default Phones;
<CartesianGrid strokeDasharray="3 3" />