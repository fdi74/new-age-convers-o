import BeforeAfterSlider from "./BeforeAfterSlider"; // Ajuste o caminho se necessário

// 1. Importação das fotos (garanta que os arquivos estejam na pasta src/assets)
import fotoAntes from "@/assets/WhatsApp Image 2026-03-05 at 10.02.26.jpeg";
import fotoDepois from "@/assets/WhatsApp Image 2026-03-05 at 10.02.28.jpeg";

const PeelingComparison = () => {
  return (
    <div className="w-full py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary">Resultado Real</h2>
        <p className="text-muted-foreground mt-2">
          Peeling Químico Profundo: Compare a renovação da textura e viço da pele.
        </p>
      </div>

      {/* 2. Aplicação do componente com as suas imagens */}
      <BeforeAfterSlider 
        beforeImage={fotoAntes} 
        afterImage={fotoDepois} 
        beforeLabel="Antes" 
        afterLabel="Depois" 
      />

      <div className="max-w-md mx-auto mt-6">
        <p className="text-xs text-center text-muted-foreground bg-secondary/30 py-2 rounded-full border border-border">
          ↔️ Deslize o cursor no centro da imagem para comparar
        </p>
      </div>
    </div>
  );
};

export default PeelingComparison;
