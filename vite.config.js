import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        inventory: 'inventory.html',
        services: 'services.html',
        vehicleSourcing: 'vehicle-sourcing.html',
        tradeIn: 'trade-in.html',
        financing: 'financing.html',
        about: 'about.html',
        whyJeff: 'why-jeff.html',
        showroom: 'showroom.html',
        compare: 'compare.html',
        wishlist: 'wishlist.html',
        bookViewing: 'book-viewing.html',
        contact: 'contact.html',
        faq: 'faq.html',
        blog: 'blog.html',
        login: 'login.html',
        register: 'register.html',
        account: 'account.html',
        mercedesG63: 'inventory/mercedes-g63-amg-2025.html',
        porsche911: 'inventory/porsche-911-carrera-gts-2025.html',
        rangeRover: 'inventory/range-rover-autobiography-2024.html',
        bmwXm: 'inventory/bmw-xm-label-2024.html',
        lamborghiniUrus: 'inventory/lamborghini-urus-2024.html',
        rollsRoyce: 'inventory/rolls-royce-cullinan-2023.html',
        luxurySuvArticle: 'blog/how-to-choose-your-next-luxury-suv.html'
      }
    }
  }
});
