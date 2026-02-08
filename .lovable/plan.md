

# Fix Completo: Font e Hero Section

## Problema
L'utente non vede il risultato atteso nonostante il codice sembri corretto. Possibili cause: conflitti CSS, font non caricati, o specificita delle regole che sovrascrivono le classi.

## Azioni correttive

### 1. `src/index.css` - Riscrittura pulita della sezione font
- Spostare l'import Google Fonts PRIMA di tutto (riga 1, non dopo @tailwind)
- Assicurarsi che le classi `.font-script` usino `!important` per evitare che la regola `h1, h2, h3 { font-family: Cinzel }` sovrascriva Great Vibes sui titoli
- Rimuovere qualsiasi residuo di Pinyon Script, Cormorant Garamond, Lora, Playfair Display

### 2. `tailwind.config.ts` - Conferma configurazione
- Verificare che `script: ['Great Vibes', 'cursive']` e `serif: ['Cinzel', 'serif']` siano correttamente impostati (gia presenti, conferma)

### 3. `src/components/wedding/HeroSection.tsx` - Riscrittura completa
Riscrivere da zero per replicare fedelmente l'immagine di riferimento (save the date barocco):

**Layout verticale centrato su sfondo crema (nessuna immagine di sfondo):**

1. Cornice barocca con ornamenti angolari (opacita 60%, dimensioni generose)
2. Monogramma "B & G" - Great Vibes, piccolo, centrato in alto
3. Linea sottile decorativa
4. Nomi "Beatrice & Giuseppe" - Great Vibes, molto grande, colore primary
5. Sottotitolo - Cinzel uppercase, tracking largo, 3 righe: "Ci sposeremo davanti al mare..."
6. "SAVE THE DATE" - Cinzel bold, grande, uppercase, tracking largo
7. Data mista: "DICIOTTO" (Cinzel uppercase) + "luglio" (Great Vibes corsivo) + "DUEMILAVENTISEI" (Cinzel uppercase)
8. Luogo: "SANTA MARGHERITA LIGURE" - Cinzel uppercase tracking largo
9. Linea sottile
10. Countdown (Giorni / Ore / Min / Sec) in Cinzel
11. Bottone RSVP con bordo, Cinzel uppercase

**Dettagli tecnici importanti:**
- Usare `style={{ fontFamily: "'Great Vibes', cursive" }}` inline sui nomi per garantire che il font sia applicato correttamente, bypassando qualsiasi conflitto CSS con la regola h1/h2/h3
- Sfondo: classe `bg-background` (crema `hsl(30 25% 96%)`)
- Animazioni framer-motion mantenute per fade-in sequenziale
- Countdown live con setInterval

### 4. Verifica altri componenti
I font si propagano automaticamente tramite le classi utility. Nessuna modifica strutturale necessaria per:
- Navigation, EventSection, TimelineSection, RSVPSection, TravelSection, GiftSection, GallerySection, FAQSection, ContactsSection, Footer

## File modificati
- `src/index.css` (fix specificita font)
- `src/components/wedding/HeroSection.tsx` (riscrittura completa)

