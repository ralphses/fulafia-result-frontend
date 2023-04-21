import axios from "axios";

const LOGIN_API = "http://localhost:8080/api/v1/auth/login"

class AuthService {

    login(loginRequest) {
    
        return axios.post(LOGIN_API, loginRequest);
    }

}

const authService = new AuthService();
export default authService;