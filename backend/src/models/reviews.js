/*
Campos:
comment 
rating
idCliente
*/
import { Schema, model } from "mongoose";

const reviewsSchema =new Schema({
comment:{
    type: String,
    require: true,
},
rating:{
    type: Number,
    require:true,
},
idCliente:{
    type: Schema.ObjectId,
    require: true,
    ref:"customers"
}},
{
    timestamps:true,
    strict:false
}

);


/*
import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    desciption: {
      type: String,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    stock: {
      type: Number,
      require: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Products", productsSchema);
 */