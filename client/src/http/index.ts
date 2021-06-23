import axios from "axios";

export const API_URL = "http://localhost:5000/api"

// Создаем инстанст axios с опредленнными настройками
const $api = axios.create({
	withCredentials: true, // Чтобы куки к каждмоу запросу цеплялсь автоматически
	baseURL: API_URL
});

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});

export default $api;
