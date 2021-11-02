"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.CharacterSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.CharacterSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    actor: {
        type: String
    },
    appearencesInMovies: {
        type: Number
    },
    movies: {
        type: Array
    }
}, { collection: 'Character' });
exports.Character = mongoose_1.default.model('character', exports.CharacterSchema);
