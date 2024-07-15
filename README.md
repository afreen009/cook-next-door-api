# Cook Next Door

Cook Next Door is a platform that connects users with neighboring cooks. Users can explore various homemade dishes available in their vicinity, place orders, and enjoy home-cooked meals. The app features filters to search by different categories such as veg, non-veg, and halal.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Database Migration and Seeding](#database-migration-and-seeding)
- [Contributing](#contributing)
- [License](#license)

## Features
- User authentication with JWT
- Secure password hashing with bcryptjs
- Search and filter cooks by categories
- View cook profiles with delivery options and location
- Order tracking and history

## Installation

### Prerequisites
- Node.js
- npm or yarn
- MySQL

### Steps
1. Clone the repository
    ```sh
    git clone https://github.com/your-username/cook-next-door.git
    cd cook-next-door
    ```

2. Install dependencies
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

3. Create a `.env` file in the root directory and add your environment variables
    ```env
    PORT=8080
    DB_HOST=127.0.0.1
    DB_NAME=cook_next_door
    DB_USER=root
    DB_PASSWORD=rootroot
    JWT_KEY=mysecretkey
    ```

4. Set up the database
    ```sh
    npx knex migrate:latest
    npx knex seed:run
    ```

5. Start the development server
    ```sh
    node index.js
    ```

## Usage
- Open your browser and navigate to `http://localhost:8080`.
- Sign up or log in.
- Browse and filter through available cooks in your area.
- Place an order and enjoy your home-cooked meal.

## Environment Variables
The following environment variables are required to run the project:
- `PORT`: The server port, e.g., `8080`
- `DB_HOST`: The database host, e.g., `127.0.0.1`
- `DB_NAME`: The database name, e.g., `cook_next_door`
- `DB_USER`: The database user, e.g., `root`
- `DB_PASSWORD`: The database password, e.g., `rootroot`
- `JWT_KEY`: The secret key for JWT, e.g., `mysecretkey`

## Database Migration and Seeding
To set up the database, run the following commands:
- Migrate the database schema:
    ```sh
    npx knex migrate:latest
    ```
- Seed the database with initial data:
    ```sh
    npx knex seed:run
    ```

## Contributing
Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
