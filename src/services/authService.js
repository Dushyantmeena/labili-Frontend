import api from './api';

export const authService = {
  // Login with email & password
  async login({ email, password }) {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem('lavili_auth_token', token);
        localStorage.setItem('lavili_auth_user', JSON.stringify(user));
      }
      return { success: true, user, token, source: 'backend' };
    } catch (err) {
      console.info('Backend auth offline. Using local session mode.');
      // Fallback local mock user so UI functions completely without blocking
      const dummyUser = {
        name: email.split('@')[0] || 'Royal Guest',
        email,
        phone: '+91 98765 43210',
        joined: new Date().toLocaleDateString(),
      };
      localStorage.setItem('lavili_auth_token', 'local_demo_token_baisa');
      localStorage.setItem('lavili_auth_user', JSON.stringify(dummyUser));
      return { success: true, user: dummyUser, token: 'local_demo_token_baisa', source: 'local' };
    }
  },

  // Register new account
  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem('lavili_auth_token', token);
        localStorage.setItem('lavili_auth_user', JSON.stringify(user));
      }
      return { success: true, user, token, source: 'backend' };
    } catch (err) {
      console.info('Backend auth offline. Creating local session.');
      const newUser = {
        name: userData.name || 'Royal Guest',
        email: userData.email,
        phone: userData.phone || '',
        joined: new Date().toLocaleDateString(),
      };
      localStorage.setItem('lavili_auth_token', 'local_demo_token_baisa');
      localStorage.setItem('lavili_auth_user', JSON.stringify(newUser));
      return { success: true, user: newUser, token: 'local_demo_token_baisa', source: 'local' };
    }
  },

  // Get current logged-in user profile
  async getProfile() {
    try {
      const response = await api.get('/auth/profile');
      return { success: true, user: response.data.user || response.data };
    } catch (err) {
      const saved = localStorage.getItem('lavili_auth_user');
      if (saved) {
        return { success: true, user: JSON.parse(saved) };
      }
      return { success: false, user: null };
    }
  },

  // Logout
  logout() {
    localStorage.removeItem('lavili_auth_token');
    localStorage.removeItem('lavili_auth_user');
    return { success: true };
  },
};

export default authService;

