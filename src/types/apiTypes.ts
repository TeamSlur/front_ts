export interface ApiData {
    [key: string]: any; // Define specific properties if known, e.g., username, password, etc.
}

export interface ApiResponse {
    data?: any;
    userId?: string;
    userPw?: string;
}
