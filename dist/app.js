"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
const handler = (req, res, next) => {
    res.send();
};
const middleware = (req, res, next) => {
    req.valid = true;
    next();
};
app.get('/', handler);
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.send();
});
app.listen(3000, () => {
    console.log('Server running on port 3000!');
});
