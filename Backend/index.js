import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || process.env.MongoDBURI;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "*";

if (!MONGODB_URI) {
    console.error("Missing MONGODB_URI environment variable.");
    process.exit(1);
}

mongoose.set("strictQuery", true);

app.use(
    cors({
        origin: CLIENT_ORIGIN,
        credentials: true,
    })
);
app.use(
    express.json({
        limit: "10kb",
    })
);

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/user", userRoute);

app.use((req, res) => {
    res.status(404).json({
        message: `Route ${req.originalUrl} not found`,
    });
});

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
    console.error("Unhandled error:", err);
    res.status(err.status || 500).json({
        message: err.message || "Internal server error",
    });
});

const startServer = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

startServer();