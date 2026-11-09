import { EKLER } from './ekler'
import { TESTS_BASE } from './tests'
import type { Test, Week } from './types'
import { WEEK7 } from './week7'
import { H7_EKLER } from './week7tests'
import { YORUM_TESTS } from './yorumTests'
import { WEEKS_1_6 } from './weeks'

export const WEEKS: Week[] = [
  ...WEEKS_1_6.map((w) => ({ ...w, body: w.body + (EKLER[w.id] ?? '') })),
  WEEK7,
]

// Vize için 10 deneme.
// Deneme 1–5: 1–6. hafta soruları + Hafta 7 ekleri (24'er soru).
// Deneme 6–10: hocanın son duyurusuna göre genel prova (20 soru, 1–7. hafta, yorum ağırlıklı, hesap makinesiz).
const BASE: Test[] = TESTS_BASE
  .slice(0, 5)
  .map((t, i) => ({
    ...t,
    desc: t.desc.replace('1–6. haftalar', '1–7. haftalar'),
    questions: [...t.questions, ...(H7_EKLER[i + 1] ?? [])],
  }))

export const TESTS: Test[] = [...BASE, ...YORUM_TESTS]
