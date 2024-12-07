import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import agreement from "@/public/agreement.svg";
import agreement2 from "@/public/agreement2.svg";
import arrow from "@/public/arrow.svg";
const RulesPage = () => {
  return (
    <div className="container p-4 mx-auto lg:p-6">
      <div className="flex items-center mt-4 mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">الصفحة الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>شروط نشر وبيع المنتجات الرقمية</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="mb-4 text-2xl font-medium">
        شروط نشر وبيع المنتجات الرقمية
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 border-spacing-1">
        <div className="flex gap-6">
          <Image src={agreement} alt="Rules" width={250} height={250} />
          <Image src={agreement2} alt="Rules" width={250} height={250} />
        </div>

        <div className="relative">
          نحن نريد ان تكون جميع المنتجات على **موقعنا** ذو جودة وقيمة وتعطي
          افادة للجميع لذلك يجب الالتزام في هذه الشروط لضمان ذلك وضمان قبول
          منتجك بسرعة معنا.
        </div>

        <div className="text-center ">
          <Image src={arrow} alt="Rules" width={250} height={250} />
        </div>
      </div>
      <div>
        <ol className="p-4 pl-6 space-y-2 list-decimal rounded-lg">
          <h4 className="mb-3 text-lg font-semibold text-gray-800">
            📃 قبل نشر منتجك الرقمي على نت مود لتسهيل عملية مراجعة منتجك الرقمي
            وسرعة قبوله معنا:
          </h4>
          <li className="text-gray-700">
            تأكد من نشر منتج رقمي لك عربي وموجهه للعرب ( باللغة العربية فقط ١٠٠٪
            )
          </li>
          <li className="text-gray-700">
            منتج رقمي من صنعك انت أو لديك أنت حقوق في نشره على الانترنت
          </li>
          <li className="text-gray-700">اضافة صورة معبرة عن المنتج الرقمي</li>
          <li className="text-gray-700">اضافة فئة رئيسية مناسبة</li>
          <li className="text-gray-700">اضافة فئة فرعية مناسبة</li>
          <li className="text-gray-700">
            إضافة <strong className="font-bold">إسم وعنوان</strong> للمنتج
            الرقمي
          </li>
          <li className="text-gray-700">
            أكتب <strong className="font-bold">وصف كافي</strong> للمنتج الرقمي:
            وهذا الوصف سوف يساعد المشتريين على معرفة ماذا سوف يشترون ولماذا سوف
            يشتروا المنتج الرقمي الخاص بك
          </li>
          <li className="text-gray-700">
            تحديد <strong className="font-bold">سعر معقول</strong> أو بامكانك
            اضافته بشكل مجاني
          </li>
          <li className="text-gray-700">
            تحميل <strong className="font-bold">منتج رقمي ذو جودة</strong> ويقدم
            الفائدة للزوار و المشتريين
          </li>
          <li className="text-gray-700">
            <strong className="font-bold">لا تنسى</strong> ان يكون متجرك ايضاً
            باسم مناسب و بصورتك أو صورة مناسبة أو لوجو مع وصف عن متجر معبر عنك
            وعن منتجاتك
          </li>
        </ol>
      </div>

      <hr />

      <div>
        <h4 className="mt-6 mb-6 text-lg font-semibold text-center text-primary">
          دعنا سوياً نقدم الافضل لعائلة موقعنا ( بائعين ومشترين وزوار )
        </h4>

        <ul className="p-4 pl-6 mb-2 space-y-2 rounded-lg">
          <li className="mb-4">
            {" "}
            نحن نتطلع إلى تقديم جودة عالية وتجربة مميزة لكل مستخدم سواء مشتري أو
            بائع .
          </li>
          <li>
            {" "}
            من خلال الالتزام بالشروط المحددة، نضمن أن نكون سوياً على المسار
            الصحيح لتحقيق هذا الهدف المشترك.
          </li>
          <li className="mb-9">
            وعندما تضع جهودك في إنشاء منتجات عالية الجودة وتلبية معايير النشر،
            فإنك تعزز سمعتك كبائع محترف وموثوق وتثبت مهاراتك و احترافيتك في
            مجالك.
          </li>
          <li className="mb-9">
            تذكر دائمًا أننا نسعى جميعًا لبناء منصة نت مود موقعًا آمنًا وموثوقًا
            لجميع المستخدمين.{" "}
          </li>
          <li className="mb-9">
            بالعمل معًا على تحسين جودة المنتجات والالتزام بالشروط المحددة، نحقق
            هدفنا المشترك ببناء بيئة إلكترونية أكثر أمانًا وموثوقية.
          </li>
        </ul>

        <hr />

        <ul className="mt-9">
          <li className="mb-6">
            دعنا نجعل كل إطلاق منتج على نت مود فرصة لتقديم الأفضل، ولنضع بصمتنا
            في جعل نت مود الوجهة المفضلة للبائعين والمشترين على حد سواء.
          </li>
          <li>
            نحن سعداء بوصولك الى هنا ونحن سعداء اكتر بوجودك كبائع على نت مود
            وسوف نفتخر بوجود منتجاتك على نت مود لنكون يد واحدة للنجاح سوياً{" "}
          </li>
        </ul>

        <hr className="mb-4 mt-9" />

        <ul className="mb-8">
          <li className="mt-6 mb-6">
            <strong>
              ابدأ الان في نشر منتجك الرقمي باحترافية , قم بالتسويق له , حقق
              مبيعات واسحب ارباحك .
            </strong>
          </li>
          <li>
            <strong>ولا تنسى </strong> اننا فريق واحد ويد واحدة وفي انتظارك في
            قسم الدعم والمساعدة لاي من استفساراتك أو اسئلتك .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesPage;
