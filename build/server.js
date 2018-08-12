"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(8000, function () { return console.log("Server running on http://localhost:8000"); });
app.get("/", function (req, res) {
    res.send("Awesome! We're live debugging this!");
});
//# sourceMappingURL=server.js.map