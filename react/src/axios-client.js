import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem('ACCESS_TOKEN');
        }
        throw error;
    }
);

// Workouts endpoints
export const fetchProposedWorkouts = () => axiosClient.get('/proposed-workouts');
export const fetchPersonalWorkouts = () => axiosClient.get('/personal-workouts');
export const createPersonalWorkout = (workout) => axiosClient.post('/personal-workouts', workout);
export const deletePersonalWorkout = (id) => axiosClient.delete(`/personal-workouts/${id}`);

export default axiosClient;
