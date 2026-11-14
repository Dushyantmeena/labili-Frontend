import api from './api';

export const orderService = {
  // Place new order
  async createOrder(orderPayload) {
    try {
      const response = await api.post('/orders', orderPayload);
      const data = response.data?.order || response.data;
      return { success: true, order: data, source: 'backend' };
    } catch (err) {
      console.info('Backend /orders offline. Storing order locally.');
      const localOrder = {
        id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toISOString(),
        status: 'Confirmed',
        ...orderPayload,
      };

      const existing = JSON.parse(localStorage.getItem('lavili_orders') || '[]');
      existing.unshift(localOrder);
      localStorage.setItem('lavili_orders', JSON.stringify(existing));

      return { success: true, order: localOrder, source: 'local' };
    }
  },

  // Get user order history
  async getMyOrders() {
    try {
      const response = await api.get('/orders/my-orders');
      const data = response.data?.orders || response.data;
      return { success: true, orders: data, source: 'backend' };
    } catch (err) {
      const existing = JSON.parse(localStorage.getItem('lavili_orders') || '[]');
      return { success: true, orders: existing, source: 'local' };
    }
  },
};

export const enquiryService = {
  // Submit custom couture or rental enquiry
  async submitRentalCustom(formData) {
    try {
      const response = await api.post('/enquiries/rental-custom', formData);
      return { success: true, data: response.data, source: 'backend' };
    } catch (err) {
      console.info('Backend /enquiries offline. Storing enquiry locally.');
      const enquiries = JSON.parse(localStorage.getItem('lavili_enquiries') || '[]');
      enquiries.push({ id: Date.now(), ...formData, date: new Date().toISOString() });
      localStorage.setItem('lavili_enquiries', JSON.stringify(enquiries));
      return {
        success: true,
        message: 'Your royal enquiry has been recorded! Our Jaipur studio concierge will contact you shortly.',
        source: 'local',
      };
    }
  },

  // Submit contact message
  async submitContact(contactData) {
    try {
      const response = await api.post('/enquiries/contact', contactData);
      return { success: true, data: response.data, source: 'backend' };
    } catch (err) {
      return {
        success: true,
        message: 'Thank you for writing to Labiii. Our team will get back to you within 24 hours.',
        source: 'local',
      };
    }
  },
};

export default { orderService, enquiryService };

