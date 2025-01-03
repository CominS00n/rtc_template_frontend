// import axios from 'axios'
import api from '.'
import { ref } from 'vue'
import type { User } from '@/types/ntType'

// axios.defaults.baseURL = 'http://localhost:8000/api/v2'
// axios.defaults.withCredentials = true

export default function useUserApi() {
  const users = ref<User[]>([])

  const getUsers = async () => {
    try {
      const response = await api.get('/users')
      users.value = response.data.data
    } catch (error) {
      console.log(error)
    }
  }

  const getUserGroups = async (groupId: string) => {
    try {
      const response = await api.get(`/users/group/${groupId}`)
      users.value = response.data.data
    } catch (error) {
      console.log(error)
    }
  }

  return { users, getUsers, getUserGroups }
}
