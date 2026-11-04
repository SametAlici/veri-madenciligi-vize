import type { Question } from './types'

const q = (s: string, o: string[], a: number, e: string): Question => ({ w: 7, q: s, o, a, e })

/** Mevcut denemelere eklenen H7 soruları: deneme numarası → sorular */
export const H7_EKLER: Record<number, Question[]> = {
  1: [
    q("CART kısaltmasının açılımı ve yetenekleri için doğru ifade hangisidir?", ["Classification And Regression Trees: kategori de sayı da tahmin eder", "Cluster And Rule Trees: kümeleme yapar", "Classification Algorithm for Random Trees: yalnız kategori tahmin eder", "C4.5'in kısaltmasıdır"], 0, "CART, sınıflandırma ve regresyon ağaçlarıdır (Breiman vd., 1984)."),
    q("Regresyon ağacında bir yaprağın cevabı nedir?", ["Çoğunluk sınıfı", "İçindeki değerlerin ortalaması", "En büyük değer", "Rastgele bir kaydın değeri"], 1, "Bir grubun SSE'sini en küçük yapan sayı ortalamadır."),
    q("Bootstrap örnekleme nasıl yapılır?", ["n kayıttan yerine koymadan n/2 kayıt çekilir", "n kayıttan yerine koyarak n kayıt çekilir", "Öznitelikler rastgele silinir", "Veri k parçaya bölünür"], 1, "Yerine koyarak çekildiği için bazı kayıtlar birkaç kez gelir, bazıları hiç gelmez."),
    q("Bagging ve rastgele orman öncelikle hangi hatayı düşürür?", ["Yanlılığı", "Varyansı", "İndirgenemez gürültüyü", "Eksik değerleri"], 1, "Çok sayıda derin ağacın oylaması kararsızlığı (varyansı) azaltır, yanlılık aynı kalır."),
  ],
  2: [
    q("Regresyon ağacında bölmenin karışıklığı nasıl hesaplanır?", ["SSE(sol) + SSE(sağ)", "Gini'lerin ağırlıklı ortalaması", "Entropi farkı", "SSE(sol) × SSE(sağ)"], 0, "SSE toplam olduğu için grup büyüklüğünü zaten içerir; ağırlık gerekmez."),
    q("Maliyet-karmaşıklık budamasında α(düğüm) formülü hangisidir?", ["(yaprak yapınca hata − alt ağacın hatası) ÷ (alt ağaçtaki yaprak − 1)", "Hata + yaprak sayısı", "Alt ağacın hatası ÷ yaprak sayısı", "(1 − 1/n)ⁿ"], 0, "Yaprak başına önlenen hatadır."),
    q("class_weight='balanced' bir sınıfın ağırlığını nasıl verir (2 sınıf)?", ["n ÷ (2 × sınıftaki kayıt)", "sınıftaki kayıt ÷ n", "Her sınıfa 1", "1 − sınıf oranı"], 0, "Sınıf sıklığıyla ters orantılıdır."),
    q("Kareli hata için beklenen hatanın üç bileşeni hangisidir?", ["Yanlılık² + Varyans + indirgenemez gürültü (σ²)", "Gini + entropi + SSE", "Doğruluk + kesinlik + duyarlılık", "Eğitim + doğrulama + test hatası"], 0, "σ² verinin kendi gürültüsüdür; hiçbir model azaltamaz."),
  ],
  3: [
    q("Hangisi rastgele ormanı bagging'den ayırır?", ["Bootstrap kullanması", "Her düğümde özniteliklerin rastgele alt kümesine bakması", "Oylama yapması", "Derin ağaç kullanması"], 1, "Bootstrap ve oylama ikisinde de vardır; fark düğüm başına öznitelik seçimidir."),
    q("Ormandaki ağaçlar neden derin, boosting'dekiler neden sığ seçilir?", ["Orman varyansı, boosting yanlılığı düşürür; her yöntem düzeltebileceği kusuru taşıyan ağacı alır", "Derin ağaçlar daha hızlıdır", "Sığ ağaçlar daha az bellek ister, başka sebep yoktur", "Tersi doğrudur"], 0, "Oylama yanlılığı düzeltemez; boosting derin ağaçla ezberler."),
    q("Vekil bölme ile C4.5'in eksik değer çözümü arasındaki fark nedir?", ["CART kaydı vekil soruyla tek dala gönderir, C4.5 kesirli olarak bütün dallara böler", "İkisi aynıdır", "CART kaydı siler", "C4.5 ortalamayla doldurur"], 0, "Karşılaştırma tablosu: C4.5 kesirli, CART vekil."),
    q("Öznitelik önemi ile nedensellik için doğru ifade hangisidir?", ["Önem modelin neye dayandığını söyler, nedeni göstermez", "En önemli öznitelik sonucun sebebidir", "Önemi sıfır olan öznitelik hedefi etkilemez", "Önem yalnız test verisinde hesaplanır"], 0, "Önem ≠ neden; ikiz deneyi bunu gösterir."),
  ],
  4: [
    q("Fiyatları 2,0 ve 2,6 olan iki evin SSE'si kaçtır?", ["0,18", "0,09", "0,36", "0,60"], 0, "Ortalama 2,3; farklar ±0,3; 0,09 + 0,09 = 0,18."),
    q("10 ev verisinde m² ≤ 102,5 bölmesinin toplam SSE'si kaçtır? (Sol 2,0 · 2,2 · 2,4 · 2,6 · 3,8; sağ 4,0 · 4,2 · 6,0 · 6,2 · 6,4)", ["7,392", "5,314", "7,620", "6,713"], 0, "Sol SSE 2,000 + sağ SSE 5,392 = 7,392."),
    q("13 müşterilik ağaçta α = 2 için 5, 3 ve 1 yapraklı ağaçların maliyeti sırasıyla nedir, hangisi seçilir?", ["10, 7, 9; 3 yapraklı", "5, 4, 8; 3 yapraklı", "10, 7, 9; 1 yapraklı", "7, 9, 10; 5 yapraklı"], 0, "Maliyet = hata + α×yaprak: 0+10, 1+6, 7+2."),
    q("Her biri %70 doğru olan 3 bağımsız modelin çoğunluk oyunun doğruluğu kaçtır?", ["%78,4", "%70,0", "%91,0", "%65,0"], 0, "0,7³ + 3×0,7²×0,3 = 0,343 + 0,441 = 0,784."),
  ],
  5: [
    q("Bir banka \"cinsiyet\" sütununu sildi ama model hâlâ kadınları geri itiyor. En olası açıklama nedir?", ["Silinen bilginin vekilleri (kelime, okul adı) veride kaldı", "Sütun tam silinmemiştir", "Model yanlış kodlanmıştır", "Rastgele hatadır"], 0, "Amazon vakası: sütunu silmek yetmez."),
    q("Arıza verisinde tembel model %94,3, balanced ağaç %88,3 doğru. Kaçan arıza çok pahalıysa hangi yorum doğrudur?", ["Doğruluğu düşük olsa da balanced ağaç tercih edilir", "Tembel model en iyisidir", "Doğruluğu yüksek olan her zaman seçilir", "İkisi de kullanılamaz"], 0, "Karar hatanın maliyetiyle verilir; tembel model 51 arızanın hiçbirini yakalamaz."),
    q("Önem tablosunun en üstünde hedefle doğrudan ilişkisi olmayan bir sütun çıktı. Nedeni ne olabilir?", ["Asıl sebebin neredeyse aynı kopyası (ikizi) olması", "Tablonun ters sıralanması", "Modelin hiç öğrenememesi", "Testin az olması"], 0, "İkiz deneyi: ikiz 0,379 ile en önemli çıktı."),
    q("Model eğitimde %100, testte %86,7 başarılı. Teşhis nedir?", ["Varyans yüksek: ezberliyor", "Yanlılık yüksek: fazla basit", "İyi model", "Veri sızıntısı kesindir"], 0, "Eğitim çok yüksek, fark büyük → varyans."),
  ],
  6: [
    q("Veri madenciliği görevleri içinde regresyon ağacı neyi tahmin eder?", ["Sürekli sayısal hedefi", "Kategorik hedefi", "Doğal grupları", "Birliktelik kurallarını"], 0, "Regresyon kestirimci bir görevdir; hedef sayıdır."),
    q("Öznitelik ile hedef ayrımı için doğru örnek hangisidir?", ["Ev verisinde m² öznitelik, fiyat hedeftir", "m² hedef, fiyat özniteliktir", "İkisi de hedeftir", "İkisi de özniteliktir"], 0, "Öznitelik soru sorulan, hedef tahmin edilen sütundur."),
  ],
  7: [
    q("Dengesiz veride %5,6 arızalı veride \"hiçbiri arızalanmaz\" diyen modelin doğruluğu neden yanıltıcıdır?", ["Doğruluk yüksektir ama azınlık sınıfını hiç yakalamaz", "Doğruluk hesaplanamaz", "Eksik değer vardır", "Ölçekleme yapılmamıştır"], 0, "Tembel model %94 doğru ama 0 arıza yakalar."),
    q("Birbirine çok benzeyen iki sütun önem tablosunu nasıl etkiler?", ["Önem aralarında bölüşülür, hangisinin önde çıkacağı tesadüftür", "İkisinin önemi de iki katına çıkar", "Model hata verir", "Etkisi yoktur"], 0, "Önce öznitelikler arası korelasyona bakılmalıdır (Hafta 3)."),
  ],
  8: [
    q("Yüksek riskli kararda neden budanmış ağaç ormana tercih edilebilir?", ["Doğruluğu yakınsa kuralları denetlenebilir", "Her zaman daha doğrudur", "Daha çok veri ister", "Oylama yapar"], 0, "Ormanın bedeli yorumlanabilirliktir."),
    q("Ormanın OOB doğruluğu için doğru ifade hangisidir?", ["Ayrı doğrulama ayırmadan tahmin verir, test verisinin yerini tutmaz", "Test verisinin yerini tutar", "Yalnız eğitim hatasıdır", "Yalnız boosting'de vardır"], 0, "Test yine en sonda, bir kez okunur."),
  ],
  9: [
    q("CART, Hafta 6'daki Hava verisinin kökünde ne sorar?", ["Hava = Bulutlu?", "Hava? (üç dal)", "Nem = Yüksek?", "Rüzgâr = Var?"], 0, "Ağırlıklı Gini 0,357 ile en iyi ikili soru; azalma 0,102."),
    q("13. müşteri eklenince oluşan ağaçta en zayıf halka hangisidir?", ["t3 (α = 0,5)", "t4 (α = 1)", "t2 (α = 1,33)", "Kök (α = 1,75)"], 0, "En küçük α'lı düğüm önce kesilir."),
  ],
  10: [
    q("Regresyon ağacı 300 m²'lik eve ne tahmin eder (10 ev ağacı)?", ["6,2 milyon; eğitim aralığının dışına çıkamaz", "12,4 milyon", "Tahmin yapamaz", "3,98 milyon"], 0, "Son yaprağın ortalamasını söyler."),
    q("Bir bootstrap örnekleminde bir kaydın hiç gelmeme olasılığı yaklaşık kaçtır?", ["0,368", "0,632", "0,5", "0,1"], 0, "(1 − 1/n)ⁿ ≈ 1/e; ağaç verinin %63,2'sini görür."),
    q("Vekil sorunun işe yaraması için hangi koşul gerekir?", ["Asıl soruyla uyumu çoğunluk kuralından yüksek olmalı", "Hedefle korelasyonu 1 olmalı", "Sayısal öznitelik olmalı", "Kökte kullanılmalı"], 0, "Beden verisinde çoğunluk 8/12; yalnız Boy = Kısa (9/12) geçer."),
    q("Ağaç sayısını çok artırmak ormanda ne yapar?", ["Aşırı öğrenmeye yol açmaz, yalnız yavaşlatır", "Aşırı öğrenmeyi artırır", "Yanlılığı sıfırlar", "Doğruluğu düşürür"], 0, "İlk birkaç düzine ağaçtan sonra kazanç durur."),
  ],
}

