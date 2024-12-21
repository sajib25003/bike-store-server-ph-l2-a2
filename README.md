# Bike Store Server

This repository contains the backend server for the Bike Store application. It is built using Node.js, TypeScript, and Express.js. The server provides APIs for managing users, products, and orders in a bike store.

## Features

- User management: Create, read, update, and delete users.
- Product management: Manage bike inventory with stock checks.
- Order management: Create and manage customer orders.
- Error handling and validation.
- Built using TypeScript for type safety.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A database (e.g., MongoDB)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sajib25003/bike-store-server-ph-l2-a2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and set the following environment variables:

```env
PORT=4000
DATABASE_URL=your_database_url_here
```

### 4. Build the project

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

### 5. Run the server

Start the server:

```bash
npm run start:dev
```

The server will start on the port specified in the `.env` file (default: 4000).

## API Endpoints

### Users

- **POST** `/api/users`: Create a new user.
- **GET** `/api/users`: Get a list of all users.
- **GET** `/api/users/:id`: Get a specific user by ID.
- **PUT** `/api/users/:id`: Update a user by ID.
- **DELETE** `/api/users/:id`: Delete a user by ID.

### Products

- **POST** `/api/products`: Add a new product.
- **GET** `/api/products`: Get a list of all products.
- **GET** `/api/products/:id`: Get a specific product by ID.
- **PUT** `/api/products/:id`: Update product details by ID.
- **DELETE** `/api/products/:id`: Delete a product by ID.

### Orders

- **POST** `/api/orders`: Create a new order.
- **GET** `/api/orders`: Get a list of all orders.
- **GET** `/api/orders/:id`: Get a specific order by ID.

## Development

### Watch mode

During development, you can run the project in watch mode to automatically recompile TypeScript on changes:

```bash
npm run start:dev
```

### Linting

To lint the project:

```bash
npm run lint
```



## Deployment

### Build for production

```bash
npm run build
```

### Start the server in production

```bash
npm run start:prod
```

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework.
- **TypeScript**: Type-safe JavaScript.
- **MongoDB**: Database.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, please contact:

- Email: [sjb.25003@gmail.com](mailto\:sjb.25003@gmail.com)
- GitHub: sajib25003

