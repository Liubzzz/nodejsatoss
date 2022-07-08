import axios from "axios";
export default  async function postEmployee(req,res){
    let name=req.query.name
    let gender=req.query.gender
    let age=req.query.age
    let companyID=req.query.companyID
    let longitude=req.query.longitude
    let latitude=req.query.latitude
    let city=req.query.city
    
    const url='${process.env.URL}'
    const data=`
    mutation($name:String!,
    $gender:String!,
    $age:Int!,
    $longitude:Int!,
    $latitude:Int!,
    $city:String!
    ){createEmployee(input:{name:$name
        age:$age
        gender:$gender
        companyID:"71c91eb3-3786-4f34-9b23-32fde2882d69"
        location:{
            longitude:$longitude
            latitude:$latitude
            city:$city
            
        }})
       {name}
    }   
`    
const gqlQuery={"query":data,"variables":vars};
   body=response.data
   res.json(body)
} 