import React from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  // Team data
  const teamMembers = [
    {
      name: "شتيوي يونس",
      role: "المدير التنفيذي",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "حلاوة الاء",
      role: "مديرة التصميم",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "حمان عيدة",
      role: "مديرة المشاريع",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "بوناصر لينة",
      role: "مديرة خدمة العملاء",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "رمضان بشرى",
      role: "مديرة التسويق",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-designo-brown-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
              <p className="text-lg mb-6">
                نحن شركة جزائرية رائدة متخصصة في تصميم وإنتاج حلول التغليف المبتكرة والمخصصة لمختلف القطاعات والصناعات. نفخر بتقديم منتجات عالية الجودة تلبي احتياجات عملائنا في السوق الجزائري.
              </p>
              <p className="text-lg">
                في ديزاينو، نؤمن بأن التغليف ليس مجرد وسيلة لحماية المنتج، بل هو جزء أساسي من تجربة العملاء وهوية العلامة التجارية.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="فريق ديزاينو" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-designo-brown-dark mb-4">قيمنا</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نحن ملتزمون بمجموعة من القيم الأساسية التي توجه كل ما نقوم به، من تصميم المنتجات إلى خدمة العملاء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-designo-brown-light rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-designo-brown-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">الجودة</h3>
              <p className="text-gray-600">
                نلتزم بتقديم منتجات عالية الجودة باستخدام أفضل المواد والتقنيات لضمان رضا عملائنا
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-designo-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-designo-green-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">الابتكار</h3>
              <p className="text-gray-600">
                نسعى دائمًا للابتكار وتطوير حلول تغليف جديدة تلبي الاحتياجات المتغيرة لعملائنا والسوق
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-designo-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-designo-blue-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">الاستدامة</h3>
              <p className="text-gray-600">
                نؤمن بأهمية الحفاظ على البيئة ونعمل على تطوير منتجات صديقة للبيئة وقابلة للتدوير
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-designo-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-designo-brown-dark mb-4">عملية العمل</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نتبع عملية منظمة ومدروسة لضمان تقديم أفضل النتائج لعملائنا، بدءًا من الفكرة الأولية وصولاً إلى المنتج النهائي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
            <div className="relative text-center p-6">
              <div className="w-12 h-12 bg-designo-brown text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">استشارة وتحليل</h3>
              <p className="text-gray-600">نستمع لاحتياجاتك ونحلل متطلبات مشروعك</p>
              {/* Connector */}
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-designo-brown-light -z-10 transform -translate-y-1/2"></div>
            </div>
            <div className="relative text-center p-6">
              <div className="w-12 h-12 bg-designo-brown text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">التصميم</h3>
              <p className="text-gray-600">نصمم حلول تغليف مخصصة تناسب احتياجاتك</p>
              {/* Connector */}
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-designo-brown-light -z-10 transform -translate-y-1/2"></div>
            </div>
            <div className="relative text-center p-6">
              <div className="w-12 h-12 bg-designo-brown text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">الإنتاج</h3>
              <p className="text-gray-600">ننتج التغليف باستخدام أفضل المواد والتقنيات</p>
              {/* Connector */}
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-designo-brown-light -z-10 transform -translate-y-1/2"></div>
            </div>
            <div className="relative text-center p-6">
              <div className="w-12 h-12 bg-designo-brown text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">التسليم</h3>
              <p className="text-gray-600">نسلم المنتج النهائي في الوقت المحدد وبالجودة المطلوبة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-designo-brown-dark mb-4">فريقنا</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              يضم فريقنا نخبة من المتخصصين والمصممين المبدعين في مجال تصميم وإنتاج التغليف في الجزائر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-designo-brown-dark">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-designo-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">لنعمل معًا</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            نحن متحمسون للعمل معك على مشروعك القادم. تواصل معنا اليوم لمناقشة احتياجاتك من التغليف
          </p>
          <Button asChild className="bg-white text-designo-green-dark hover:bg-designo-gray-light">
            <Link to="/contact">تواصل معنا</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
