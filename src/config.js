import axios from 'axios'
export const http = axios.create({
	baseURL: 'http://api.apixu.com/v1/'
});
export const apiKey = '5cd7317eaa803d5fd1f744a95d3b729a';