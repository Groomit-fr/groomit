import React from "react";

const List = () => {

    const data = [
        {
            id: 1,
            name: "T-shirt Groomit 1",
            image: "/img/tshirt.svg",
            isAvailable: true,
            composition: "100% coton",
            careGuide: "Lavage à 30°",
            price: 20,
        },
        {
            id: 2,
            name: "T-shirt Groomit 2",
            image: "/img/tshirt.svg",
            isAvailable: true,
            composition: "100% coton",
            careGuide: "Lavage à 30°",
            price: 20,
        },
        {
            id: 3,
            name: "Hoodie Groomit 1",
            image: "/img/hoodie.svg",
            isAvailable: true,
            composition: "100% coton",
            careGuide: "Lavage à 30°",
            price: 20,
        }
    ]

    return (
        <div className="list">
            {data.map(item => (
                <div key={item.id} className="list__item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.price}€</p>
                </div>
            ))}
        </div>
    )
}

export default List;
