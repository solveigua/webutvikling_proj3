"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ntype Movie {\n    _id: ID!\n    title: String\n    seqNr: Int\n    releaseYear: Int\n    rating: Int\n}\n\ntype Character {\n    _id: ID!\n    name: String\n    actor: String\n    appearencesInMovies: Int\n    movies: [String]\n}\ntype Query {\n    hello: String\n\n    getAllMovies: [Movie]\n    getMovie(input: movieId): Movie\n\n    getAllCharacters: [Character]\n    getCharacter(input: characterId): Character\n    getMoviesFromCharacter: [String]\n}\n\ntype Mutation {\n    setRating(input: ratingInput): Movie\n}\n\ninput movieId{\n    id: ID\n}\ninput characterId{\n    id: ID\n}\ninput ratingInput {\n    movieId: ID\n    rating: Int\n}\n"], ["\ntype Movie {\n    _id: ID!\n    title: String\n    seqNr: Int\n    releaseYear: Int\n    rating: Int\n}\n\ntype Character {\n    _id: ID!\n    name: String\n    actor: String\n    appearencesInMovies: Int\n    movies: [String]\n}\ntype Query {\n    hello: String\n\n    getAllMovies: [Movie]\n    getMovie(input: movieId): Movie\n\n    getAllCharacters: [Character]\n    getCharacter(input: characterId): Character\n    getMoviesFromCharacter: [String]\n}\n\ntype Mutation {\n    setRating(input: ratingInput): Movie\n}\n\ninput movieId{\n    id: ID\n}\ninput characterId{\n    id: ID\n}\ninput ratingInput {\n    movieId: ID\n    rating: Int\n}\n"])));
var templateObject_1;
