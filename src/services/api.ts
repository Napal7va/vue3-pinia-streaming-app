import axios from "axios";
const URL = "http://localhost:3001/"

export async function upload(file:any) {
    let formdata = new FormData()
    formdata.append('videofile', file)
    const response = await axios.post(`${URL}/uploadvideo`, formdata,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
    return response
}