🛍️ NXT Trendz – E-Commerce Web Application
NXT Trendz is a modern E-Commerce web app built with React. It provides essential shopping features like authentication, product listing, cart management, and order summary — mimicking real-world e-commerce platforms.
🔗 Live Demo: https://nxttrendzbyesc.ccbp.tech/login
✨ Features
🔐 Authentication – Login system with Prime and Non-Prime user access.
🛒 Cart Management – Add, remove, and update product quantities.
📊 Cart Summary – View total items and overall price dynamically.
➕ Increment/Decrement Products – Adjust quantities directly in the cart.
❌ Remove Products – Delete single or all items with one click.
📱 Responsive Design – Works across desktop, tablet, and mobile.
🧑‍💻 User Credentials
Prime User: username: rahul password: rahul@2021
Non-Prime User: username: raja password: raja@2021
🛠️ Tech Stack
Frontend: React.js, React Router
State Management: React Context API
Styling: CSS3, Flexbox, Responsive Design
Icons: React Icons (BsPlusSquare, BsDashSquare, AiFillCloseCircle)
⚙️ Installation & Setup
Follow these steps to run the project locally:
# 1. Clone the repository git clone https://github.com/saicharanega/NXTTRENDZ.git  # 2. Navigate into the project folder cd NXTTRENDZ  # 3. Install dependencies npm install  # 4. Start the development server npm start  Once the server is running, open 👉 http://localhost:3000 in your browser.
📂 Project Structure
NXTTRENDZ/ │── src/ │   ├── App.js │   ├── components/ │   │   ├── Cart/ │   │   ├── CartItem/ │   │   ├── CartSummary/ │   │   ├── Header/ │   │   ├── Login/ │   │   └── Products/ │   └── context/CartContext.js │ ├── public/ ├── package.json └── README.md
🚀 Key Functionalities
Authentication Guard – Redirects unauthenticated users to Login page.
Cart State Persistence – Uses Context API to manage cart items globally.
Dynamic Updates – Cart totals & product prices update instantly.
Empty Cart Handling – Shows “Empty Cart View” when no items exist.
🎨 UI/UX Highlights
Clean and responsive design
Smooth navigation using React Router
User-friendly cart interactions with icons
Mobile-first layouts
📌 Future Enhancements
✅ Wishlist & Favorites
✅ Order History Tracking
✅ Payment Gateway Integration
✅ Backend API with Node.js/Express
