 Features of Bike-store: 
 --> This back-end project serves functionality with post, update and delete bike and order data. 
 --> It also count total revenue from orders.
 --> Technology uses in this project are typescript, node.js, express.js, mongodb and mongoss. 

Setup steps:
 The steps are to set the project locally: 
1. Prerequisites
Ensure the following are installed on your system:

1.Node.js (v16 or later recommended)
2.npm or yarn
3.MongoDB (local instance or a remote cluster)

2. Clone the Repository from github
git clone https://github.com/Athiqur01/bike-store.git
cd bike-store

3. Install Dependencies
Run the following command to install all project dependencies listed in package.json:

npm install

4. Set Up Environment Variables
Create a .env file in the project root directory and configure the following variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/bike-store
NODE_ENV=development

5. Build the Project
Since this is a TypeScript project, ensure the code is transpiled to JavaScript before running it. Add a tsconfig.json file in the root directory :

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
Compile the TypeScript code:
npx tsc
This will generate the dist directory containing the JavaScript output.

6. Run the Project
Start the server in development mode:
npm run start:dev
This will use nodemon to monitor file changes and restart the server automatically.
The server should now be running on http://localhost:5000 (or the port you specified in .env).

7. Test the APIs
Use a tool like Postman, cURL, or Thunder Client to test the endpoints.

Example:
Test MongoDB Connection: Check if the database is properly connected by attempting a simple query, such as fetching bikes from your database.

Place an Order: Test the POST /api/orders endpoint with a request body:

json
Copy code
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
8. Lint and Format Code
Run ESLint to check for linting issues:
npm run lint
Automatically fix linting issues:

npm run lint:fix
Format code using Prettier:
npm run format
9. Common Issues and Fixes
MongoDB Connection Errors:

Ensure MongoDB is running on your system (mongod).
Verify the MONGO_URI in .env.
TypeScript Compilation Errors:

Fix any TypeScript errors highlighted during compilation.
Verify your tsconfig.json is correctly configured.
Dependency Issues:

Run npm install to ensure all dependencies are up to date.
If problems persist, delete node_modules and reinstall:

rm -rf node_modules package-lock.json
npm install





