export function Additional(){
    return(
        <section className="bg-orange-secundary flex flex-col  justify-between px-6 py-4 mx-auto sm:flex-row">
        <div>
            <p className="font-primary">Tecnologias:</p>
            <p>React.js</p>
            <p>Tailwind</p>
        </div>
        <div>
            <p className="font-primary">Plataformas:</p>
            <p>Web</p>
            <p>Android</p>
        </div>
        <div className="flex">
            <p className="font-primary">Desenvolvimento com apoio de:</p>
            <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gPpAVXCfZrCT_8HUqGPSQX_RQgFwo4hw2PPaIoN88HV30Fi1mw2m-R6IVPi5pBIB4K_HlyWazZUag1nhLuAVEDBQNuv=w2862-h1822" width={20} height={20} alt="" />
        </div>
        </section>
    );
}