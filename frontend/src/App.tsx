import { Suspense } from 'react'
import { AppRouter } from './AppRouter'
import { Loader } from './components/Loader'

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen bg-base-100">
        <main>
          <AppRouter />
        </main>
      </div>
    </Suspense>
  )
}
