import axios from 'axios'
import type { AxiosInstance } from 'axios'

interface ApiResponse<T> {
  status: string
  data: T
  message?: string
}

class ApiClient {
  private client: AxiosInstance
  private baseURL: string

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Add token to requests
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('authToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Handle 401 errors
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('authToken')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  async get<T>(url: string, config = {}): Promise<T> {
    const { data } = await this.client.get<ApiResponse<T>>(url, config)
    return data.data
  }

  async post<T>(url: string, payload: any, config = {}): Promise<T> {
    const { data } = await this.client.post<ApiResponse<T>>(url, payload, config)
    return data.data
  }

  async put<T>(url: string, payload: any, config = {}): Promise<T> {
    const { data } = await this.client.put<ApiResponse<T>>(url, payload, config)
    return data.data
  }

  async patch<T>(url: string, payload: any, config = {}): Promise<T> {
    const { data } = await this.client.patch<ApiResponse<T>>(url, payload, config)
    return data.data
  }

  async delete<T>(url: string, config = {}): Promise<T> {
    const { data } = await this.client.delete<ApiResponse<T>>(url, config)
    return data.data
  }
}