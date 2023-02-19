import PPGEB from '../../../public/logo/ppgeb.png'
import NIATS from '../../../public/logo/niats.jpg'
import UFU from '../../../public/logo/ufu.jpg'
export function Additional(){
    return(
        <div className="container mx-auto px-6 py-12">
  <h2 className="text-bold  text-center text-4xl text-green-tertiary mb-6">Apoio</h2>
  <h2 className="text-base text-center  text-green-tertiary mb-6">Desenvolvido com  apoio de:</h2>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
    <div className="flex items-center  justify-center w-60 h-60 bg-white p-6 rounded-full shadow hover:shadow-lg">
  <a href="http://www.ppgeb.feelt.ufu.br/sites/all/modules/ufu_access/images/logo_ufu.svg" target="_blank" rel="noreferrer">
    <img src={PPGEB} alt="Logo PPGEB" className="h-20" />
  </a>
</div>
      <div className="flex items-center  justify-center w-60 h-60 bg-white p-6 rounded-full shadow hover:shadow-lg">
        <a href="http://www.ppgeb.feelt.ufu.br/" target="_blank" rel="noreferrer">
          <img src={NIATS} alt="Logo PPGEB" className="h-20" />
        </a>
      </div>
      <div className="flex items-center  justify-center w-60 h-60 bg-white p-6 rounded-full shadow hover:shadow-lg">
        <a href="http://www.niats.feelt.ufu.br/inicio" target="_blank" rel="noreferrer">
          <img src={UFU} alt="Logo NIATS" className="h-20" />
        </a>
      </div>
    </div>
  </div>
</div>

    );
}