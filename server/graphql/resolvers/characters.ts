/**
 * Resolvers for characters.
 * Contains all queries for characters.
 */

 import Character from '../../models/character';

 const charactersResolver = {
     character:async (parent, { characterId }) => {
        try {
            const character = await Character.findById(characterId);
            return character;
        }
        catch (err) {
            throw err;
        }
     },
     characters:async (parent, args, context) => {
         try {
            const characters = await Character.find();
            return characters;
         }
         catch (err) {
             throw err;
         }
     }
 };

 export {charactersResolver};