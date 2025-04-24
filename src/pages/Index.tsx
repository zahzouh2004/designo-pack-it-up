
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/services/ServiceCard';
import Layout from '@/components/layout/Layout';
import { Package, Box, Image, Settings } from 'lucide-react';

const Index = () => {
  // Sample services data
  const services = [
    {
      id: 1,
      title: 'علب كرتونية',
      description: 'تصميم وإنتاج علب كرتونية مخصصة للشحن والتخزين والعرض بمختلف الأحجام والمقاسات',
      imageSrc: 'https://images.unsplash.com/photo-1607435384312-85c7dacc8b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/services#cardboard'
    },
    {
      id: 2,
      title: 'علب بلاستيكية وورقية',
      description: 'علب بلاستيكية وورقية مبتكرة تلبي احتياجات التغليف للمنتجات المختلفة',
      imageSrc: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/services#plastic'
    },
    {
      id: 3,
      title: 'تغليف واقي',
      description: 'حلول تغليف متخصصة تحمي المنتجات من الرطوبة والحرارة والصدمات',
      imageSrc: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/services#protective'
    },
    {
      id: 4,
      title: 'تغليف المنتجات الغذائية',
      description: 'حلول تغليف آمنة وصحية مناسبة للأطعمة والمشروبات بمختلف أنواعها',
      imageSrc: 'https://images.unsplash.com/photo-1622667052565-c8fafd33ecf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/services#food'
    }
  ];

  // Features data
  const features = [
    {
      icon: <Package className="h-12 w-12 text-designo-blue" />,
      title: 'تصميم مخصص',
      description: 'نصمم علب التغليف وفقًا لمتطلباتك الخاصة بما يتناسب مع هوية علامتك التجارية'
    },
    {
      icon: <Box className="h-12 w-12 text-designo-green" />,
      title: 'جودة عالية',
      description: 'نستخدم أفضل المواد والتقنيات لضمان جودة ومتانة منتجات التغليف'
    },
    {
      icon: <Image className="h-12 w-12 text-designo-brown" />,
      title: 'طباعة احترافية',
      description: 'خدمات طباعة متميزة للشعارات والمعلومات على التغليف بدقة عالية'
    },
    {
      icon: <Settings className="h-12 w-12 text-designo-blue-dark" />,
      title: 'استشارات متخصصة',
      description: 'خبراؤنا جاهزون لمساعدتك في اختيار أنسب حلول التغليف لمنتجاتك'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-designo-brown-light to-designo-gray-light text-designo-brown-dark">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                حلول تغليف مبتكرة لمنتجاتك
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                جزائريون متخصصون في تصميم وتصنيع التغليف المخصص الذي يحمي منتجاتك ويعزز هويتك التجارية
              </p>
              <div className="flex flex-wrap gap-4 justify-end">
                <Button asChild className="bg-designo-brown hover:bg-designo-brown-dark text-white">
                  <Link to="/contact">طلب تصميم الآن</Link>
                </Button>
                <Button asChild variant="outline" className="border-designo-brown text-designo-brown-dark hover:bg-designo-brown-light/20">
                  <Link to="/services">استكشف خدماتنا</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="فريق ديزاينو في العمل" 
                className="rounded-lg shadow-xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-designo-brown-dark mb-4">خدماتنا</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من حلول التغليف المخصصة لتلبية احتياجات مختلف القطاعات والمؤسسات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                link={service.link}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-designo-brown hover:bg-designo-brown-dark text-white">
              <Link to="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-designo-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-designo-brown-dark mb-4">لماذا تختارنا؟</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نتميز بخبرة طويلة في مجال تصميم وإنتاج حلول التغليف المبتكرة التي تلبي احتياجات عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-designo-brown-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-designo-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات التغليف الخاصة بك
          </p>
          <Button asChild className="bg-white text-designo-brown hover:bg-designo-gray-light">
            <Link to="/contact">احصل على عرض سعر</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
