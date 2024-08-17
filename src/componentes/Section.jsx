import { HeaderSections } from "./HeaderSections";
import "./../styles/section.css";

export const Section = ({ headerData, card }) => {
  return (
    <section className="container-section">
      <HeaderSections {...headerData} />
      <div className="data-section">{card}</div>
    </section>
  );
};
