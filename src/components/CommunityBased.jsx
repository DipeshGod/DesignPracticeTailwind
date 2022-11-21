import { community } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CommunityBased = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Join the community !<br className="sm:block hidden" /> Learn and Help
        Others Learn
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our every courses is designed by group of experts. Reqest For Comments
        (RFC) is issued for every courses before they are created. And
        interactive QnA is available for every courses
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={community} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CommunityBased;
