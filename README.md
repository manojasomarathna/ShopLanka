# ShopLanka
Complete E-Commerce Platform
    🎯 Project Overview: ShopLanka - Complete E-Commerce Platform
Features:
User Side:
✓ User Registration & Login (JWT Authentication)
✓ Browse Products (Categories, Search, Filter)
✓ Product Details Page
✓ Shopping Cart Management
✓ Checkout Process
✓ Order History
✓ User Profile Management

Admin Side:
✓ Admin Dashboard
✓ Product Management (CRUD)
✓ Order Management
✓ User Management
✓ Sales Analytics

Advanced Features:
✓ Image Upload (Cloudinary)
✓ Payment Integration (Stripe/PayPal simulation)
✓ Email Notifications
✓ Responsive Design
✓ Loading States & Error Handling

📂 Complete Project Structure
ShopLanka/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── cloudinary.ts
│   │   │   └── email.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Product.ts
│   │   │   ├── Order.ts
│   │   │   └── Category.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── productController.ts
│   │   │   ├── orderController.ts
│   │   │   └── userController.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   ├── productRoutes.ts
│   │   │   ├── orderRoutes.ts
│   │   │   └── userRoutes.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── admin.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── upload.ts
│   │   ├── utils/
│   │   │   ├── generateToken.ts
│   │   │   ├── sendEmail.ts
│   │   │   └── validators.ts
│   │   └── server.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   ├── ProductCard.tsx
    │   │   ├── CartItem.tsx
    │   │   ├── SearchBar.tsx
    │   │   └── Loading.tsx
    │   ├── pages/
    │   │   ├── Home.tsx
    │   │   ├── Login.tsx
    │   │   ├── Register.tsx
    │   │   ├── ProductDetails.tsx
    │   │   ├── Cart.tsx
    │   │   ├── Checkout.tsx
    │   │   ├── OrderHistory.tsx
    │   │   ├── Profile.tsx
    │   │   └── admin/
    │   │       ├── Dashboard.tsx
    │   │       ├── ProductList.tsx
    │   │       ├── AddProduct.tsx
    │   │       └── OrderList.tsx
    │   ├── store/
    │   │   ├── slices/
    │   │   │   ├── authSlice.ts
    │   │   │   ├── productSlice.ts
    │   │   │   ├── cartSlice.ts
    │   │   │   └── orderSlice.ts
    │   │   └── store.ts
    │   ├── services/
    │   │   └── api.ts
    │   ├── types/
    │   │   └── index.ts
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── tailwind.config.js
