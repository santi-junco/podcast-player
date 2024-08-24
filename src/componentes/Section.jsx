import { HeaderSections } from "./HeaderSections";
import "./../styles/section.css";

export const Section = ({ headerData, card: CardComponent, cardData }) => {
  return (
    <section className="container-section">
      <HeaderSections {...headerData} />
      <div className="data-section">
        {cardData.map((data) => (
          <CardComponent key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};
