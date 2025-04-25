
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
    
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        packageType: formData.packageType,
        quantity: formData.quantity,
        dimensions: formData.dimensions,
        message: formData.message,
        // Add any additional fields you want to send
      }
    );
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
