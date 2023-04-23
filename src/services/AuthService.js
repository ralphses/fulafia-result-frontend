import axios from "axios";

const LOGIN_API = "fulafia-result-backend-production.up.railway.app/api/v1/auth/login"

class AuthService {

    login(loginRequest) {
    
        return axios.post(LOGIN_API, loginRequest);
    }

}

const authService = new AuthService();
export default authService;