export const DENEME_H7: Question[] = [
  q("ID3 için hangisi doğrudur?", ["Sayısal özniteliği önce kategoriye çevirir, budama yapmaz", "Eşikle böler", "Vekil bölme kullanır", "Regresyon yapar"], 0, "ID3'te sayısal öznitelik, budama ve eksik değer desteği yoktur."),
  q("C4.5 adı neyi ifade eder?", ["Quinlan'ın C4 programının geliştirilmiş sürümünün adı", "Classification 4.5", "Bir kısaltma: Cost 4.5", "CART'ın sürümü"], 0, "C4.5 bir kısaltma değildir."),
  q("10 ev verisinde kökün ortalaması ve SSE'si nedir?", ["3,98 ve 26,436", "3,98 ve 5,314", "4,20 ve 22,08", "6,20 ve 0,08"], 0, "Hiç soru sormasaydık her eve 3,98 derdik."),
  q("10 ev için kaç aday eşik vardır?", ["9", "10", "5", "45"], 0, "Ardışık iki değerin ortası: n − 1 eşik."),
  q("Kökte neden 87,5 değil 127,5 seçildi?", ["Toplam SSE'si en küçük: 5,314 < 7,620", "Veriyi tam ortadan böldüğü için", "Daha büyük olduğu için", "Rastgele seçildi"], 0, "Sıçramalar gözle kıyaslanmaz; SSE karar verir."),
  q("127,5'te sağ dal (3 ev) neden yaprak oldu?", ["Bölme için en az 4 kayıt kuralı", "SSE sıfır olduğu için", "Derinlik 1 sınırı", "Fiyatlar aynı olduğu için"], 0, "3 < 4 → bölünemez; cevap ortalama 6,2."),
  q("10 ev ağacında toplam SSE 26,436'dan kaça iner?", ["0,36", "5,314", "1,776", "0,28"], 0, "0,20 + 0,08 + 0,08 = 0,36."),
  q("10 ev ağacı 115 m²'lik eve ne der?", ["4,0 milyon", "2,3 milyon", "6,2 milyon", "4,2 milyon"], 0, "87,5 < 115 ≤ 127,5 → orta yaprak."),
  q("Model ağacının regresyon ağacından farkı nedir?", ["Yaprakta sabit yerine küçük doğrusal model olması", "Gini kullanması", "İkili bölmemesi", "Budanamaması"], 0, "M5, Quinlan 1992. 100 m²: 3,87 vs 4,0."),
  q("Budama dizisi için doğru ifade hangisidir?", ["α büyüdükçe ağaç yalnız küçülür; dizi iç içedir", "α büyüdükçe ağaç büyür", "Her α farklı bağımsız ağaç verir", "Dizi test verisiyle üretilir"], 0, "CART kitabı: α'lar sonludur ve iç içe dizi oluşturur."),
  q("t2 için α neden 1,33'tür?", ["(4 − 0) ÷ (4 − 1)", "(7 − 0) ÷ (5 − 1)", "(1 − 0) ÷ (3 − 1)", "4 ÷ 4"], 0, "Yaprak yapınca 4 hata, alt ağaç 4 yaprak 0 hata."),
  q("Dizideki hangi ağacın kullanılacağına ne karar verir?", ["Doğrulama", "Test verisi", "Eğitim hatası", "Yaprak sayısı"], 0, "Test ile seçmek sızıntıdır. 13 kayıtta doğrulama anlamsızdır, örnek yalnız diziyi gösterir."),
  q("1-SE kuralı neyi önerir?", ["En düşük hatanın bir standart hata içindeki en basit ağacı seçmeyi", "Hep en derin ağacı seçmeyi", "Bir hata payı eklemeyi", "Standart sapmayla ölçeklemeyi"], 0, "Doğrulama tahminleri gürültülüdür; Occam ilkesi."),
  q("Kaçan arıza yanlış alarmın 5 katı pahalıysa hangisi ucuzdur (ağırlıksız 36 kaçan + 2 alarm, ağırlıklı 8 kaçan + 97 alarm)?", ["Ağırlıklı: 137'ye karşı 182", "Ağırlıksız: 182'ye karşı 137", "Eşittir", "Ağırlıklı: 257"], 0, "36×5+2 = 182; 8×5+97 = 137."),
  q("Beden ağacında Kilo'nun önemi kaçtır?", ["0,521", "0,479", "0,340", "0,6528"], 0, "0,340 ÷ 0,6528; Boy 0,479, Cinsiyet 0."),
  q("Permütasyon önemi nasıl hesaplanır?", ["Değerler karıştırılır, doğruluk düşüşüne bakılır", "Gini azalmaları toplanır", "Sütun silinip eğitim tekrarlanır", "Korelasyon alınır"], 0, "Breiman 2001; doğrulama veya OOB verisinde hesaplanabilir."),
  q("Oylamada her modelin doğruluğu %50'nin altındaysa ne olur?", ["Oylama işi kötüleştirir", "Doğruluk 1'e gider", "Değişmez", "Modeller otomatik düzelir"], 0, "Condorcet: p < 0,5 ise 0'a yaklaşır."),
  q("Rastgele ormanda 5 sütun ne zaman seçilir (30 öznitelik)?", ["Her düğümde yeniden", "Ağaç başına bir kez", "Orman başına bir kez", "Yalnız kökte"], 0, "Aynı ağacın farklı düğümleri farklı sütunlara bakar."),
  q("Boosting örneğinde 2. ağaç neyi tahmin eder?", ["Birinci ağacın artıklarını", "Fiyatı", "Sınıfı", "m²'yi"], 0, "Öznitelik m², hedef artıktır; SSE 5,314 → 1,776."),
  q("10 ev ağacında 5–7. evlerin artıkları neden artıdır?", ["1. ağaç o evlere eksik (3,03) demiştir", "Evler pahalanmıştır", "m² negatiftir", "2. ağaç hatalıdır"], 0, "Artık = gerçek − tahmin; 3,8–4,2 > 3,03."),
]
