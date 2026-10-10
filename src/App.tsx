import { useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { dataScraper } from '@/projects'
import catPhoto from '../20261008_231550.jpg'
import personPhoto from '../IMG20250717144447.jpg'

const favorites = [
  { src: personPhoto, alt: 'Biebie smiling and holding a large Stitch plush toy', title: 'Biebie', caption: 'My favorite human. The kind of smile that makes everything better.', note: 'A little sunshine', number: '01' },
  { src: catPhoto, alt: 'Tommy, a black and white cat, looking at the camera', title: 'Tommy the fat potato sack', caption: 'Technically a cat. Absolutely counts as a person.', note: 'A little mischief', number: '02' },
]

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [love, setLove] = useState(0)
  const photoTrigger = useRef<HTMLButtonElement | null>(null)
  const selected = selectedPhoto === null ? null : favorites[selectedPhoto]

  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
      <header className="flex items-center justify-between border-b border-border py-6 sm:py-8">
        <a href="#top" className="text-xl font-semibold tracking-tight" aria-label="Jason Schelfhout, back to top">JS<span className="text-primary">.</span></a>
        <a className="flex items-center gap-2 text-sm hover:text-primary" href="https://github.com/jasonschelfhout1" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="size-4" aria-hidden="true" /></a>
      </header>

      <main id="top">
        <section className="reveal relative py-16 sm:py-24" aria-labelledby="intro-title">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">Jason Schelfhout / a little corner of the internet</p>
          <h1 id="intro-title" className="max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-7xl">Things I build.<br /><span className="italic text-primary">People I love.</span></h1>
          <div className="mt-7 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">A home for my projects, my favorite faces, and the little things that make life good.</p>
            <Button asChild variant="outline" className="rounded-full px-5"><a href="#favorites">Meet my favorites <ArrowDown aria-hidden="true" /></a></Button>
          </div>
          <span className="absolute right-6 top-20 hidden -rotate-12 font-serif text-8xl text-primary/15 sm:block" aria-hidden="true">&#9825;</span>
        </section>

        <section id="favorites" className="reveal scroll-mt-8 border-t border-border pt-10" aria-labelledby="favorite-people-title">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-xs tracking-[0.18em] text-primary uppercase">The best part</p>
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
          <div className="my-10 flex flex-col items-center gap-3 py-6 text-center">
            <Button variant="outline" className="h-10 rounded-full px-5" onClick={() => setLove(value => value + 1)}>
              <Heart key={love} className={love ? 'love-pop fill-primary text-primary' : 'text-primary'} aria-hidden="true" /> {love ? 'Send a little more love' : 'Send some love'}
            </Button>
            <p aria-live="polite" aria-atomic="true" className="min-h-5 text-xs text-muted-foreground">{love ? `${love} little ${love === 1 ? 'heart' : 'hearts'} sent. Consider this a virtual hug.` : 'For the two who make this corner feel like home.'}</p>
          </div>
        </section>

        <section id="projects" className="reveal border-t border-border py-10 sm:py-14" aria-labelledby="projects-title">
          <div className="mb-6 flex items-end justify-between"><div><p className="mb-3 text-xs tracking-[0.18em] text-primary uppercase">Made with curiosity</p><h2 id="projects-title" className="font-serif text-3xl">On my workbench.</h2></div><span className="text-xs text-muted-foreground">01 project</span></div>
          <Card aria-labelledby="datascraper-title">
            <CardHeader><CardTitle><h3 id="datascraper-title">{dataScraper.title}</h3></CardTitle></CardHeader>
            <CardContent className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">A project of mine. A little more of my world.</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="link"><a href={dataScraper.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Website (planned deployment; opens in a new tab)">Visit Website <ArrowUpRight aria-hidden="true" /></a></Button>
                <Button asChild variant="outline"><a href={dataScraper.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code <ArrowUpRight aria-hidden="true" /></a></Button>
              </div>
            </CardContent>
          </Card>
          <p className="mt-3 text-xs text-muted-foreground">Website deployment is planned. Source code is on GitHub.</p>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-7 text-xs text-muted-foreground"><p>Built with curiosity. Filled with love.</p><a href="#top" className="hover:text-primary">Back to top &#8593;</a></footer>

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

