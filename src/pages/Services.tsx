import React from 'react';
import Layout from '@/components/layout/Layout';
import { Package, Box, ShoppingBag, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Image failed to load");
    e.currentTarget.src = "https://via.placeholder.com/800x600?text=صورة+الخدمة";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-designo-brown text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نقدم مجموعة شاملة من حلول التغليف المخصصة لتلبية احتياجات مختلف القطاعات والمؤسسات
          </p>
        </div>
      </section>

      {/* Cardboard Boxes Section */}
      <section id="cardboard" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/e049ae9d-96d8-4df9-9d69-6db71121797a.png" 
                alt="علب كرتونية" 
                className="rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Package className="h-8 w-8 text-designo-brown mr-3" />
                <h2 className="text-3xl font-bold text-designo-brown-dark">علب كرتونية</h2>
              </div>
              <p className="text-gray-600 mb-6">
                نقدم مجموعة متنوعة من العلب الكرتونية المخصصة لتلبية احتياجات التغليف والشحن والعرض لمختلف المنتجات. تتميز علبنا الكرتونية بالمتانة والجودة العالية، ويمكن تخصيصها بأحجام وألوان وتصاميم مختلفة حسب متطلبات العملاء.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  علب شحن بمقاسات مختلفة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  علب عرض للمنتجات
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  علب هدايا فاخرة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  علب تخزين متينة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  طباعة شعارات وتصاميم مخصصة
                </li>
              </ul>
              <Button asChild className="bg-designo-brown hover:bg-designo-brown-dark text-white">
                <Link to="/contact">طلب هذه الخدمة</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plastic & Paper Boxes Section */}
      <section id="plastic" className="py-16 bg-designo-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/ffe419ab-7b64-444e-a1a2-81b3b042b4a3.png" 
                alt="علب بلاستيكية وورقية" 
                className="rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Box className="h-8 w-8 text-designo-green mr-3" />
                <h2 className="text-3xl font-bold text-designo-brown-dark">علب بلاستيكية وورقية</h2>
              </div>
              <p className="text-gray-600 mb-6">
                نصمم ونصنع علب بلاستيكية وورقية عالية الجودة لمجموعة متنوعة من الاستخدامات. سواء كنت بحاجة إلى تغليف لمنتجات التجميل، الإلكترونيات، أو المنتجات الاستهلاكية، لدينا الحل المناسب لك.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-green inline-block mr-2"></span>
                  علب بلاستيكية شفافة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-green inline-block mr-2"></span>
                  حاويات بلاستيكية قابلة للإغلاق
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-green inline-block mr-2"></span>
                  علب ورقية صديقة للبيئة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-green inline-block mr-2"></span>
                  علب هدايا أنيقة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-green inline-block mr-2"></span>
                  تصميمات مخصصة وملونة
                </li>
              </ul>
              <Button asChild className="bg-designo-green hover:bg-designo-green-dark text-white">
                <Link to="/contact">طلب هذه الخدمة</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protective Packaging Section */}
      <section id="protective" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/910a184c-04a5-4b05-80a3-324c8594956b.png" 
                alt="تغليف واقي" 
                className="rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-designo-blue mr-3" />
                <h2 className="text-3xl font-bold text-designo-brown-dark">تغليف واقي</h2>
              </div>
              <p className="text-gray-600 mb-6">
                نحن متخصصون في توفير حلول تغليف واقية تحمي منتجاتك من الرطوبة والحرارة والصدمات خلال النقل والتخزين. نستخدم أحدث التقنيات والمواد لضمان وصول منتجاتك بحالة ممتازة إلى وجهتها النهائية.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-blue inline-block mr-2"></span>
                  تغليف مضاد للصدمات
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-blue inline-block mr-2"></span>
                  تغليف مقاوم للرطوبة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-blue inline-block mr-2"></span>
                  تغليف عازل للحرارة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-blue inline-block mr-2"></span>
                  فقاعات هوائية وإسفنج واقي
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-blue inline-block mr-2"></span>
                  تغليف للشحن الدولي
                </li>
              </ul>
              <Button asChild className="bg-designo-blue hover:bg-designo-blue-dark text-white">
                <Link to="/contact">طلب هذه الخدمة</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Packaging Section */}
      <section id="food" className="py-16 bg-designo-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/206c1188-cc2e-4722-83db-cf9beec42343.png" 
                alt="تغليف المنتجات الغذائية" 
                className="rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-designo-brown mr-3" />
                <h2 className="text-3xl font-bold text-designo-brown-dark">تغليف المنتجات الغذائية</h2>
              </div>
              <p className="text-gray-600 mb-6">
                نقدم حلول تغليف آمنة وصحية للمنتجات الغذائية تحافظ على طازجة الطعام وتطيل من فترة صلاحيته. جميع منتجاتنا تتوافق مع المعايير الصحية العالمية وتناسب مختلف أنواع الأطعمة والمشروبات.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  علب للوجبات الجاهزة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  أكياس للمخبوزات
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  عبوات للمشروبات
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  تغليف للحلويات والشوكولاتة
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-designo-brown inline-block mr-2"></span>
                  حاويات آمنة للاستخدام في الميكروويف
                </li>
              </ul>
              <Button asChild className="bg-designo-brown hover:bg-designo-brown-dark text-white">
                <Link to="/contact">طلب هذه الخدمة</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-designo-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لمناقشة مشروعك؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            سواء كنت تعرف بالضبط ما تحتاجه أو تبحث عن المشورة، فريقنا مستعد لمساعدتك في اختيار أفضل حلول التغليف لمنتجاتك
          </p>
          <Button asChild className="bg-white text-designo-blue-dark hover:bg-designo-gray-light">
            <Link to="/contact">تواصل معنا الآن</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
