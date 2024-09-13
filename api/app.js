import express from 'express';
import postRoutes from './routes/post.route.js';
import authRoutes from './routes/auth.route.js';

const app = express();

app.use(express.json());
app.use('/api/test',(req,res)=>{
    res.send('Express Server');
})

app.use('/api/posts', postRoutes);  
app.use('/api/auth', authRoutes);
app.listen(8800, () => {                            
    console.log('Server is running on http://localhost:8800 ');
    });
