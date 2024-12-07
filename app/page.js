import HeroSwiper from "@/components/HeroSwiper";
import { ProductSlider } from "@/components/ProductSlider";

const Home = () => {
  return (
    <div className="">
      <HeroSwiper />

      <div className="container px-4 py-8 mx-auto">
        <h1 className="mt-20 mb-8 text-3xl font-bold text-right">
          المنتجات المميزة
        </h1>
        <ProductSlider />

        <h1 className="mt-20 mb-8 text-3xl font-bold text-right">الأعمال</h1>
        <ProductSlider />

        <h1 className="mt-20 mb-8 text-3xl font-bold text-right">
          كتب تعليم لـ الأطفال
        </h1>
        <ProductSlider />

        <h1 className="mt-20 mb-8 text-3xl font-bold text-right">
          التطوير والتنمية الشخصية
        </h1>
        <ProductSlider />
      </div>
    </div>
  );
};

export default Home;
