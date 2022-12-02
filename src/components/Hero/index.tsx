import celular from './../../assets/imgs/ultil/telacelular.png'
export function Hero(){
    return(
    <main className="relative z-20 flex items-center overflow-hidden bg-gradient-to-b from-orange-tertiary to-orange-secundary">
        <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                <h1 className="flex flex-col text-6xl font-black leading-none text-orange-primary uppercase font-primary sm:text-6xl">
                    Bela Tagarela
                </h1>
                <p className="font-primary text-sm text-slate-900 sm:text-base pt-4">
                Comunicar é um direito é um humano básico. É por meio da comunicaçáo que os outros direitos humanos se realizam.
                </p>
                <p className="font-primary text-sm text-slate-900 sm:text-base pt-4">
                Esta página é o protótipo da Tese em Engenharia Biomédica
denominada: Proposta de Sistema para a
comunicativa de pessoas com deficiencia em contexto
Educacional.
                </p>
                
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                <img src={celular} className="max-w-xs m-auto md:max-w-sm"/>
            </div>
        </div>
    </main>

    )
}