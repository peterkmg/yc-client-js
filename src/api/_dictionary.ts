import type { ApiResult } from './_common'
import db from '@/database'

export interface DictionaryEntry {
  id?: number
  full_name: string
  short_name: string
}

export class Dictionary {
  async getAll(table: string): Promise<ApiResult<DictionaryEntry>> {
    const { data, error } = await db
      .from(table)
      .select('id, full_name, short_name')
    return { data: data as DictionaryEntry[], error: error?.message ?? null }
  }

  async insert(
    table: string,
    entries: DictionaryEntry[],
  ): Promise<string | null> {
    const { error } = await db.from(table).insert(entries)
    return error?.message ?? null
  }

  async deleteSingle(table: string, id: number): Promise<string | null> {
    const { error } = await db.from(table).delete().match({ id })
    return error?.message ?? null
  }
}
