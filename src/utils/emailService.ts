
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID || "YOUR_USER_ID"); 

export const sendEmail = async (formData: any) => {
  try {
    // Log that we're attempting to send an email
    console.log("Attempting to send email with data:", formData);
    
    // Check if EmailJS is properly configured
    if (emailjs.init.toString().includes("YOUR_USER_ID")) {
      console.warn("EmailJS is not properly configured. Please replace YOUR_USER_ID in emailService.ts");
    }
    
    // Format additional fields based on package type
    let additionalFields = '';
    
    if (formData.packageType === 'cardboard') {
      additionalFields += `سماكة الكرتون: ${translateThickness(formData.thickness)}\n`;
      additionalFields += `نوع التشطيب: ${translateFinish(formData.finish)}\n`;
    } else if (formData.packageType === 'plastic') {
      additionalFields += `نوع البلاستيك: ${translatePlasticType(formData.plasticType)}\n`;
      additionalFields += `الشفافية: ${translateTransparency(formData.transparency)}\n`;
    } else if (formData.packageType === 'protective') {
      additionalFields += `نوع الحماية المطلوبة: ${translateProtection(formData.protectionType)}\n`;
      additionalFields += `نوع المنتج المراد حمايته: ${formData.productType || 'غير محدد'}\n`;
    } else if (formData.packageType === 'food') {
      additionalFields += `نوع الطعام: ${translateFoodType(formData.foodType)}\n`;
      additionalFields += `شهادات الجودة المطلوبة: ${translateCertifications(formData.certifications)}\n`;
    }
    
    // Format checkboxes
    const printingService = formData.printing ? 'مطلوب' : 'غير مطلوب';
    const designService = formData.design ? 'مطلوب' : 'غير مطلوب';
    
    // Create a formatted message for the email body
    const formattedMessage = `
🚀 طلب تصميم جديد

👤 الاسم الكامل: ${formData.name}
📧 البريد الإلكتروني: ${formData.email}
📱 رقم الهاتف: ${formData.phone}
🏢 اسم الشركة / المؤسسة: ${formData.companyName || 'غير محدد'}

📦 معلومات التغليف:
- نوع التغليف المطلوب: ${translatePackageType(formData.packageType)}
- الكمية: ${formData.quantity || 'غير محدد'}
- الأبعاد: ${formData.dimensions || 'غير محدد'}
- خدمة الطباعة: ${printingService}
- خدمة التصميم: ${designService}
${additionalFields}

📝 تفاصيل إضافية:
${formData.message || 'لا توجد تفاصيل إضافية'}
`;

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName || 'غير محدد',
        packageType: translatePackageType(formData.packageType),
        quantity: formData.quantity || 'غير محدد',
        dimensions: formData.dimensions || 'غير محدد',
        message: formattedMessage,
      }
    );
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Helper translation functions
function translatePackageType(type: string): string {
  switch(type) {
    case 'cardboard': return 'علب كرتونية';
    case 'plastic': return 'علب بلاستيكية وورقية';
    case 'protective': return 'تغليف واقي';
    case 'food': return 'تغليف منتجات غذائية';
    default: return type;
  }
}

function translateThickness(thickness: string): string {
  switch(thickness) {
    case 'standard': return 'عادي';
    case 'medium': return 'متوسط';
    case 'heavy': return 'سميك';
    default: return thickness;
  }
}

function translateFinish(finish: string): string {
  switch(finish) {
    case 'matte': return 'مطفي';
    case 'glossy': return 'لامع';
    case 'textured': return 'محبب';
    default: return finish;
  }
}

function translatePlasticType(type: string): string {
  switch(type) {
    case 'pet': return 'PET';
    case 'pp': return 'PP';
    case 'pvc': return 'PVC';
    default: return type;
  }
}

function translateTransparency(transparency: string): string {
  switch(transparency) {
    case 'transparent': return 'شفاف';
    case 'semitransparent': return 'نصف شفاف';
    case 'opaque': return 'معتم';
    default: return transparency;
  }
}

function translateProtection(type: string): string {
  switch(type) {
    case 'shock': return 'صدمات';
    case 'water': return 'رطوبة';
    case 'heat': return 'حرارة';
    case 'multiple': return 'حماية متعددة';
    default: return type;
  }
}

function translateFoodType(type: string): string {
  switch(type) {
    case 'dry': return 'جاف';
    case 'fresh': return 'طازج';
    case 'liquid': return 'سائل';
    case 'frozen': return 'مجمد';
    default: return type;
  }
}

function translateCertifications(cert: string): string {
  switch(cert) {
    case 'none': return 'لا يوجد';
    case 'iso': return 'ISO';
    case 'haccp': return 'HACCP';
    case 'halal': return 'حلال';
    default: return cert;
  }
}
