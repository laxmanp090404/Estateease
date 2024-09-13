import express from 'express';

const router = express.Router();

router.get('/test', (req, res) =>{
res.send('Post Route running');
})

export default router;