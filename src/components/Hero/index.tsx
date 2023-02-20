import Accordion from '../Accordion/';
import celular from './../../assets/imgs/ultil/telacelular.png'
import logo from './../../assets/imgs/logo/logo.svg'
export function Hero(){
    return(
    <main className="flex flex-col items-center">
       <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-6xl font-semibold text-orange-primary lg:text-7xl">Bela Tagarela </h1>
                    
                    <p className="mt-3 text-green-tertiary">Comunicar é um direito humano básico.
                    <p className="mt-1 text-green-tertiary">É por meio da comunicação que os outros direitos humanos se realizam.</p>
Esta página é o protótipo da Tese em Engenharia Biomédica, denominada: Desenvolvimento e análise de usabilidade de um sistema multiplataforma de Comunicação Aumentativa e Alternativa.
</p>
<h1 className="text-lg font-normal text-orange-primary text-center my-4">Faça donwload do nosso APP</h1>
                    <div className="flex w-full my-3 justify-center gap-4">
    <a href='https://play.google.com/store/apps/details?id=belatagarela.ta.caa&hl=pt&gl=US' className="bg-green-primary flex items-center text-white justify-center gap-x-3 text-sm sm:text-base   rounded-lg hover:bg-green-hover duration-300 transition-colors border px-8 py-2.5">
    <svg className="w-5 h-5 sm:h-6 sm:w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" fill='#FFFFFF'/></svg>

        <span>PlayStore</span>
    </a>
</div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img src={celular} height={300} width={500} className="w-full h-full lg:max-w-3xl" />
            </div>
        </div>
    </div>

         {/* <div className="container flex items-center py-6  flex-wrap justify-around text-center">
            <div className=" my-6">
                <img src={logo} className="max-w-xs "/>
            </div>
            <div className='w-[100%] lg:w-[50%]'>
                <h1>teste</h1>
           <Accordion activeIndex={0} setActiveIndex={function (index: number): void {
                        throw new Error('Function not implemented.');
                    } }  />
            </div>
         </div> */}
    </main>
    )
}