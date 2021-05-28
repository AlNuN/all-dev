import Dexie from 'dexie';
import 'dexie-observable'
import 'dexie-syncable'

const db = new Dexie('MyDB')
db.version(1).stores({
  projetos: '++id, nome, linguagem, cor'
})

export { db };
