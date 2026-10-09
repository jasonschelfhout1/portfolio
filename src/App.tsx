import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { dataScraper } from '@/projects'

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
      </main>
    </div>
  )
}

export default App
