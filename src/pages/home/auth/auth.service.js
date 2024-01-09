import HttpService from "../../../repository/http.service.js";

class AuthService extends HttpService {
  registerProcess = async (data) => {
    // eslint-disable-next-line no-useless-catch
    try {
      let response = await this.postRequest("/v1/register", data, {
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}
const authService = new AuthService();
export default authService;
