
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID

export const sendEmail = async (formData: any) => {
  try {
    const response = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
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
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
