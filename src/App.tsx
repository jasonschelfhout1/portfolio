import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { dataScraper } from '@/projects'
import catPhoto from '../20261008_231550.jpg'
import personPhoto from '../IMG20250717144447.jpg'

const linkClassName =
  'rounded-sm text-sm underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring'

function App() {
  return (
    <div className="mx-auto min-h-svh w-full max-w-3xl px-6 sm:px-8">
      <header className="flex items-center justify-between py-6">
        <span className="text-lg font-semibold" aria-label="Jason Schelfhout">
          JS.
        </span>
        <a
          className={`${linkClassName} text-muted-foreground`}
          href="https://github.com/jasonschelfhout1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>

      <main className="py-8 sm:py-12">
        <Card aria-labelledby="datascraper-title">
          <CardHeader>
            <CardTitle>
              <h1 id="datascraper-title">{dataScraper.title}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground">
            <a
              className={linkClassName}
              href={dataScraper.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Website (planned deployment; opens in a new tab)"
            >
              Visit Website
            </a>
            <a
              className={linkClassName}
              href={dataScraper.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </CardContent>
        </Card>

        <section className="mt-12" aria-labelledby="favorite-people-title">
          <h2 id="favorite-people-title" className="text-base font-medium">
            My two favorite people in the world
          </h2>
          <div className="mt-4 grid grid-cols-2 items-start gap-4">
            <img
              src={personPhoto}
              alt="A smiling person holding a large Stitch plush toy"
              className="h-auto w-full rounded-lg"
              width={983}
              height={1311}
              loading="lazy"
              decoding="async"
            />
            <img
              src={catPhoto}
              alt="A black and white cat looking at the camera"
              className="h-auto w-full rounded-lg"
              width={983}
              height={1311}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
