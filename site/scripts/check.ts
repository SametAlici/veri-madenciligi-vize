import { TESTS_BASE } from '../src/data/tests.ts'
import { DENEME_H7, H7_EKLER } from '../src/data/week7tests.ts'
import { YORUM_TESTS } from '../src/data/yorumTests.ts'

let bad = 0
const eq = (n: string, a: number, b: number, tol = 0.0006) => { if (Math.abs(a - b) > tol) { console.log('HATA', n, a, b); bad++ } }
const M = [50, 60, 70, 80, 95, 110, 120, 135, 150, 170], F = [2, 2.2, 2.4, 2.6, 3.8, 4, 4.2, 6, 6.2, 6.4]
const mean = (a: number[]) => a.reduce((s, x) => s + x, 0) / a.length
const sse = (a: number[]) => { const m = mean(a); return a.reduce((s, x) => s + (x - m) ** 2, 0) }
eq('kök', sse(F), 26.436); eq('ort', mean(F), 3.98)
;[22.08, 17.6, 12.857, 7.62, 7.392, 6.713, 5.314, 12.98, 19.929].forEach((v, k) => eq('eşik' + k, sse(F.slice(0, k + 1)) + sse(F.slice(k + 1)), v))
eq('sol 87,5', sse(F.slice(0, 4)) + sse(F.slice(4, 7)), 0.28); eq('toplam', 0.2 + 0.08 + 0.08, 0.36)
eq('iki ev', sse([2, 2.6]), 0.18)
const maj = (n: number, p: number) => { let t = 0, c = 1; for (let k = 0; k <= n; k++) { if (k) c = c * (n - k + 1) / k; if (k > n / 2) t += c * p ** k * (1 - p) ** (n - k) } return t }
;[[1, .65], [5, .765], [25, .94], [101, .999]].forEach(([n, v]) => eq('oy' + n, maj(n, .65), v, .0006)); eq('oy70', maj(3, .7), .784)
eq('oob', (1 - 1 / 1000) ** 1000, .368, .001); eq('balanced', 3000 / 336, 8.93, .01); eq('b2', 3000 / 5664, .53, .001)
eq('maliyet20a', 36 * 20 + 2, 722); eq('20b', 8 * 20 + 97, 257); eq('5a', 36 * 5 + 2, 182); eq('5b', 8 * 5 + 97, 137)
// boosting
const p1 = F.map((_, i) => i < 7 ? mean(F.slice(0, 7)) : mean(F.slice(7))), r = F.map((f, i) => f - p1[i])
eq('s1', r.reduce((s, x) => s + x * x, 0), 5.314); eq('l', mean(r.slice(0, 4)), -.73, .002); eq('h', mean(r.slice(4)), .49, .005)
eq('boost', sse(r.slice(0, 4)) + sse(r.slice(4)), 1.776); [55,65,75,87.5,102.5,115,127.5,142.5,160].forEach((_, k) => { const v=[4.139,3.159,2.372,1.776,3.478,4.743,5.314,5.289,5.27][k]; eq('b'+k, sse(r.slice(0,k+1))+sse(r.slice(k+1)), v, .002) })
// önem
const g = (a: number[]) => { const n = a.reduce((s, x) => s + x); return 1 - a.reduce((s, x) => s + (x / n) ** 2, 0) }
eq('g', g([4, 5, 3]), .6528); eq('gs', g([5, 3]) * 8 / 12, .3125); eq('kilo', (g([4, 5, 3]) - .3125) / g([4, 5, 3]), .521); 
eq('hava', g([9, 5]), .459, .001)
// budama
eq('t2', 4 / 3, 1.33, .01); eq('a2-5', 0 + 2 * 5, 10); eq('a2-3', 1 + 2 * 3, 7); eq('a2-1', 7 + 2, 9)
// model ağacı
eq('m', 2.29 + .0158 * 100, 3.87, .001)
// soru yapısı
const all = [...Object.values(H7_EKLER).flat(), ...DENEME_H7]
const seen = new Set(TESTS_BASE.flatMap((t) => t.questions.map((q) => q.q)))
all.forEach((q) => {
  if (seen.has(q.q)) { console.log('TEKRAR', q.q); bad++ } seen.add(q.q)
  if (q.o.length !== 4 || new Set(q.o).size !== 4 || q.a < 0 || q.a > 3 || !q.e || q.w !== 7) { console.log('YAPI', q.q); bad++ }
})
// Deneme 6–10 (yorum ağırlıklı genel prova)
YORUM_TESTS.forEach((t) => {
  if (t.questions.length !== 20) { console.log('SAYI', t.title, t.questions.length); bad++ }
  const weeks = new Set(t.questions.map((q) => q.w))
  for (let w = 1; w <= 7; w++) if (!weeks.has(w)) { console.log('HAFTA EKSİK', t.title, w); bad++ }
  t.questions.forEach((q) => {
    if (seen.has(q.q)) { console.log('TEKRAR', q.q); bad++ } seen.add(q.q)
    if (q.o.length !== 4 || new Set(q.o).size !== 4 || q.a < 0 || q.a > 3 || !q.e || q.w < 1 || q.w > 7) { console.log('YAPI', q.q); bad++ }
  })
})
console.log('Yorum denemeleri:', YORUM_TESTS.length, '×', YORUM_TESTS.map((t) => t.questions.length).join('/'))
console.log('H7 soru:', all.length, '· D11:', DENEME_H7.length, '· toplam:', TESTS_BASE.reduce((s, t) => s + t.questions.length, 0) + all.length)
console.log(bad ? `${bad} HATA` : 'TÜM KONTROLLER GEÇTİ')
