import { HeaderSections } from "./HeaderSections";
import { QuickCard } from "./QuickCard";
import { Spinner } from "./Spinner";
import "./../styles/section.css";
import { useState } from "react";

export const Section = ({ headerData, card: CardComponent, cardData, loading }) => {
  const [current, setCurrent] = useState(0)
  const itemsPerPage = CardComponent === QuickCard ? 7 : 5
  const totalPages = Math.ceil(cardData.length / itemsPerPage)

  const handleNext = () => {
    setCurrent((prevIndex) => prevIndex + 1 < totalPages ? prevIndex + 1 : 0)
  }

  const handlePrev = () => {
    setCurrent((prevIndex) => prevIndex - 1 >= 0 ? prevIndex - 1 : totalPages - 1)
  }

  const start = current * itemsPerPage
  const end = start + itemsPerPage

  return (
    <section className="container-section">
      <HeaderSections {...headerData} onNext={handleNext} onPrev={handlePrev} />
      {loading ? <Spinner></Spinner> : 
      <div className={`data-section ${CardComponent === QuickCard ? 'quick-section' : ''}`} >
        {cardData.slice(start, end).map((data) => (
          <CardComponent key={data.id} {...data} />
        ))}
      </div>
      }
    </section>
  );
};
