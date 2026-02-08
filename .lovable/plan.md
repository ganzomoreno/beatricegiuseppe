
# Restyling Font e Nuova Hero Section

## Panoramica
Sostituire tutti i font attuali (Pinyon Script, Cormorant Garamond, Lora) con solo **Great Vibes** e **Cinzel**, e ridisegnare completamente la Hero Section per replicare lo stile dell'immagine di riferimento (save the date barocco).

## Font System

| Ruolo | Font attuale | Nuovo font |
|-------|-------------|------------|
| Nomi sposi, hashtag, dettagli decorativi | Pinyon Script | **Great Vibes** (corsivo elegante) |
| Titoli, label, testo uppercase, body | Cormorant Garamond + Lora | **Cinzel** (serif maiuscolo classico) |

- `font-script` = Great Vibes (per nomi, monogramma, parole singole decorative)
- `font-serif` e `font-body` = Cinzel (per tutto il resto: titoli, sottotitoli, body, label, bottoni)

## Nuova Hero Section (ricalca l'immagine)
La hero diventa un layout centrato su sfondo crema (senza foto di sfondo), con:

1. **Cornice barocca** - Ornamenti angolari (asset gia presente) con opacita aumentata
2. **Monogramma "BG"** in alto - Great Vibes, piccolo, centrato
3. **Nomi "Beatrice & Giuseppe"** - Great Vibes, grande, colore primary
4. **Sottotitolo** - Cinzel uppercase con tracking largo: "Ci sposeremo davanti al mare..."
5. **"SAVE THE DATE"** - Cinzel bold, grande, uppercase, tracking largo
6. **Data** - Mix: "DICIOTTO" (Cinzel uppercase) + "*luglio*" (Great Vibes corsivo) + "DUEMILAVENTISEI" (Cinzel uppercase)
7. **Luogo** - "SANTA MARGHERITA LIGURE" in Cinzel uppercase tracking largo
8. **Countdown** - Sotto, in Cinzel, numeri + label
9. **CTA RSVP** - Bottone con bordo, Cinzel uppercase

Niente immagine di sfondo, niente overlay scuro. Sfondo pulito color crema/ivory come nell'immagine.

## File da modificare

### 1. `src/index.css`
- Cambiare import Google Fonts: solo Great Vibes + Cinzel (vari pesi)
- Aggiornare le variabili CSS: `--font-script: 'Great Vibes'`, `--font-serif: 'Cinzel'`, `--font-body: 'Cinzel'`
- Aggiornare le regole base h1/h2/h3 e body

### 2. `tailwind.config.ts`
- `script: ['Great Vibes', 'cursive']`
- `serif: ['Cinzel', 'serif']`
- `body: ['Cinzel', 'serif']`

### 3. `src/components/wedding/HeroSection.tsx` (riscrittura completa)
- Rimuovere immagine di sfondo e overlay
- Sfondo crema pieno (bg-background)
- Struttura verticale centrata che replica esattamente il layout dell'immagine
- Monogramma BG in Great Vibes in alto
- Nomi in Great Vibes grande
- Sottotitolo in Cinzel uppercase
- "SAVE THE DATE" in Cinzel bold grande
- Data con mix Great Vibes/Cinzel
- Location in Cinzel uppercase
- Countdown e CTA RSVP sotto

### 4. Tutti gli altri componenti
I componenti (Navigation, EventSection, TimelineSection, RSVPSection, TravelSection, GiftSection, GallerySection, FAQSection, ContactsSection, Footer) usano gia le classi `font-script`, `font-serif`, `font-body` -- quindi il cambio font si propaghera automaticamente. Nessuna modifica strutturale necessaria.

### 5. `src/components/wedding/Navigation.tsx`
- Il logo "B & G" usa gia `font-script`, diventa automaticamente Great Vibes

### 6. `src/components/wedding/Footer.tsx`
- "B & G" e "#BeatriceEGiuseppe2026" usano gia `font-script`, cambio automatico

## Dettagli tecnici

```text
Google Fonts import:
Great Vibes (400)
Cinzel (400, 500, 600, 700)
Cinzel Decorative (opzionale, per SAVE THE DATE)
```

La Hero Section non usera piu `hero-santamargherita.jpg` come sfondo. L'immagine resta nel progetto per eventuale uso futuro (es. Gallery).
