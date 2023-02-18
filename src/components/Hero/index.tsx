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
<h1 className="text-lg font-normal text-orange-primary text-center my-4">Faça donwload do nosso APP</h1>
                    <div className="flex w-full my-3 justify-center gap-4">
    <a href='https://play.google.com/store/apps/details?id=belatagarela.ta.caa&hl=pt&gl=US' className="bg-green-primary flex items-center text-white justify-center gap-x-3 text-sm sm:text-base   rounded-lg hover:bg-green-hover duration-300 transition-colors border px-8 py-2.5">
    <svg className="w-5 h-5 sm:h-6 sm:w-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" fill='#FFFFFF'/></svg>

        <span>PlayStore</span>
    </a>

    {/* <button className="bg-black rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
        <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8426 17.1449C20.5099 17.9135 20.1161 18.6211 19.6598 19.2715C19.0378 20.1583 18.5286 20.7721 18.1361 21.113C17.5277 21.6724 16.8759 21.959 16.1779 21.9753C15.6768 21.9753 15.0725 21.8327 14.3691 21.5434C13.6633 21.2555 13.0148 21.113 12.4217 21.113C11.7998 21.113 11.1327 21.2555 10.4193 21.5434C9.70469 21.8327 9.12904 21.9834 8.68892 21.9984C8.01957 22.0269 7.35239 21.7322 6.68644 21.113C6.26139 20.7422 5.72974 20.1067 5.09285 19.2063C4.40951 18.2449 3.84772 17.13 3.4076 15.8589C2.93624 14.486 2.69995 13.1565 2.69995 11.8694C2.69995 10.3951 3.01853 9.12345 3.65665 8.05784C4.15815 7.20191 4.82533 6.52672 5.66035 6.03105C6.49537 5.53539 7.39761 5.2828 8.36925 5.26664C8.9009 5.26664 9.59809 5.43109 10.4645 5.75429C11.3284 6.07858 11.8832 6.24303 12.1264 6.24303C12.3082 6.24303 12.9245 6.05074 13.9692 5.66738C14.9571 5.31186 15.7909 5.16466 16.474 5.22264C18.3249 5.37202 19.7155 6.10167 20.6402 7.41619C18.9849 8.4192 18.166 9.82403 18.1823 11.6262C18.1972 13.03 18.7065 14.1981 19.7073 15.1256C20.1609 15.5561 20.6674 15.8888 21.231 16.1251C21.1087 16.4795 20.9797 16.819 20.8426 17.1449ZM16.5975 0.440369C16.5975 1.54062 16.1956 2.56792 15.3944 3.51878C14.4275 4.64917 13.258 5.30236 11.9898 5.19929C11.9736 5.06729 11.9642 4.92837 11.9642 4.78239C11.9642 3.72615 12.424 2.59576 13.2406 1.67152C13.6483 1.20356 14.1667 0.814453 14.7955 0.504058C15.4229 0.198295 16.0163 0.0292007 16.5744 0.000244141C16.5907 0.147331 16.5975 0.294426 16.5975 0.440355V0.440369Z" fill="white"/>
        </svg>

        <span>AppStore</span>
    </button> */}
</div>
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
            <div className='w-[100%] lg:w-[50%]'>
                <h1>teste</h1>
           <Accordion activeIndex={0} setActiveIndex={function (index: number): void {
                        throw new Error('Function not implemented.');
                    } }  />
            </div>
         </div>
    </main>
    )
}