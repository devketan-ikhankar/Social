import React, { useEffect, useState } from "react";

type Product = { id: number; title: string };

const FetchDataComponent: React.FC = () => {
    const [fectData, setFechData] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setFechData(data);
        };
        fetchData();
    }, []);

    const handleDelete = (id: number) => {
        const newData = fectData.filter((item) => item.id !== id);
        setFechData(newData);
    };

    const handleUp = (id: number) => {
        setFechData((prevData) => {
            const newData = [...prevData];

            for (let i = 1; i < newData.length; i++) {
                if (newData[i].id === id) {
                    // Swap with the previous item
                    [newData[i - 1], newData[i]] = [newData[i], newData[i - 1]];
                    break;
                }
            }

            return newData;
        });
    };

    const handleDown = (id: number) => {
        setFechData((prevData) => {
            const newData = [...prevData];

            for (let i = 0; i < newData.length - 1; i++) {
                if (newData[i].id === id) {
                    // Swap with the next item
                    [newData[i], newData[i + 1]] = [newData[i + 1], newData[i]];
                    break;
                }
            }

            return newData;
        });
    };


    return (
        <div>
            <h2>Fetched Data ({fectData.length})</h2>
            {fectData.map((item) => (
                <div key={item.id}>
                    <p>
                        {item.id}. {item.title}
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => handleUp(item.id)}>Up</button>
                        <button onClick={() => handleDown(item.id)}>Down</button>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FetchDataComponent;
