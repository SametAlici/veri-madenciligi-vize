import { EKLER } from './ekler'
import { TESTS_BASE } from './tests'
import type { Test, Week } from './types'
import { WEEK7 } from './week7'
import { DENEME_H7, H7_EKLER } from './week7tests'
import { WEEKS_1_6 } from './weeks'

export const WEEKS: Week[] = [...WEEKS_1_6.map((w) => ({ ...w, body: w.body + (EKLER[w.id] ?? '') })), WEEK7]

export const TESTS: Test[] = [
  ...TESTS_BASE.map((t, i) => ({
    ...t,
    desc: t.desc.replace('1–6. haftalar', '1–7. haftalar'),
    questions: [...t.questions, ...(H7_EKLER[i + 1] ?? [])],
  })),
  { title: 'Deneme 11', desc: 'Hafta 7 odaklı: CART, regresyon ağacı, budama, vekil, önem, topluluklar.', questions: DENEME_H7 },
]
