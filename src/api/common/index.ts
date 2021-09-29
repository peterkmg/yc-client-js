import db from '@/database'

export interface ApiResult<T> {
  data: T[] | null
  error: string | undefined
}

export interface DictionaryEntry {
  id?: string
  full_name: string
  short_name: string | null
}

export abstract class ApiObjectService<T> {
  protected abstract table: string
  protected abstract fields: string

  async get(): Promise<ApiResult<T>> {
    const { data, error } = await db.from(this.table).select(this.fields)
    return { data: data as T[], error: error?.message }
  }

  async getWithFields(fields: string): Promise<ApiResult<T>> {
    const { data, error } = await db.from(this.table).select(fields)
    return { data: data as T[], error: error?.message }
  }

  async getSingle(id: string): Promise<ApiResult<T>> {
    const { data, error } = await db
      .from(this.table)
      .select(this.fields)
      .match({ id })
    return { data: data as T[], error: error?.message }
  }

  async getSingleWithFields(id: string, fields: string): Promise<ApiResult<T>> {
    const { data, error } = await db
      .from(this.table)
      .select(fields)
      .match({ id })
    return { data: data as T[], error: error?.message }
  }

  async insert(entries: T[]): Promise<string | undefined> {
    const { error } = await db.from(this.table).insert(entries)
    return error?.message
  }

  async deleteSingle(id: string): Promise<string | undefined> {
    const { error } = await db.from(this.table).delete().match({ id })
    return error?.message
  }
}
