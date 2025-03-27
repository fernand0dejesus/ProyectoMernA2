import registerEmployees from "../models/Employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"
 
const registeremployeesController = {};
 
//post - agregar
         
registeremployeesController.registerEmployees = async (req, res) => {
    const {name,
         lastName,
          birthday,
           email, 
           address,
           hireDate,
           password,
           telephone,
           dui, 
           isssNumber,
        } = req.body; //req.body = lo que le pedimos al frontend
    const  newemployee = new employeesModel({name, lastName, birthday, email, address,hireDate,password,telephone,dui, isssNumber});
    await newemployee.save()
    res.json({message: "employee saved"})
}

try{
    //1-verificamos si el empleado ya existe
    const existEmployee =await emplooyeModel.findOne({email})
    if(existEmployee) {
        return res.json({message: "Employee alredy exist" })
    }

    //encriptar contraseña
    const passwordHash = await bcryptjs.passwordHash(password, 10)
    //guardar el usuario en empleados
    const newemployee = new emplooyeModel({
        name,
        lastName,
         birthday,
          email, 
          address,
          hireDate,
          password: passwordHash,
          telephone,
          dui, 
          isssNumber,})

          await newemployee.save();

          //token
          jsonwebtoken.sign(
            //1-que voy a guardar
            {id:newemployee._id},
            //2-secrreto
            config.JWT.secret,
            //3-cuaando expira
            {expiresIn: config.JWT.expiresIn},
            //4 duncion flecha
            (error, token)=>{
                if(error) console.log("error"+error)


                    res.cookie("authToken", token)
                    res.json({message:"empleado guardado"})
            }


          )

    } catch(error){
        console.log("error"+error)
        res.json({message: "Error saving employee"})
    }
    

 
export default registeremployeesController;