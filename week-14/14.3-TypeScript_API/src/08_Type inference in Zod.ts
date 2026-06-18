// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information


// What is Zod?

// Zod is a TypeScript-first validation library.

// Think of it as a security guard for data.

// When data comes from:

// Frontend forms
// API requests
// URL parameters
// Environment variables
// External APIs

// Zod checks whether the data is valid before your application uses it.

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update:------------------>
const userProfileSchema = z.object({
  name:z.string().min(1, { message: "Name cannot be empty" }),
  email:z.string().email({ message: "Invalid email format" }),
  age:z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});


// app.put("/user", (req, res) => {
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody :{
//     name :string ,
//     email :string,
//     age?:string
//   } = req.body; // how to assign a type to updateBody?

//   if (!success) {
//     res.status(411).json({});
//     return
//   }
//   // update database here
//   res.json({
//     message: "User updated"
//   })
// });

// Inference = TypeScript automatically figuring out a type.

// z.infer = TypeScript automatically generating a TypeScript type from a Zod schema.
type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody : FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);