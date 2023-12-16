import Header from "@/components/Header";
import BgVideo from "@/components/BgVideo";
import Footer from "@/components/Footer";
import style from "@/styles/personal-info.module.scss";

export default function page() {
  return (
    <>
      <Header />
      <BgVideo />
      <div className={style.personal}>
        <h1>Personal Info</h1>
        <div className={style.boxes}>
          <div className={style.box}>
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, aperiam similique? Provident quas iure reiciendis
              quae ex quaerat, ut blanditiis non perferendis laboriosam
              obcaecati ipsam fuga deleniti error natus nisi.
            </p>
          </div>
          <div className={style.box}>
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, aperiam similique? Provident quas iure reiciendis
              quae ex quaerat, ut blanditiis non perferendis laboriosam
              obcaecati ipsam fuga deleniti error natus nisi.
            </p>
          </div>
          <div className={style.box}>
            <h2>Heading</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis, aperiam similique? Provident quas iure reiciendis
              quae ex quaerat, ut blanditiis non perferendis laboriosam
              obcaecati ipsam fuga deleniti error natus nisi.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
