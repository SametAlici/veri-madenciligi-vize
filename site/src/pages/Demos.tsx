import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'

const M2 = [50, 60, 70, 80, 95, 110, 120, 135, 150, 170]
const FIY = [2.0, 2.2, 2.4, 2.6, 3.8, 4.0, 4.2, 6.0, 6.2, 6.4]
const mean = (a: number[]) => a.reduce((s, x) => s + x, 0) / a.length
export const sse = (a: number[]) => { const m = mean(a); return a.reduce((s, x) => s + (x - m) ** 2, 0) }
const tr = (x: number, d = 3) => x.toFixed(d).replace('.', ',')

export function SseDemo() {
  const esik = M2.slice(0, -1).map((v, i) => (v + M2[i + 1]) / 2)
  const [i, setI] = useState(6)
  const toplam = esik.map((_, k) => sse(FIY.slice(0, k + 1)) + sse(FIY.slice(k + 1)))
  const sol = FIY.slice(0, i + 1), sag = FIY.slice(i + 1), W = 560, H = 190
  const X = (m: number) => 34 + ((m - 40) / 140) * (W - 44), Y = (f: number) => H - 22 - ((f - 1) / 6) * (H - 34), e = esik[i]
  const best = toplam.indexOf(Math.min(...toplam))
  return (
    <Card size="sm" className="my-4">
      <CardHeader><CardTitle className="flex items-center gap-2 text-sm"><Badge variant="secondary">Dene</Badge>SSE tezgâhı: eşiği kaydır</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <Slider aria-label="Eşik" value={[i]} min={0} max={8} step={1} onValueChange={(v) => setI(Array.isArray(v) ? v[0] : (v as number))} />
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          <line x1={34} x2={W - 10} y1={H - 22} y2={H - 22} stroke="currentColor" opacity=".3" />
          <line x1={X(e)} x2={X(e)} y1={8} y2={H - 22} stroke="currentColor" strokeDasharray="4 4" opacity=".6" />
          <line x1={X(40)} x2={X(e)} y1={Y(mean(sol))} y2={Y(mean(sol))} stroke="oklch(0.65 0.17 50)" strokeWidth={2.5} />
          <line x1={X(e)} x2={X(180)} y1={Y(mean(sag))} y2={Y(mean(sag))} stroke="oklch(0.65 0.17 50)" strokeWidth={2.5} />
          {M2.map((m, k) => {
            const g = m <= e ? mean(sol) : mean(sag)
            return <g key={m}><line x1={X(m)} x2={X(m)} y1={Y(FIY[k])} y2={Y(g)} stroke="currentColor" opacity=".25" /><circle cx={X(m)} cy={Y(FIY[k])} r={4} fill="oklch(0.6 0.15 255)" /></g>
          })}
          {[50, 90, 130, 170].map((m) => <text key={m} x={X(m)} y={H - 7} fontSize={10} textAnchor="middle" fill="currentColor" opacity=".6">{m}</text>)}
        </svg>
        <p className="font-mono text-xs">m² ≤ {String(e).replace('.', ',')} · sol {sol.length} ev SSE {tr(sse(sol))} + sağ {sag.length} ev SSE {tr(sse(sag))} = <b>{tr(toplam[i])}</b>{i === best && ' ← en küçük'}</p>
        <p className="text-xs text-muted-foreground">Turuncu çizgiler grup ortalaması, dikey çizgiler her evin hatası.</p>
      </CardContent>
    </Card>
  )
}

/** n modelin çoğunluk oyu doğruluğu: en az ⌊n/2⌋+1 modelin doğru olma olasılığı */
export function majority(n: number, p: number) {
  let t = 0, c = 1
  for (let k = 0; k <= n; k++) {
    if (k > 0) c = (c * (n - k + 1)) / k
    if (k > n / 2) t += c * p ** k * (1 - p) ** (n - k)
  }
  return t
}
export function VoteDemo() {
  const [n, setN] = useState(25)
  const [p, setP] = useState(65)
  const v = useMemo(() => majority(n, p / 100) * 100, [n, p])
  const pick = (f: (x: number) => void) => (x: number | readonly number[]) => f(Array.isArray(x) ? x[0] : (x as number))
  return (
    <Card size="sm" className="my-4">
      <CardHeader><CardTitle className="flex items-center gap-2 text-sm"><Badge variant="secondary">Dene</Badge>Oylama tezgâhı</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5"><div className="flex justify-between text-xs"><span className="text-muted-foreground">Model sayısı (tek)</span><span className="font-mono">{n}</span></div><Slider aria-label="Model sayısı" value={[n]} min={1} max={101} step={2} onValueChange={pick(setN)} /></div>
          <div className="space-y-1.5"><div className="flex justify-between text-xs"><span className="text-muted-foreground">Tek model doğruluğu</span><span className="font-mono">%{p}</span></div><Slider aria-label="Doğruluk" value={[p]} min={30} max={95} step={1} onValueChange={pick(setP)} /></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border p-3"><div className="text-xs text-muted-foreground">Hatalar bağımsız</div><div className="text-2xl font-semibold tabular-nums">%{tr(v, 1)}</div></div>
          <div className="rounded-lg border p-3"><div className="text-xs text-muted-foreground">Hepsi aynı hatayı yapıyor</div><div className="text-2xl font-semibold tabular-nums">%{tr(p, 1)}</div></div>
        </div>
        <p className="text-xs text-muted-foreground">Doğruluğu %50'nin altına çek: oylama işi kötüleştirir.</p>
      </CardContent>
    </Card>
  )
}
