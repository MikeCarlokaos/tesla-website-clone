import { useInView } from "react-intersection-observer";

type ProductsType = {
  id: number;
  coverImg: string;
  title: string;
  text: string;
  order: string;
  view: string;
  textVisible: string;
  linkVisible: string;
  buttonVisible: string;
  key: number;
  index: number;
};

const ProductSlide = (props: ProductsType) => {
  const { ref: upRef, inView: upInView } = useInView();
  const { ref: midRef, inView: midInView } = useInView();
  const { ref: downRef, inView: downInView } = useInView();

  return (
    <section
      style={{ backgroundImage: `url(${props.coverImg})` }}
      className="relative w-full h-full bg-cover bg-center snap-start"
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[980px] h-full mx-auto 
        ${upInView ? "opacity-100" : "opacity-50"}
        ${midInView ? "opacity-100" : "opacity-0"}
        ${downInView ? "opacity-100" : "opacity-50"}`}
      >
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center  ">
          <h1 className="text-[40px] leading-[48px] font-semibold capitalize mb-3">
            {props.title}
          </h1>
          <a
            href="blank"
            className={`${props.linkVisible} text-[16px] leading-[20px] tracking-wide underline`}
          >
            {props.text}
          </a>
          <p
            className={`${props.textVisible} text-[16px] leading-[20px] tracking-wide`}
          >
            {props.text}
          </p>
        </div>

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center gap-x-5">
          <a
            href="blank"
            className="bg-var-black-primary text-white font-semibold capitalize py-1.5 px-16 rounded"
          >
            {props.order}
          </a>
          <a
            href="blank"
            className={`${props.buttonVisible} bg-var-white-primary text-var-gray-primary font-semibold capitalize py-1.5 px-16 rounded`}
          >
            {props.view}
          </a>
        </div>
      </div>
      <div ref={upRef} className="absolute top-5 left-0">
        egwg
      </div>
      <div ref={midRef} className="absolute top-2/4 left-0">
        egwg
      </div>
      <div ref={downRef} className="absolute bottom-5 left-0">
        egwg
      </div>
    </section>
  );
};

export default ProductSlide;
