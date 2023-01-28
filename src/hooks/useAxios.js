// import { useEffect, useState } from "react"; 
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function useAxios () { 
//     const [search,setSearch] = useState('') 
//     useEffect(() => {
//       axios 
//       .get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`) 
//         .then((res) =>  { 
//             console.log(res.data);
//             setSearch(res.data.category.name)})
//         .catch((err) => console.log(err));
//     }, []);

//     const navigate = useNavigate() 
// }
// export default useAxios