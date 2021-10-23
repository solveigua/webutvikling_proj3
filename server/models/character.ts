/**
 * Define model for character.
 */

 import mongoose, { mongo } from 'mongoose';

 /**
  * Character schema
  */
 const characterSchema = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     name:{
         type: String
     },
     actor:{
         type: String
     },
     appearencesInMovies:{
         type: Number
     }
 });

 characterSchema.statics = {
     /**
      * Get character
      * @param {ObjectId} id the id of the character
      */
     get(id:String): mongoose.Document {
        return this.findById(id).execAsync().then((character:any) => {
            if (character){
                return character;
            }
        });
     }

 };

 export default mongoose.model('Character', characterSchema);