// controllers/formController.js
const Property = require('../model/form.js')
const add = async (req, res) => {

        console.log("requestBody",req.body)
        try {
          // Extract data from the request body
          const {
            registeredBrandname,
            numberOfProperties,
            propertyName,
            propertyType,
            phoneNumber,
            emailAddress,
            address,
            state,
            city,
            pincode,
          } = req.body;
      
          // Create a new property document
          const newProperty = new Property({
            registeredBrandname,
            numberOfProperties,
            propertyName,
            propertyType,
            phoneNumber,
            emailAddress,
            address,
            state,
            city,
            pincode,
          });
      
          // Save the document to the database
          await newProperty.save();
      
          res.status(201).json({ message: 'Property saved successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
  };

  const Show = async(req,res)=>{
    try {
        const allProperties = await Property.find();

      res.status(200).json(allProperties);

    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'internal server error'})
    }
  }
  
  module.exports = {
    add,
    Show
  };
  