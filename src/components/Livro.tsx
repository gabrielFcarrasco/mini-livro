// src/components/Livro.tsx
import { motion } from 'framer-motion';
import { livroData } from '../data/historia';

// Componente para animar os títulos suavemente
const Titulo = ({ children, subtitle }: { children: React.ReactNode, subtitle?: boolean }) => (
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className={`font-title text-center text-secondary-light mb-12 mt-24 ${subtitle ? 'text-3xl md:text-4xl italic' : 'text-5xl md:text-6xl font-bold tracking-wider'}`}
  >
    {children}
  </motion.h2>
);

// Componente para animar os parágrafos com efeito de fade in
const Paragrafo = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="font-body text-lg md:text-xl text-paper-dark leading-loose mb-8 text-justify"
  >
    {children}
  </motion.p>
);

export default function Livro() {
  return (
    <section className="relative min-h-screen bg-primary-dark py-20 px-6 md:px-0 overflow-hidden">
      
      {/* Camada de Partículas do Jardim Flutuando */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-secondary-light rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + 'vh',
              left: Math.random() * 100 + 'vw',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Container Principal da História */}
      <div className="relative z-10 max-w-2xl mx-auto pb-16">
        {livroData.map((capitulo) => (
          <div key={capitulo.id} className="mb-24">
            
            <Titulo subtitle={capitulo.ehSubtitulo}>
              {capitulo.titulo}
            </Titulo>

            {capitulo.paragrafos.map((texto, index) => (
              <Paragrafo key={`${capitulo.id}-p-${index}`}>
                {texto}
              </Paragrafo>
            ))}

            {/* Separador elegante no fim de cada capítulo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex justify-center mt-16 text-secondary-dark/50"
            >
              ❦   ❦   ❦
            </motion.div>
            
          </div>
        ))}

        {/* =========================================================
            TELA DE ENCERRAMENTO: FIM + DOWNLOAD DO EPUB
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="text-center mt-32 pt-16 border-t border-secondary-dark/20 flex flex-col items-center justify-center"
        >
          {/* Palavra FIM Estilizada */}
          <h1 className="font-title text-6xl md:text-8xl font-bold tracking-[0.3em] text-secondary-light mb-6 drop-shadow-lg pl-[0.3em]">
            FIM
          </h1>
          
          {/* Frase poética de encerramento */}
          <p className="font-body text-base md:text-lg text-paper-dark max-w-md mb-12 italic leading-relaxed">
            "E assim, o jardim continuou a florescer, dia após dia."
          </p>

          {/* Botão Nativo de Download do EPUB */}
          <a
            href="/Genesis.epub" // Aponta diretamente para o ficheiro na pasta public
            download="Genesis.epub" // Força o navegador a descarregar em vez de tentar abrir
            className="inline-flex items-center gap-3 font-sans font-medium uppercase tracking-[0.2em] px-8 py-4 border border-secondary-dark text-secondary-light bg-black/40 backdrop-blur-md hover:bg-secondary-light hover:text-primary-dark transition-all duration-500 rounded-sm shadow-xl cursor-pointer text-xs md:text-sm"
          >
            {/* Ícone de Download Elegante (Seta para baixo) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            baixar Livro Digital (.epub)
          </a>
        </motion.div>

      </div>
    </section>
  );
}