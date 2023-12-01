import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken";
const validateToken = async(token) => {
const secret ="eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NTY5MTU0MiwiaWF0IjoxNjk1NjkxNTQyfQ.EG-A9n08TjSSm2affCX5Bl3yRpDbIytMIO5j2iMalLA";
try {
    /*const isTokenValide = await jwtVerify( token, 
        new TextEncoder().encode(secret));
        if(isTokenValide){
           return true*/
       const isTokenValide = await decode(token);
       if(isTokenValide) {
        return true
       }
        
    } catch {
        return false
    }
}

export { validateToken };

   /* // Decodifica o token usando a função 'decode' do módulo 'jsonwebtoken'
    const decodedToken = decode(token);

    // Verifica se 'decodedToken' possui um valor (ou seja, se o token é válido)
    if (decodedToken) {
        // Se o token for válido, retorna true
        return true;
    } else {
        // Se o token não for válido, retorna false
        return false;
    }*/