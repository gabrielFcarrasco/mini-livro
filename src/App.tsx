// src/App.tsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'; // Importamos o scroll suave
import Capa from './components/Capa';
import Livro from './components/Livro';

function App() {
  // Estado que controla se o usuário já clicou em "Abrir Livro"
  const [livroAberto, setLivroAberto] = useState(false);

  // useEffect para iniciar o scroll suave assim que o site carregar
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Deixa a rolagem bem suave e lenta, ideal para leitura
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpa a memória quando o componente for fechado
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-primary-dark">
      {/* AnimatePresence gerencia a transição de saída da Capa para o Livro */}
      <AnimatePresence mode="wait">
        {!livroAberto ? (
          <motion.div
            key="capa"
            exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 1.5 } }}
          >
            <Capa onOpen={() => setLivroAberto(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="livro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <Livro />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;