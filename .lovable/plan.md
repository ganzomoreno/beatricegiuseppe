
# Cambiamento Font per i Nomi degli Sposi

## Obiettivo
Sostituire il font "Great Vibes" (corsivo informale) con un font Serif elegante e raffinato per i nomi "Beatrice & Giuseppe" e altri elementi decorativi.

## Font Proposto
**Playfair Display** - Un font serif sofisticato con:
- Contrasto alto tra tratti spessi e sottili
- Aspetto editoriale e lussuoso
- Perfetto per titoli di matrimoni eleganti
- Disponibile su Google Fonts

## Modifiche da Effettuare

### 1. File: `src/index.css`
- Aggiornare l'import di Google Fonts per includere Playfair Display
- Modificare la variabile `--font-script` in `--font-display` con Playfair Display
- Mantenere Great Vibes come opzione secondaria per piccoli dettagli decorativi

### 2. File: `tailwind.config.ts`
- Aggiornare la famiglia font `script` con Playfair Display
- Aggiungere eventualmente una nuova classe `display` per maggiore flessibilità

### 3. Componenti da Aggiornare
I seguenti file usano `font-script` per i nomi e dovranno beneficiare del cambio:
- `HeroSection.tsx` - Nomi degli sposi e monogramma
- `OurStorySection.tsx` - Titolo sezione e citazione
- `Footer.tsx` - Monogramma e hashtag
- `RSVPSection.tsx` - Titolo
- `EventSection.tsx` - Titoli sezioni
- `LocationSection.tsx` - Titoli

## Risultato Atteso
I nomi "Beatrice & Giuseppe" appariranno in un font serif alto e raffinato, simile allo stile delle riviste di moda e degli inviti formali, invece del corsivo "handwritten" attuale.
