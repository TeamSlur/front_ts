import axios from "axios";
import { ApiData, ApiResponse } from "../types/apiTypes";

interface ModeApi {
    [key: string]: {
        func: (data: ApiData) => Promise<any>;
    };
}

export const login = async (mode: string, apiData: ApiData): Promise<any> => {
    const modeApi: ModeApi = {
        "login": {
            func: async (data: ApiData): Promise<any> => {
                try {
                    const res = await axios.post<ApiResponse>("/login", data);
                    return res.data || false;
                } catch (error) {
                    alert("[ERROR] Login API Error.");
                    return false;
                }
            }
        },
        "searchId": {
            func: async (data: ApiData): Promise<any> => {
                try {
                    const res = await axios.post<ApiResponse>("/forget/id", data);
                    return res.data?.userId || false;
                } catch (error) {
                    alert("[ERROR] SearchId API Error.");
                    return false;
                }
            }
        },
        "searchPw": {
            func: async (data: ApiData): Promise<any> => {
                try {
                    const res = await axios.post<ApiResponse>("/forget/pw", data);
                    return res.data?.userPw || false;
                } catch (error) {
                    alert("[ERROR] SearchPw API Error.");
                    return false;
                }
            }
        },
        "signup": {
            func: async (data: ApiData): Promise<any> => {
                try {
                    const res = await axios.post<ApiResponse>("/signup", data);
                    return res?.data || false;
                } catch (error) {
                    alert("[ERROR] SignUp API Error.");
                    return false;
                }
            }
        },
        "emailCode": {
            func: async (data: ApiData): Promise<any> => {
                try {
                    const res = await axios.post<ApiResponse>("/api/mail/send", data, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    return res.data || false;
                } catch (error) {
                    alert("[ERROR] EmailCode API Error.");
                    return false;
                }
            }
        },
        "code": {
            func: async (data: ApiData): Promise<any> => {
                try {
                    const res = await axios.post<ApiResponse>("/api/mail/check", data);
                    return res.data || false;
                } catch (error) {
                    alert("[ERROR] Code API Error.");
                    return false;
                }
            }
        }
    };

    try {
        return await modeApi[mode].func(apiData);
    } catch (error) {
        throw error;
    }
}
