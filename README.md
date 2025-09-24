# JP FitZone

[JP FitZone](https://github.com/your-username/jp-fitzone) is a full-stack fitness application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It allows users to browse fitness plans, view trainers, manage orders, and handle authentication seamlessly.

---

## Features

* **User Authentication**: Secure login and registration with JWT tokens.
* **Fitness Plans**: Browse and select various fitness plans.
* **Trainers**: View available trainers and their profiles.
* **Shopping Cart**: Add plans to cart and proceed to checkout.
* **Order Management**: Track and manage orders.
* **Dark Mode**: Toggle between light and dark themes.
* **Responsive Design**: Optimized for mobile and desktop using Tailwind CSS.

---

## Tech Stack

* **Frontend**: React, React Router, Tailwind CSS, Vite
* **Backend**: Node.js, Express.js, MongoDB, Mongoose
* **Authentication**: JWT, bcryptjs
* **Other Tools**: CORS, dotenv

---

## Installation

### Prerequisites

* Node.js v14+
* MongoDB (local or MongoDB Atlas)
* npm or yarn

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```env
PORT=5001
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the backend server:

```bash
npm run dev
```

The server runs on: `http://localhost:5001`.

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm run dev
```

The frontend runs on: `http://localhost:5173`.

---

## Usage

1. Open `http://localhost:5173` in your browser.
2. Register or log in to access the app.
3. Browse fitness plans, add them to the cart, and checkout.
4. Toggle between dark/light modes.

---

## API Endpoints

* `POST /api/auth/login` — User login
* `POST /api/auth/register` — User registration
* `GET /api/plans` — Fetch fitness plans
* `POST /api/checkout` — Process checkout
* `GET /api/orders` — Fetch user orders
* `POST /api/orders` — Create order

> Refer to `backend/routes/` for detailed API documentation.

---

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the branch:

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

---

