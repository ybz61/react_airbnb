import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class ApiRequestClass {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log("[ 请求拦截 request config ] >", config);
        return config;
      },
      (err) => {
        console.log("[ 请求拦截 request err ] >", err);
        return err;
      }
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("[ 响应拦截 response err ] >", err);
        return err;
      }
    );
  }

  request(config) {
    // return this.instance.request(config);
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new ApiRequestClass(BASE_URL, TIMEOUT);
