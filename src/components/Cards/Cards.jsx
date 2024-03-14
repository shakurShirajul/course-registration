import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleCreditPrice }) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 w-2/3 gap-6">
            {
                cards.map(card =>
                    <Card
                        key={card.id} card={card}
                        handleCreditPrice={handleCreditPrice}
                    />
                )
            }
        </div>
    );
};

export default Cards;