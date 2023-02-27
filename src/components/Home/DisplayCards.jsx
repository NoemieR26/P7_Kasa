import housings from "../../data/housing_data.json"
import Card from "./Card"
import"./Home.css";

export default function DisplayCards() {
    return(
        <section className="housings_container">
        <ul className="housings_list">
            {housings.map(({ id, title, cover }) => (
                <Card
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
        </ul>
    </section>
    )
}