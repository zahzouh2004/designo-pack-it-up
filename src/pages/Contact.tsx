import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { sendEmail } from '@/utils/emailService';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    packageType: 'cardboard',
    quantity: '',
    dimensions: '',
    printing: false,
    design: false,
    message: '',
    thickness: 'standard',
    finish: 'matte',
    plasticType: 'pet',
    transparency: 'transparent',
    protectionType: 'shock',
    productType: '',
    foodType: 'dry',
    certifications: 'none'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail(formData);
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك قريبًا لمناقشة التفاصيل",
      });
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى لاحقًا",
        variant: "destructive",
      });
    }
  };

  const renderAdditionalFields = () => {
    switch (formData.packageType) {
      case 'cardboard':
        return (
          <div className="space-y-4">
            <div>
              <Label>سماكة الكرتون</Label>
              <Select 
                value={formData.thickness}
                onValueChange={(value) => setFormData(prev => ({ ...prev, thickness: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر سماكة الكرتون" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">عادي</SelectItem>
                  <SelectItem value="medium">متوسط</SelectItem>
                  <SelectItem value="heavy">سميك</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>نوع التشطيب</Label>
              <Select 
                value={formData.finish}
                onValueChange={(value) => setFormData(prev => ({ ...prev, finish: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع التشطيب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matte">مطفي</SelectItem>
                  <SelectItem value="glossy">لامع</SelectItem>
                  <SelectItem value="textured">محبب</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      
      case 'plastic':
        return (
          <div className="space-y-4">
            <div>
              <Label>نوع البلاستيك</Label>
              <Select 
                value={formData.plasticType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, plasticType: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع البلاستيك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pet">PET</SelectItem>
                  <SelectItem value="pp">PP</SelectItem>
                  <SelectItem value="pvc">PVC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>الشفافية</Label>
              <Select 
                value={formData.transparency}
                onValueChange={(value) => setFormData(prev => ({ ...prev, transparency: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر مستوى الشفافية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transparent">شفاف</SelectItem>
                  <SelectItem value="semitransparent">نصف شفاف</SelectItem>
                  <SelectItem value="opaque">معتم</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 'protective':
        return (
          <div className="space-y-4">
            <div>
              <Label>نوع الحماية المطلوبة</Label>
              <Select 
                value={formData.protectionType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, protectionType: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الحماية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shock">صدمات</SelectItem>
                  <SelectItem value="water">رطوبة</SelectItem>
                  <SelectItem value="heat">حرارة</SelectItem>
                  <SelectItem value="multiple">حماية متعددة</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>نوع المنتج المراد حمايته</Label>
              <Input 
                value={formData.productType}
                onChange={(e) => setFormData(prev => ({ ...prev, productType: e.target.value }))}
                placeholder="مثال: إلكترونيات، زجاج، إلخ"
              />
            </div>
          </div>
        );

      case 'food':
        return (
          <div className="space-y-4">
            <div>
              <Label>نوع الطعام</Label>
              <Select 
                value={formData.foodType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, foodType: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الطعام" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dry">جاف</SelectItem>
                  <SelectItem value="fresh">طازج</SelectItem>
                  <SelectItem value="liquid">سائل</SelectItem>
                  <SelectItem value="frozen">مجمد</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>شهادات الجودة المطلوبة</Label>
              <Select 
                value={formData.certifications}
                onValueChange={(value) => setFormData(prev => ({ ...prev, certifications: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="اختر شهادات الجودة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">لا يوجد</SelectItem>
                  <SelectItem value="iso">ISO</SelectItem>
                  <SelectItem value="haccp">HACCP</SelectItem>
                  <SelectItem value="halal">حلال</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-designo-blue-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-designo-blue-dark">تواصل معنا</h1>
            <p className="text-lg text-gray-700">
              نحن هنا للإجابة على استفساراتك ومساعدتك في اختيار أفضل حلول التغليف لمنتجاتك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-designo-brown-dark">معلومات الاتصال</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-designo-brown-light p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-designo-brown" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">العنوان</h3>
                      <p className="text-gray-600">الجزائر العاصمة، الجزائر</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-designo-green-light p-2 rounded-full">
                      <Phone className="h-6 w-6 text-designo-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">الهاتف</h3>
                      <p className="text-gray-600">+213 555 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-designo-blue-light p-2 rounded-full">
                      <Mail className="h-6 w-6 text-designo-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">البريد الإلكتروني</h3>
                      <p className="text-gray-600">contact@designo-dz.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">ساعات العمل</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً</p>
                    <p>الجمعة - السبت: مغلق</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">تابعنا</h3>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a href="#" className="bg-designo-brown p-2 rounded-full text-white hover:bg-designo-brown-dark transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-designo-blue p-2 rounded-full text-white hover:bg-designo-blue-dark transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-designo-green p-2 rounded-full text-white hover:bg-designo-green-dark transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold mb-4 text-designo-brown-dark">شكرًا لتواصلك معنا!</h2>
                  <p className="text-gray-600 mb-6">
                    تم استلام طلبك بنجاح وسيقوم أحد ممثلي خدمة العملاء بالتواصل معك قريبًا.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    className="bg-designo-brown hover:bg-designo-brown-dark text-white"
                  >
                    إرسال طلب آخر
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6 text-designo-brown-dark">طلب تصميم</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">البريد الإلكتروني *</Label>
                          <Input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">رقم الهاتف *</Label>
                          <Input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="companyName">اسم الشركة / المؤسسة</Label>
                        <Input 
                          type="text" 
                          id="companyName" 
                          name="companyName" 
                          value={formData.companyName}
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                    
                    {/* Package Information */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-designo-brown-dark">معلومات التغليف</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label>نوع التغليف المطلوب *</Label>
                          <Select 
                            value={formData.packageType}
                            onValueChange={(value) => setFormData(prev => ({ ...prev, packageType: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="اختر نوع التغليف" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardboard">علب كرتونية</SelectItem>
                              <SelectItem value="plastic">علب بلاستيكية وورقية</SelectItem>
                              <SelectItem value="protective">تغليف واقي</SelectItem>
                              <SelectItem value="food">تغليف منتجات غذائية</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        {/* Dynamic fields based on package type */}
                        {renderAdditionalFields()}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="quantity">الكمية المطلوبة</Label>
                            <Input 
                              type="text" 
                              id="quantity" 
                              name="quantity" 
                              placeholder="مثال: 1000 قطعة"
                              value={formData.quantity}
                              onChange={handleChange} 
                            />
                          </div>
                          <div>
                            <Label htmlFor="dimensions">الأبعاد (إن وجدت)</Label>
                            <Input 
                              type="text" 
                              id="dimensions" 
                              name="dimensions" 
                              placeholder="مثال: 10×20×5 سم"
                              value={formData.dimensions}
                              onChange={handleChange} 
                            />
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-6">
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <input 
                              type="checkbox" 
                              id="printing" 
                              name="printing" 
                              className="rounded border-gray-300 text-designo-brown focus:ring-designo-brown"
                              checked={formData.printing}
                              onChange={handleCheckboxChange} 
                            />
                            <Label htmlFor="printing">خدمة الطباعة</Label>
                          </div>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <input 
                              type="checkbox" 
                              id="design" 
                              name="design" 
                              className="rounded border-gray-300 text-designo-brown focus:ring-designo-brown"
                              checked={formData.design}
                              onChange={handleCheckboxChange} 
                            />
                            <Label htmlFor="design">خدمة التصميم</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <Label htmlFor="message">تفاصيل إضافية</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        placeholder="يرجى إضافة أي تفاصيل أو متطلبات خاصة لمساعدتنا في فهم احتياجاتك بشكل أفضل"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-designo-brown hover:bg-designo-brown-dark text-white w-full md:w-auto"
                    >
                      إرسال الطلب
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">سيتم إضافة خريطة تفاعلية لموقع الشركة</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
