import { ApiObjectService } from '../common'
import { tables } from '@/database'

export interface UserEntry {
  id: string
  username: string | null
}

export class User extends ApiObjectService<UserEntry> {
  table = tables.service.user.name
  fields = tables.service.user.fields
}
