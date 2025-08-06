# Initializing project:
- npm init

# Install Dependencies: 
- npm install express
- npm install mongoose
- npm install dotenv
- npm install cookie-parser
- npm install cors
- npm install http  
- npm install bcrypt 
- npm install jsonwebtoken
- npm install express-rate-limit
- npm install helmet


# Install devDependencies:
- npm install --save-dev nodemon

# npm install :
- To install all required file, modules, packages


# Models:
- Create User and Task model

# Middleware:
- Create auth.js : For authenticate user

# Utils :
- Create validation.js : For validate user input

# Rate Limit :
- const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
  });
