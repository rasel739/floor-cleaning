import http from "../Pages/ComonComponent/http-common";

class ServicePriceData {
  getAll() {
    return http.get("/servicePriceGet");
  }
}

const Request = new ServicePriceData();

export default Request;
