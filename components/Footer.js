import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full mt-6 text-right bg-[#fafafc] overflow-hidden ">
      <div className="container px-4 py-12 mx-auto max-w-[100vw]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">نشرة نت مود البريدية</h3>
            <p className="text-sm text-muted-foreground">
              انضم إلى الرسائل البريدية وكن أول من يعرف. احصل اخبار
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full"
              />
              <Button className="w-full bg-[#ff5722] hover:bg-[#3d322e]">
                اشترك الان
              </Button>
            </div>
            {/* <div className="flex justify-start gap-2 mt-4">
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/amex.png" alt="American Express" className="h-8" />
              <img src="/discover.png" alt="Discover" className="h-8" />
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                الصفحة الرئيسية
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                شروط نشر وبيع المنتجات الرقمية
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                برنامج التسويق بالعمولة
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                الدعم و المساعدة
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                معلومات
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                الشروط والأحكام
              </Link>
              <Link
                href="#"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                كيف يعمل نت مود ؟
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <p>LOGO</p>
            <p className="text-sm text-muted-foreground">
              نت مود هو أفضل موقع عربي لبيع و شراء الخدمات و المنتجات الرقمية
              الجاهزة
            </p>
            <p className="text-sm text-muted-foreground">
              الكتب الالكترونية ، قوالب جاهزة للتحميل ، ثيمات ويب وقوالب مواقع و
              سكربتات ...
            </p>
            <p className="text-sm text-muted-foreground">
              تم تصميم و تطوير هذا الموقع
              <br />
              Webmoud.com :بواسطة فريق ويب مود
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
