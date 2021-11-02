"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = exports.MovieSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.MovieSchema = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    seqNr: {
        type: Number
    },
    releaseYear: {
        type: Number
    },
    rating: {
        type: Number
    }
}, { collection: 'Movie' });
exports.Movie = mongoose_1.default.model('movie', exports.MovieSchema);
