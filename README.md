# 🛍️ Vue E-commerce Platform

A modern e-commerce platform built with Vue.js, Nuxt.js, and Supabase, offering real-time updates, secure authentication, and a responsive shopping experience.

## ⭐ Features

- **🔄 Real-time Updates**
  - Live inventory tracking
  - Instant price updates
  - Real-time cart synchronization
  - Live order status tracking (In progress)

- **🔐 Secure Authentication**
  - Email/password authentication
  - Social media login integration (In progress)
  - Role-based access control
  - Secure session management 

- **📱 Responsive Design**
  - Cross-browser compatibility
  - Optimized for all screen sizes
  - Touch-friendly interface

## 🛠️ Tech Stack

- **🎨 Frontend**
  - Vue.js 3
  - Nuxt.js 3
  - Tailwind CSS
  - Pinia (State Management)
  - Typescript

- **⚙️ Backend**
  - Supabase
  - PostgreSQL
  - Row Level Security
  - Real-time subscriptions

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm
- Supabase account
- Git

## 🚀 Getting Started

1. **📥 Clone the repository**
```bash
git clone https://github.com/haithanhphan1603/supabase-nuxt-ecommerce.git
cd supabase-nuxt-ecommerce
```

2. **⚙️ Install dependencies**
```bash
npm install
```

3. **🔑 Configure environment variables**
Fill in your Supabase credentials in the `.env` file:
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

4. **🏃‍♂️ Run development server**
```bash
npm run dev
```

## 📁 Project Structure
```
├── 📂 .nuxt/                  # Build directory
├── 📂 assets/                 # Uncompiled assets (images, styles, etc.)
├── 📂 components/             # Vue components
│   ├── cart/              # Shopping cart components
│   ├── category/          # Category navigation and listing
│   ├── common/            # Shared/reusable components
│   ├── dialog/            # Modal and dialog components
│   ├── product/           # Product-related components
│   ├── section/           # Page section components
│   ├── ui/                # Base UI components
│   └── wishlist/          # Wishlist feature components
├── 🎣 composables/           # Vue composables (hooks)
├── 📐 layouts/               # Page layouts
├── 📚 lib/                   # Utility functions and core logic
├── 🔒 middleware/            # Route middleware
├── 📄 pages/                 # Application pages/routes
├── 🌐 public/                # Static files
├── ⚙️ server/                # Server-side logic and API routes
├── 🗄️ store/                 # Pinia stores
├── 📝 types/                 # TypeScript type definitions
├── 🔑 .env                   # Environment variables
├── 📋 .eslintrc.json        # ESLint configuration
├── 🚫 .gitignore            # Git ignore patterns
├── 🎨 .prettierrc           # Prettier configuration
├── ⚙️ app.config.ts         # App configuration
├── 📱 app.vue               # Root Vue component
└── 🔧 components.json       # Components configuration
```

## 💻 Development

### 🗄️ Database Setup

1. Run the sql dump file

2. 🔒 Enable Row Level Security (RLS) policies

### 🔐 Authentication Setup

1. ⚙️ Configure authentication providers in Supabase dashboard
2. 🌐 Configure OAuth providers (if using social login)

## 🚀 Deployment

1. **📦 Build the application**
```bash
npm run build
```

2. **🌐 Deploy to your hosting platform**
```bash
npm run deploy
```

## 🧪 Testing (to be implemented)

```bash
# 🎯 Run unit tests
npm run test:unit

# 🔄 Run e2e tests
npm run test:e2e

# ✅ Run all tests
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vue.js team
- Nuxt.js team
- Supabase team
- All contributors

---
Made with ❤️ by Phan Hai
