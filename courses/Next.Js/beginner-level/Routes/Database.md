---
id: lesson-2
title: "Connecting API Routes to a Database"
sidebar_label: Database Connection
sidebar_position: 2
description: "Connecting API Routes to a Database"
tags: [courses,beginner-level,FramWorks,Introduction]
--- 


You can connect your API routes to a database using popular database libraries like `mongoose` for MongoDB or `prisma` for SQL databases. Below is an example using MongoDB and Mongoose.

1. **Install Mongoose**:
   ```bash
   npm install mongoose
   ```

2. **Create a Database Connection Helper**:
   - Create a `src/lib/dbConnect.js` file to manage the database connection:
     ```javascript
     // src/lib/dbConnect.js
     import mongoose from 'mongoose';

     const MONGODB_URI = process.env.MONGODB_URI;

     if (!MONGODB_URI) {
       throw new Error(
         'Please define the MONGODB_URI environment variable inside .env.local'
       );
     }

     let cached = global.mongoose;

     if (!cached) {
       cached = global.mongoose = { conn: null, promise: null };
     }

     async function dbConnect() {
       if (cached.conn) {
         return cached.conn;
       }

       if (!cached.promise) {
         const opts = {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           bufferCommands: false,
           bufferMaxEntries: 0,
           useFindAndModify: false,
           useCreateIndex: true,
         };

         cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
           return mongoose;
         });
       }
       cached.conn = await cached.promise;
       return cached.conn;
     }

     export default dbConnect;
     ```

3. **Create a Mongoose Model**:
   - Create a `src/models/User.js` file for the User model:
     ```javascript
     // src/models/User.js
     import mongoose from 'mongoose';

     const UserSchema = new mongoose.Schema({
       name: {
         type: String,
         required: [true, 'Please provide a name'],
       },
       email: {
         type: String,
         required: [true, 'Please provide an email'],
         unique: true,
       },
     });

     export default mongoose.models.User || mongoose.model('User', UserSchema);
     ```

4. **Use the Database in API Routes**:
   - Update your API route to connect to the database and interact with the User model:
     ```javascript
     // src/pages/api/users.js
     import dbConnect from '../../lib/dbConnect';
     import User from '../../models/User';

     export default async function handler(req, res) {
       const { method } = req;

       await dbConnect();

       switch (method) {
         case 'GET':
           try {
             const users = await User.find({});
             res.status(200).json({ success: true, data: users });
           } catch (error) {
             res.status(400).json({ success: false, error });
           }
           break;
         case 'POST':
           try {
             const user = await User.create(req.body);
             res.status(201).json({ success: true, data: user });
           } catch (error) {
             res.status(400).json({ success: false, error });
           }
           break;
         default:
           res.setHeader('Allow', ['GET', 'POST']);
           res.status(405).end(`Method ${method} Not Allowed`);
       }
     }
     ```
    <BrowserWindow url="http://localhost:3000/users">
        <div>
          Fetched user Details
          <br />
          <button onClick={()=>{
             let text=document.getElementById("text")
             let details=[{
                    id:"1",
                    name:"siva",
                    info:"Developer"
                   },{
                     id:"2",
                     name:"John",
                     info:"Developer"
                   }]
              text.textContent=JSON.stringify(details, null, 2)
             }}>click to Fetch</button>
          <br />
          <pre id="text">No results Found</pre>
        </div>
     </BrowserWindow>