import api from './api';
import { PRODUCTS, CATEGORIES } from '../data/initialProducts';

export const productService = {
  // Fetch all products with optional filtering/sorting
  async getProducts(params = {}) {
    try {
      const response = await api.get('/products', { params });
      // Support common backend response structures: array, { products: [...] }, { data: [...] }
      const data = response.data?.products || response.data?.data || response.data;
      if (Array.isArray(data) && data.length > 0) {
        return { success: true, data, source: 'backend' };
      }
    } catch (err) {
      console.info('Backend /products returned an error or is offline. Using local catalog.');
    }

    // Graceful fallback to initial Baisa Jaipur catalog
    let list = [...PRODUCTS];

    if (params.category && params.category !== 'all') {
      const aliasMap = {
        'farsi-salwar-suit': 'kurta-sets',
        'farsi-salwar-suits': 'kurta-sets',
        'pleated-suit-sets': 'kurta-sets',
        'a-line-suit-sets': 'kurta-sets',
        'straight-suit-sets': 'kurta-sets',
        'anarkali-suit-sets': 'kurta-sets',
        'sharara-suit-sets': 'gota-patti-lehenga',
      };
      const targetCat = aliasMap[params.category] || params.category;
      list = list.filter((p) => p.category === targetCat || p.category === params.category);
    }

    if (params.search) {
      const q = params.search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
      );
    }

    if (params.sort) {
      if (params.sort === 'price-low') list.sort((a, b) => a.price - b.price);
      if (params.sort === 'price-high') list.sort((a, b) => b.price - a.price);
      if (params.sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    }

    return { success: true, data: list, source: 'local' };
  },

  // Fetch single product by id or slug
  async getProductById(idOrSlug) {
    try {
      const response = await api.get(`/products/${idOrSlug}`);
      const data = response.data?.product || response.data?.data || response.data;
      if (data && (data.id || data._id)) {
        return { success: true, data, source: 'backend' };
      }
    } catch (err) {
      console.info(`Backend /products/${idOrSlug} offline. Using local catalog.`);
    }

    const found = PRODUCTS.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
    if (found) {
      return { success: true, data: found, source: 'local' };
    }
    return { success: false, error: 'Product not found', data: null };
  },

  // Fetch categories
  async getCategories() {
    try {
      const response = await api.get('/categories');
      const data = response.data?.categories || response.data?.data || response.data;
      if (Array.isArray(data) && data.length > 0) {
        return { success: true, data, source: 'backend' };
      }
    } catch (err) {
      console.info('Backend /categories offline. Using local categories.');
    }
    return { success: true, data: CATEGORIES, source: 'local' };
  },
};

export default productService;

