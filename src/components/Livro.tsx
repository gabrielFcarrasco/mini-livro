// src/components/Livro.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { livroData } from '../data/historia';

// Animação de transição das páginas (Efeito de folhear lateral)
const pageVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 300 : -300,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -300 : 300,
    scale: 0.98,
    transition: { duration: 0.6, ease: "easeInOut" }
  })
};

export default function Livro() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = Avançar, -1 = Recuar

  // Total de páginas: capítulos do banco de dados + a página do FIM
  const totalPages = livroData.length + 1;
  const ehUltimaPagina = page === totalPages - 1;

  // Garante que o ecrã volta ao topo sempre que mudamos de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const avancarPagina = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage(page + 1);
    }
  };

  const recuarPagina = () => {
    if (page > 0) {
      setDirection(-1);
      setPage(page - 1);
    }
  };

  return (
    <section className="relative min-h-screen bg-primary-dark text-paper-light flex flex-col justify-between overflow-hidden">
      
      {/* 1. Partículas mágicas sSubtis no Fundo */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-secondary-light rounded-full w-[2px] h-[2px]"
            style={{
              top: Math.random() * 100 + 'vh',
              left: Math.random() * 100 + 'vw',
            }}
          />
        ))}
      </div>

      {/* 2. Área Principal do Conteúdo (Livro) */}
      <div className="relative z-10 flex-grow w-full max-w-2xl mx-auto px-6 pt-16 pb-24 flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          
          {!ehUltimaPagina ? (
            // ================= PÁGINAS DA HISTÓRIA =================
            <motion.div
              key={livroData[page].id}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col min-h-[60vh] justify-center"
            >
              {/* Título do Capítulo */}
              <h2 className={`font-title text-center text-secondary-light mb-10 ${livroData[page].ehSubtitulo ? 'text-3xl md:text-4xl italic' : 'text-5xl md:text-6xl font-bold tracking-wider'}`}>
                {livroData[page].titulo}
              </h2>

             {/* Parágrafos do Capítulo Atual com Imagens Intercaladas */}
              <div className="space-y-6">
                {livroData[page].paragrafos.map((texto, index) => (
                  <div key={index} className="space-y-6">
                    <p className="font-body text-lg md:text-xl text-paper-dark leading-relaxed text-justify first-letter:font-title">
                      {texto}
                    </p>

                    {/* MÁGICA: Se houver imagem e o índice bater com a posição, renderiza a imagem */}
                    {livroData[page].imagem && livroData[page].imagem?.posicaoDepoisDoParagrafo === index && (
                      <div className="w-full flex justify-center py-6 md:py-10">
                        <img
                          src={livroData[page].imagem.url}
                          alt={`Ilustração do ${livroData[page].titulo}`}
                          className="max-w-full h-auto mix-blend-multiply"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            // ================= PÁGINA FINAL (FIM) =================
            <motion.div
              key="tela-fim"
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full text-center py-12 flex flex-col items-center justify-center min-h-[60vh]"
            >
              <h1 className="font-title text-6xl md:text-8xl font-bold tracking-[0.3em] text-secondary-light mb-6 pl-[0.3em] drop-shadow-md">
                FIM
              </h1>
              
              <p className="font-body text-base md:text-lg text-paper-dark max-w-md mb-12 italic leading-relaxed">
                "E assim, o jardim continuou a florescer, dia após dia."
              </p>

              <a
                href="/public/Gênesis - O Início Da Nossa História.epub"
                download="Gênesis - O Início Da Nossa História.epub"
                className="inline-flex items-center gap-3 font-sans font-medium uppercase tracking-[0.2em] px-8 py-4 border border-secondary-dark text-secondary-light bg-black/40 backdrop-blur-md hover:bg-secondary-light hover:text-primary-dark transition-all duration-500 rounded-sm shadow-xl cursor-pointer text-xs md:text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Baixar Livro Digital (.epub)
              </a>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 3. Rodapé Estilizado com Navegação e Paginação */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-6 pb-8 flex items-center justify-between border-t border-secondary-dark/10 pt-4 font-sans text-xs tracking-widest uppercase text-secondary-dark/60 select-none">
        
        {/* Botão Recuar */}
        <button
          onClick={recuarPagina}
          disabled={page === 0}
          className={`cursor-pointer transition-all duration-300 flex items-center gap-2 hover:text-secondary-light ${page === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          ← Anterior
        </button>

        {/* Indicador de Páginas Estilo Livro (Ex: 1 / 7) */}
        <span className="font-medium text-center">
          {page + 1} de {totalPages}
        </span>

        {/* Botão Avançar */}
        <button
          onClick={avancarPagina}
          disabled={ehUltimaPagina}
          className={`cursor-pointer transition-all duration-300 flex items-center gap-2 hover:text-secondary-light ${ehUltimaPagina ? 'opacity-0 pointer-events-none' : ''}`}
        >
          Seguinte →
        </button>
      </div>

    </section>
  );
}