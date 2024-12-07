"use client";

import {
  CircuitBoard,
  Mail,
  Phone,
  User,
  UserCircle,
  Settings,
  Share2,
  Bell,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function UserSettings() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50/50">
      <div className="container p-6 mx-auto">
        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Sidebar Navigation */}
          <Card className="p-4 space-y-4 h-fit">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/5 text-primary">
              <UserCircle className="w-5 h-5" />
              <span className="font-medium">إعدادات الملف الشخصي</span>
            </div>
            <nav className="space-y-2">
              <Button variant="ghost" className="justify-start w-full gap-3">
                <Settings className="w-5 h-5 ml-3" />
                الإعدادات
              </Button>
              <Button variant="ghost" className="justify-start w-full gap-3">
                <Share2 className="w-5 h-5 ml-3" />
                روابط التواصل الاجتماعي
              </Button>
              <Button variant="ghost" className="justify-start w-full gap-3">
                <Bell className="w-5 h-5 ml-3" />
                الإشعارات
              </Button>
            </nav>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">إعدادات الملف الشخصي</h1>

            {/* Profile Image Section */}
            <div className="relative w-32 h-32 mx-auto lg:mx-0">
              <div className="flex items-center justify-center w-full h-full border-2 rounded-full border-muted bg-muted">
                <CircuitBoard className="w-16 h-16 text-muted-foreground" />
              </div>
              <Button
                size="icon"
                className="absolute bottom-0 left-0 rounded-full"
              >
                <UserCircle className="w-4 h-4" />
              </Button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    icon={<Mail className="w-4 h-4" />}
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input id="firstName" icon={<User className="w-4 h-4" />} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">اسم الأب</Label>
                    <Input
                      id="middleName"
                      icon={<User className="w-4 h-4" />}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">اسم العائلة</Label>
                    <Input id="lastName" icon={<User className="w-4 h-4" />} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    type="tel"
                    icon={<Phone className="w-4 h-4" />}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="id">رقم الهوية</Label>
                  <Input id="id" icon={<Shield className="w-4 h-4" />} />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <Label>نوع الحساب</Label>
                <RadioGroup
                  defaultValue="personal"
                  className="flex flex-col gap-2"
                >
                  <div className="flex flex-row-reverse items-center space-x-2">
                    <RadioGroupItem value="personal" id="personal" />
                    <Label htmlFor="personal">حساب شخصي</Label>
                  </div>
                  <div className="flex flex-row-reverse items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">حساب تجاري</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                حفظ التغييرات
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
