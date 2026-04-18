import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Projects from './components/Projects'

function App() {
  return (
    <main className="relative min-h-screen bg-background text-primary antialiased overflow-x-hidden">
      {/* Global background texture */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage: "url('/assets/tech.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
        }}
      />
      {/* Page content sits above the background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Projects />
      </div>
    </main>
  )
}

export default App
