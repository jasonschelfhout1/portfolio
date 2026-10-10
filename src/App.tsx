import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { dataScraper } from '@/projects'
import catPhoto from '../20261008_231550.jpg'
import personPhoto from '../IMG20250717144447.jpg'

const linkClassName =
  'rounded-sm text-sm underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring'

const favorites = [
  { src: personPhoto, alt: 'Biebie smiling and holding a large Stitch plush toy', title: 'Biebie', caption: 'My favorite person, with a smile that lights up the room.', note: 'My little sunshine', number: '01' },
  { src: catPhoto, alt: 'Tommy, a black and white cat, looking at the camera', title: 'Fat ass potato sack Tommy', caption: 'It\'s fat. And a cat. It\'s a fat cat.', note: 'Asshole', number: '02' },
]

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const photoTrigger = useRef<HTMLButtonElement | null>(null)
  const selected = selectedPhoto === null ? null : favorites[selectedPhoto]

  return (
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
      <header className="flex items-center justify-between border-b border-border py-6 sm:py-8">
        <a href="#top" className="text-xl font-semibold tracking-tight" aria-label="Jason Schelfhout, back to top">JS<span className="text-primary">.</span></a>
        <a className="flex items-center gap-2 text-sm hover:text-primary" href="https://github.com/jasonschelfhout1" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </header>

      <main id="top" className="py-8 sm:py-12">
        <Card aria-labelledby="datascraper-title">
          <CardHeader>
            <CardTitle><h1 id="datascraper-title">{dataScraper.title}</h1></CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground">
            <a className={linkClassName} href={dataScraper.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Website (planned deployment; opens in a new tab)">Visit Website</a>
            <a className={linkClassName} href={dataScraper.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
          </CardContent>
        </Card>

        <section id="favorites" className="reveal mt-12 scroll-mt-8 border-t border-border pt-10" aria-labelledby="favorite-people-title">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-xs tracking-[0.18em] text-primary uppercase">My best parts</p>
              <h2 id="favorite-people-title" className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl">My two favorite people<br className="hidden sm:block" /> in the world</h2>
            </div>
            <span className="pt-8 font-serif text-4xl text-primary" aria-hidden="true">&#9825;</span>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {favorites.map((favorite, index) => (
              <figure key={favorite.src} className={index === 1 ? 'sm:mt-12' : ''}>
                <button type="button" onClick={event => { photoTrigger.current = event.currentTarget; setSelectedPhoto(index) }} className="group relative block w-full rounded-sm bg-card p-3 pb-12 text-left shadow-lg shadow-foreground/5 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-2" aria-label={`Enlarge photo: ${favorite.alt}`}>
                  <div className="overflow-hidden rounded-sm">
                    <img src={favorite.src} alt={favorite.alt} width={983} height={1311} className="aspect-[3/4] w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]" loading="lazy" decoding="async" />
                  </div>
                  <span className="absolute bottom-4 left-4 font-serif text-lg italic text-muted-foreground">{favorite.note}</span>
                  <span className="absolute bottom-4 right-4 text-primary" aria-hidden="true">&#9825;</span>
                </button>
                <figcaption className="mt-5 flex gap-3">
                  <span className="pt-1 text-xs text-primary">{favorite.number}</span>
                  <div><h3 className="font-serif text-2xl">{favorite.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{favorite.caption}</p></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

      </main>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-7 text-xs text-muted-foreground"><p>Built with html. Filled with love.</p></footer>

      <Dialog open={selectedPhoto !== null} onOpenChange={open => { if (!open) setSelectedPhoto(null) }}>
        <DialogContent className="max-h-[95svh] overflow-y-auto sm:max-w-xl" onCloseAutoFocus={event => { event.preventDefault(); photoTrigger.current?.focus() }}>
          <DialogTitle>{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.caption}</DialogDescription>
          {selected && <img src={selected.src} alt={selected.alt} className="max-h-[65svh] w-full rounded-md object-contain" />}
          <div className="flex justify-between gap-4"><Button variant="outline" onClick={() => setSelectedPhoto(value => value === 0 ? 1 : 0)}>Meet the other favorite</Button><span className="self-center text-xs text-muted-foreground">{selectedPhoto === null ? 0 : selectedPhoto + 1} / 2</span></div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App

