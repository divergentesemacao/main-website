function Menu(){
    return(
      <nav className="fixed w-full bg-purple-900 dark:bg-purple-950 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-gray-100 font-bold text-lg">Divergentes em Ação!</a>
          <details className="md:hidden">
            <summary className="block">
              <div className="block h-6 w-6">
                <div className="w-full h-1 bg-white mb-1 rounded"></div>
                <div className="w-full h-1 bg-white mb-1 rounded"></div>
                <div className="w-full h-1 bg-white rounded"></div>
              </div>
            </summary>
            <div className="submenu bg-purple-800 rounded-bl-xl">
              <ul id="submenu">
                <li><a href="#projeto" className="block mb-8 mt-4 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">Projeto</a></li>
                <li><a href="#intro" className="block mb-8 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">Sobre o TDAH</a></li>
                <li><a href="#lti" className="block mb-8 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">Profissional de TI</a></li>
                <li><a href="#lrh" className="block mb-8 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">Os Recursos Humanos</a></li>
                <li><a href="#lgestao" className="block mb-8 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">A Gestão Empresarial</a></li>
                <li><a href="#creditos" className="block mb-8 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">A Equipe</a></li>
                <li><a href="#contato" className="block mb-8 pl-3 border-l-2 border-purple-600 text-gray-100 hover:border-white ease-linear duration-200">Contato</a></li>
                <li className="py-1">
                  <button id="theme-toggle" className="mb-2 border-none rounded-lg border-transparent bg-gray-800 text-gray-200 hover:bg-gray-950 dark:hover:bg-white dark:bg-gray-300 dark:text-gray-900 transition-colors ease-linear duration-900 px-4 py-1">
                    Escuro
                  </button>
                </li>
              </ul>
            </div>
          </details>
          <ul className="hidden md:flex space-x-4">
            <li className="pt-2"><a href="#projeto" className="pt-2 border-t-2 border-transparent text-gray-100 hover:border-white ease-linear duration-200">Projeto</a></li>
            <li className="pt-2"><a href="#intro" className="pt-2 border-t-2 border-transparent text-gray-100 hover:border-white ease-linear duration-200">Sobre o TDAH</a></li>
            <li className="pt-2"><a href="#creditos" className="pt-2 border-t-2 border-transparent text-gray-100 hover:border-white ease-linear duration-200">A Equipe</a></li>
            <li className="py-2"><a href="#contato" className="pt-2 border-t-2 border-transparent text-gray-100 hover:border-white ease-linear duration-200">Contato</a></li>
            <li className="py-1">
              <button id="theme-toggle2" className="border-none rounded-lg border-transparent bg-gray-800 text-gray-200 hover:bg-gray-950 dark:hover:bg-white dark:bg-gray-300 dark:text-gray-900 transition-colors ease-linear duration-900 px-4 py-1">
                Escuro
              </button>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export { Menu };