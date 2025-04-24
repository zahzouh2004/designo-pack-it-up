
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "علب منتجات تجميل",
      description: "تصميم علب تغليف لماركة منتجات تجميل فاخرة",
      category: "علب كرتونية",
      image: "https://images.unsplash.com/photo-1596428916643-4dbaf4b8b479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "تغليف مطعم حديث",
      description: "تصميم علب طعام للوجبات السريعة لمطعم عصري",
      category: "تغليف غذائي",
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "علب إلكترونيات واقية",
      description: "تصميم تغليف واقي لشركة إلكترونيات رائدة",
      category: "تغليف واقي",
      image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "علب هدايا فاخرة",
      description: "مجموعة من علب الهدايا الفاخرة لمتجر مجوهرات",
      category: "علب هدايا",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "علب شوكولاتة مميزة",
      description: "تصميم علب شوكولاتة فريدة لمناسبات خاصة",
      category: "تغليف غذائي",
      image: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "تغليف منتجات عضوية",
      description: "تغليف صديق للبيئة لشركة منتجات عضوية",
      category: "تغليف بيئي",
      image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "تعاملنا مع ديزاينو كان تجربة رائعة. قدموا لنا تصاميم مبتكرة لعلب منتجاتنا ساهمت في زيادة مبيعاتنا بشكل ملحوظ.",
      name: "محمد الأحمد",
      company: "شركة الفا للإلكترونيات",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      text: "ديزاينو هم شريك موثوق في مجال التغليف. قدموا لنا حلول تغليف مخصصة تناسب احتياجاتنا وتتماشى مع هويتنا التجارية.",
      name: "سارة العمري",
      company: "مطاعم الذواقة",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      text: "أنصح بشدة بالتعامل مع ديزاينو لتصميم علب التغليف. فريق عمل محترف والنتائج كانت أكثر من رائعة.",
      name: "فهد السالم",
      company: "متاجر الهدايا الفاخرة",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-designo-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">معرض أعمالنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            اكتشف مجموعة من مشاريعنا السابقة ونماذج من تصميمات التغليف التي قمنا بتنفيذها لعملائنا
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-designo-blue-light text-designo-blue-dark rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-designo-brown-dark">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" className="border-designo-blue text-designo-blue hover:bg-designo-blue-light">
                    عرض التفاصيل
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-designo-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-designo-brown-dark mb-4">آراء العملاء</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اقرأ ما يقوله عملاؤنا عن تجاربهم معنا وعن جودة منتجاتنا وخدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="text-designo-brown-dark text-6xl font-serif absolute top-4 right-4 opacity-10">
                  "
                </div>
                <p className="text-gray-600 mb-6 relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-designo-brown-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-designo-brown mb-2">500+</div>
              <p className="text-gray-600">مشاريع منجزة</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-designo-green mb-2">300+</div>
              <p className="text-gray-600">عميل سعيد</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-designo-blue mb-2">50+</div>
              <p className="text-gray-600">جائزة تصميم</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-designo-brown-dark mb-2">10+</div>
              <p className="text-gray-600">سنوات خبرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-designo-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أعجبتك أعمالنا؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            نحن مستعدون لتصميم حلول تغليف مخصصة لمنتجاتك. تواصل معنا اليوم لبدء مشروعك
          </p>
          <Button asChild className="bg-white text-designo-blue-dark hover:bg-designo-gray-light">
            <Link to="/contact">طلب تصميم الآن</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
