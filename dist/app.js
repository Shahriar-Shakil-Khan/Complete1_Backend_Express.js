"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const logger_1 = __importDefault(require("./middleware/logger"));
const user_routes_1 = require("./modules/user/user.routes");
const work_routes_1 = require("./modules/works/work.routes");
const auth_routes_1 = require("./modules/auth/auth.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.default)().catch((err) => {
    console.error("DB init failed:", err);
    process.exit(1);
});
app.get("/", logger_1.default, (req, res) => {
    res.send("Hello Next Level Developers md. shahriar shakil!");
});
// ================= USERS CRUD =================
app.use("/users", user_routes_1.userRoutes);
// ================= works CRUD =================
app.use("/works", work_routes_1.workRoutes);
//================== Auth Routes =================
app.use("/auth", auth_routes_1.authRoutes);
// ================= 404 =================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path,
    });
});
exports.default = app;
