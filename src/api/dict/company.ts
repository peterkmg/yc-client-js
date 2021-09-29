import { DictionaryEntry, ApiObjectService } from '../common'
import { tables } from '@/database'

export interface CompanyEntry extends DictionaryEntry {}
export class Company extends ApiObjectService<CompanyEntry> {
  table = tables.dict.company.name
  fields = tables.dict.company.fields
}
