import express from "express";
import jwt from "jsonwebtoken";
import initKnex from "knex";
import bcrypt from "bcryptjs";
import configuration from "../knexfile.js";
import authorize from "../middleware/authorize.js";

const knex = initKnex(configuration);

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username,email,password);
  if (!username || !email || !password) {
    return res.status(400).send("Please enter the required fields");
  }
  //console.log(password);
  const hashedPassword = bcrypt.hashSync(password);
  //console.log(hashedPassword);

  const newUser = {
    username,
    email,
    password: hashedPassword,
  };
  console.log(newUser);
  try {
    await knex("users").insert(newUser);
    res.status(201).send("Registered Successfully");
  } catch (err) {
    console.error(err);
    res.status(400).send("Failed");
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please enter all required fields");
  }

  const user = await knex("users").where({ username }).first();

  if (!user) {
    return res.status(400).send("Invalid username");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, password: user.password }, // payload
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.json({ token });

  res.status(200);
});

router.get("/profile", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }

  const authHeader = req.headers.authorization;

  const authToken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_KEY);

    const user = await knex("users").where({ id: decoded.id }).first();

    delete user.password;

    res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(401).send("Invalid auth token: ", err);
  }
});

router.get("/users", authorize, async (_req, res) => {
  try {
    const users = await knex.select("*").from("users");

    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to retrieve users data" });
  }
});

/*

//NOTE: Secret Keys should NEVER be included in source code. They are better kept
// in  your .env provided on deployment. For demo purposes only.
const jsonSecretKey = "mysecretkey";

//Object to store user data (for demo purposes only)
const users = {};

// Middleware to check for a valid JWT token protected routes
app.use((req, res, next) => {
    //enroll and login are public URLs that don't require a token
    if (req.url === "/enroll" || req.url === "/login") {
        next();
    } else {
        //Extract token from the request
        const token = getToken(req);

        if (token) {
            console.log("Auth Token: ", token);
            //Verify the token is using the secret key.
            if (jwt.verify(token, jsonSecretKey)) {
                // Decode the token to pass along to endpoints that may need
                // access to data stored in the token
                req.decode = jwt.decode(token);
                next();
            } else {
                res.status(403).json({ error: "Not Authorized" });
            }
        } else {
            res.status(403).json({ error: "No token. Not authorized." });
        }
    }
});

//Function to extract the token from the Authorization header
function getToken(req) {
    if (!req.headers.authorization) {
        return;
    } else {
        return req.headers.authorization.split(" ")[1];
    }
}

// Endpoint for user enroll
app.post("/enroll", (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        console.error("All entries are required!");
        return res.sendStatus(400);
    }

    users[email] = {
        username,
        password,
    };
    console.log("Users Object: ", users);
    res.json({ success: "true" });
});

// Endpoint for user login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users[email];
    if (user && user.password === password) {
        console.log("User found: ", user);
        //Generate JWT token and send it in the response
        res.json({
            token: jwt.sign(
                { username: user.username, loginTime: Date.now() },
                jsonSecretKey
            ),
        });
    } else {
        res.status(403).json({
            token: "",
            error: {
                message:
                    "Error logging in. Invalid email/password combination.",
            },
        });
    }
});

//Protected endpoint to retrieve user profile data
app.get("/profile", (req, res) => {
    res.json(req.decode);
});

*/

export default router;
