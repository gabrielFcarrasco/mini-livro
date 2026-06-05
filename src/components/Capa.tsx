// src/components/Capa.tsx
import { motion } from 'framer-motion';
import capaImg from '../assets/capa-genesis.jpg';

export default function Capa({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-primary-dark flex flex-col items-center justify-end pb-12 md:pb-20">
      
      {/* 1. Truque de Cinema: Fundo desfocado para preencher as laterais no Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl pointer-events-none"
        style={{ backgroundImage: `url(${capaImg})` }}
      />

      {/* 2. Imagem principal (bg-contain garante que ela NUNCA seja cortada) */}
      <motion.div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url(${capaImg})` }}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* 3. Gradiente base para dar destaque ao botão */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent pointer-events-none z-10" />

      {/* 4. A Magia do Jardim (Partículas Flutuantes) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#FFF8E7] rounded-full shadow-[0_0_10px_#E9C46A]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* 5. O Botão (Com z-50 para ficar no topo de TUDO e garantir o clique) */}
      <div className="relative z-50 text-center px-6 pointer-events-auto">
        <motion.button 
          onClick={() => {
            console.log("Abrindo o livro Gênesis..."); // Mensagem de teste no console
            onOpen(); // Chama a função que troca de tela
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(233,196,106, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="font-sans font-bold uppercase tracking-[0.2em] px-10 py-4 border-2 border-secondary-light text-secondary-light bg-black/60 backdrop-blur-md hover:bg-secondary-light hover:text-primary-dark transition-all duration-500 cursor-pointer rounded-md shadow-lg"
        >
          Abrir Livro
        </motion.button>
      </div>

    </section>
  );
}