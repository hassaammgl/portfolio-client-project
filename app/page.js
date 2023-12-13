import Header from "@/components/Header";
import { FaHandPeace } from "react-icons/fa";

export default function page() {
  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.left}>
          <div className={style.box}>
            <FaHandPeace className={style.hand} />
            Hi There! I&apos;m Monster Programming
          </div>
          <div className={style.heading}>
            <h1>
              A <span>Frontend Engineer.</span>I Help Startups{" "}
              <span>Launch</span>And <span>Grow</span> Their Products
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim
              nobis ad laboriosam consectetur, sit architecto corporis nostrum.
              Iusto fugiat dolorem reprehenderit veritatis incidunt aliquid.
              Recusandae provident consequatur totam repellendus fugiat magnam,
              rem sed pariatur excepturi animi omnis ipsa quam consectetur
              cumque! Illum aliquam optio dolorum, odit id dicta blanditiis!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
