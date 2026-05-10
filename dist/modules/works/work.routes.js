"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workRoutes = void 0;
const express_1 = __importDefault(require("express"));
const work_controller_1 = require("./work.controller");
const router = express_1.default.Router();
router.post("/", work_controller_1.workControllers.createWork);
router.get("/", work_controller_1.workControllers.getWork);
router.get("/:id", work_controller_1.workControllers.getSingleWork);
router.put("/:id", work_controller_1.workControllers.updateWork);
router.delete("/:id", work_controller_1.workControllers.deleteWork);
exports.workRoutes = router;
