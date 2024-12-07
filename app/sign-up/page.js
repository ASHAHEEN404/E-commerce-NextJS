"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/icons";

const schema = yup.object().shape({
  email: yup.string().email("أدخل إيميل صالح").required("الإيميل مطلوب"),
  password: yup
    .string()
    .min(6, "الرقم السري يجب ان يكون على الأقل 6 أحرف")
    .required("الرقم السري مطلوب"),
  userType: yup.string().required("نوع المستخدم مطلوب"),
  shopName: yup.string().when("userType", {
    is: "seller",
    then: yup.string().required("إسم المتجر مطلوب"),
  }),
  phone: yup.string().when("userType", {
    is: "seller",
    then: yup.string().required("رقم الهاتف مطلوب"),
  }),
  location: yup.string().when("userType", {
    is: "seller",
    then: yup.string().required("الموقع مطلوب"),
  }),
});

export default function SignUpPage() {
  const [userType, setUserType] = useState("regular");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen text-white " dir="rtl">
      <div className="container flex flex-col items-center justify-center h-screen mx-auto">
        <div className="w-full max-w-lg p-6 space-y-6 border rounded-lg shadow-lg border-primary">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold text-primary">
              إنضم إلينا الأن 👋
            </h1>
            <div className="flex items-center gap-2 text-black">
              <span className="text-[0.7rem]">هل لديك حساب بالفعل؟</span>
              <Link
                href="/login"
                className="text-sm text-primary hover:text-primary/80"
              >
                تسجيل دخول &larr;
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-2">
              <Label className="text-black" htmlFor="email">
                الإيميل
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                {...register("email")}
                className="bg-transparent border-gray-700"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label className="text-black" htmlFor="password">
                الرقم السري
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className="bg-transparent border-gray-700"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label className="text-black">نوع الحساب</Label>
              <RadioGroup
                value={userType}
                onValueChange={setUserType}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem
                    value="regular"
                    id="regular"
                    {...register("userType")}
                    className="sr-only peer"
                  />
                  <Label
                    htmlFor="regular"
                    className="flex flex-col items-center justify-between text-black border-2 rounded-md p-4 hover:bg-gray-200 peer-data-[state=checked]:border-primary"
                  >
                    <Icons.user className="w-6 h-6 mb-2" />
                    مستخدم
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="seller"
                    id="seller"
                    {...register("userType")}
                    className="sr-only peer"
                  />
                  <Label
                    htmlFor="seller"
                    className="flex flex-col items-center justify-between text-black border-2 rounded-md p-4 hover:bg-gray-200 peer-data-[state=checked]:border-primary"
                  >
                    <Icons.store className="w-6 h-6 mb-2" />
                    بائع
                  </Label>
                </div>
              </RadioGroup>
              {errors.userType && (
                <p className="text-sm text-red-500">
                  {errors.userType.message}
                </p>
              )}
            </div>

            {userType === "seller" && (
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-black" htmlFor="shopName">
                    إسم المتجر
                  </Label>
                  <Input
                    id="shopName"
                    placeholder="ضع إسم متجرك"
                    {...register("shopName")}
                    className="bg-transparent border-gray-700"
                  />
                  {errors.shopName && (
                    <p className="text-sm text-red-500">
                      {errors.shopName.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label className="text-black" htmlFor="phone">
                    رقم الهاتف
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                    className="bg-transparent border-gray-700"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label className="text-black" htmlFor="location">
                    الموقع
                  </Label>
                  <Input
                    id="location"
                    placeholder="المدينة, البلد"
                    {...register("location")}
                    className="bg-transparent border-gray-700"
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded bg-primary hover:bg-primary/80"
            >
              تسجيل الإشتراك
            </Button>

            <Button
              variant="outline"
              className="w-full text-black bg-white rounded-none hover:bg-gray-100"
            >
              <svg width="24" height="24" viewBox="0 0 128 128">
                <rect
                  clip-rule="evenodd"
                  fill="none"
                  fill-rule="evenodd"
                  height="128"
                  width="128"
                ></rect>
                <path
                  clip-rule="evenodd"
                  d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648    C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64"
                  fill="#FBBC05"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16    C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182"
                  fill="#EA4335"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937    L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221    C80.964,99.86,73.689,101.818,65.457,101.818"
                  fill="#34A853"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727    h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64"
                  fill="#4285F4"
                  fill-rule="evenodd"
                ></path>
              </svg>
              التسجيل عبر جوجل
            </Button>
          </form>

          <div className="text-sm text-center text-gray-400">
            بتشغيل حسابك سوف توافقك ب
            <Link href="/terms" className="text-primary hover:text-primary/80">
              الشروط والاحكام
            </Link>{" "}
            و{" "}
            <Link
              href="/privacy"
              className="text-primary hover:text-primary/80"
            >
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
