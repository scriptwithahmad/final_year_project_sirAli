process.env.TZ = 'Asia/Karachi';
import axios from 'axios'


export default async function handler(req, res){
    console.log(req)
    // result = await axios.get('/api/attendance')
    // console.log(result.data)
    res.send(new Date().toString())
}