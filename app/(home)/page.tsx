import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Hola! Soy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nahuel López
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Estudiante de <strong>Inteligencia Artificial y Ciencia de Datos</strong>
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Apasionado por los datos, el aprendizaje continuo y los deportes. 
              Especializado en Python, análisis exploratorio y visualización de datos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              📚 Ver Mis Prácticas
            </Link>
            <Link
              href="/docs"
              className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-200"
            >
              👤 Conóceme Mejor
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mis Especialidades
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <div className="text-4xl mb-4">🐍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Python & Pandas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Análisis exploratorio de datos, EDA y visualizaciones con Pandas, NumPy y Seaborn
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Visualización de Datos</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creación de dashboards informativos y gráficos avanzados con Matplotlib y Seaborn
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Análisis de Datos</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exploración de datasets, estadísticas descriptivas y detección de patrones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            📈 Proyectos Recientes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/docs/03-practica3"
              className="group block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🎬</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Análisis de Netflix
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                EDA completo del catálogo de Netflix con visualizaciones avanzadas y análisis de patrones temporales y geográficos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                  Pandas
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-sm rounded-full">
                  Seaborn
                </span>
              </div>
            </Link>
            
            <Link
              href="/docs/04-practica4"
              className="group block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🚕</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  NYC Taxi Analysis
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pipeline automatizado con Prefect para analizar 3+ millones de viajes de taxi de NYC con múltiples fuentes de datos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                  Prefect
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">
                  ETL
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-sm rounded-full">
                  Big Data
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Siempre estoy abierto a nuevas oportunidades y proyectos colaborativos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Conoce más sobre mí
            </Link>
            <Link
              href="/docs"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Ver todos mis proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
