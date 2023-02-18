import Logo from '../../assets/imgs/logo/logo.svg'
export function PageNotFound(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
      <img src={Logo} alt="Logo" className="w-32 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Ops, página não encontrada!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Desculpe, mas a página que você está tentando acessar não existe.
      </p>
      <a
        href="/"
        className="bg-orange-primary hover:bg-orange-500 text-white font-medium py-2 px-4 rounded"
      >
        Voltar para a página inicial
      </a>
    </div>
    )
}