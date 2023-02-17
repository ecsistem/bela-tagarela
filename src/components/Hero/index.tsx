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
                    <h1 className="text-6xl font-semibold text-orange-primary lg:text-7xl">Bela tagarela </h1>
                    
                    <p className="mt-3 text-green-tertiary">Comunicar é um direito humano básico.<br/>
É por meio da comunicação que os outros direitos humanos se realizam.<br/>
Esta página é o protótipo da Tese em Engenharia Biomédica, denominada: Desenvolvimento e análise de usabilidade de um sistema multiplataforma de Comunicação Aumentativa e Alternativa.
</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-primary rounded-lg lg:w-auto hover:bg-orange-400 focus:outline-none focus:bg-orange-500">Download</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img src={celular} height={300} width={500} className="w-full h-full lg:max-w-3xl" />
            </div>
        </div>
    </div>

         <div className="container flex items-center py-6  flex-wrap justify-around text-center">
            <div className=" my-6">
                <img src={logo} className="max-w-xs "/>
            </div>
            <div className='w-[50%]'>
                <h1>teste</h1>
           <Accordion activeIndex={0} setActiveIndex={function (index: number): void {
                        throw new Error('Function not implemented.');
                    } }  />
            </div>
         </div>
    </main>
    )
}