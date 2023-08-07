import axios from "axios"
import { resolve } from "path"

const url: string = 'http://localhost:3400/api/v1'

export const viewAuthor = async () => {
    try {
        return await axios.get(`${url}/get-authors`).then((res: any) => {
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
} 
export const AuthorsCategory = async(props:any, userID: string )=>{
    try {

        return await axios.post(`${url}/${userID}/catergory-author`, {category: props}).then((res: any) => {
            console.log("All Data",res)
            return res.data.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const CategoryArticle = async(userID: string)=>{
    try {
        return await axios.get(`${url}/${userID}/get-category-article`).then((res:any)=>{
            console.log(res.data.data)
            return res.data.data.data

        })

        
    } catch (error) {
        console.log(error)
        
    }
}