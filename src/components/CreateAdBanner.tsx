import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className="bg-[#2A2634] mt-8 self-stretch rounded-lg overflow-hidden">
      <div className="bg-nwl-gradient pt-1 self-stretch"></div>
      <div className="px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 mt-1 block">Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  )
}