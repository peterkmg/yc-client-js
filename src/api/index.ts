import { Company } from './dict/company'
import { User } from './service/user'

const apiService = {
  dict: {
    company: new Company(),
  },
  service: {
    user: new User(),
  },
}

export default apiService
