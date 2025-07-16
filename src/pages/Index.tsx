import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Icon name="Anchor" size={64} className="mx-auto mb-4 text-white/90" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Роскошные<br />
            <span className="text-sky-200">Яхт-туры</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Откройте для себя незабываемые морские приключения в окружении роскоши и комфорта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-sky-50 px-8 py-3 text-lg font-semibold">
              Забронировать тур
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Смотреть каталог
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Icon name="Sailboat" size={32} className="text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
          <Icon name="Waves" size={40} className="text-white/30" />
        </div>
      </section>

      {/* Возможности */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Возможности</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем уникальные возможности для незабываемого отдыха на воде
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-sky-50">
              <CardHeader>
                <div className="mb-4">
                  <Icon name="Crown" size={48} className="mx-auto text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Отдохните в роскоши</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Премиальные яхты с роскошными каютами и панорамными видами на море
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="mb-4">
                  <Icon name="MapPin" size={48} className="mx-auto text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Индивидуальные маршруты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Персональные маршруты, созданные специально для ваших желаний и предпочтений
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-sky-50">
              <CardHeader>
                <div className="mb-4">
                  <Icon name="Package" size={48} className="mx-auto text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Всё включено</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  Питание, напитки, развлечения и обслуживание – всё уже включено в стоимость
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Что вы получите */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что вы получите</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Каждый тур – это уникальное путешествие в мир морских приключений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <Icon name="Compass" size={48} className="mx-auto text-sky-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Исследуйте захватывающие места</h3>
              <p className="text-blue-100">Откройте для себя самые красивые морские локации</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Icon name="Map" size={48} className="mx-auto text-sky-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Скрытые морские уголки</h3>
              <p className="text-blue-100">Посетите места, недоступные для обычных туристов</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Icon name="Mountain" size={48} className="mx-auto text-sky-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Секретные острова</h3>
              <p className="text-blue-100">Национальные парки и заповедные острова</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <Icon name="ChefHat" size={48} className="mx-auto text-sky-200" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гастрономические впечатления</h3>
              <p className="text-blue-100">Свежие морепродукты и изысканная кухня</p>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Преимущества</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Почувствуйте разницу в качестве и сервисе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Опытный экипаж</h3>
              <p className="text-gray-600">Профессиональные капитаны с многолетним опытом</p>
            </div>

            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Route" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Индивидуальные маршруты</h3>
              <p className="text-gray-600">Персональные программы под ваши интересы</p>
            </div>

            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Высокие стандарты безопасности</h3>
              <p className="text-gray-600">Современное оборудование и сертифицированные яхты</p>
            </div>

            <div className="text-center group">
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name="Bed" size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Комфортабельное размещение</h3>
              <p className="text-gray-600">Роскошные каюты с панорамными окнами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Кейсы */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Кейсы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших успешных яхт-туров
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Icon name="Sailboat" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Средиземноморье</CardTitle>
                <CardDescription className="text-gray-600">
                  7 дней по лазурному побережью
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Роскошный тур по островам Средиземного моря с посещением скрытых бухт и древних городов.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                <Icon name="Waves" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Карибское море</CardTitle>
                <CardDescription className="text-gray-600">
                  10 дней среди тропических островов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Экзотическое путешествие по Карибским островам с дайвингом и исследованием коралловых рифов.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Icon name="Mountain" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Норвежские фьорды</CardTitle>
                <CardDescription className="text-gray-600">
                  5 дней среди величественных фьордов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Незабываемое путешествие по норвежским фьордам с наблюдением за северным сиянием.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы к незабываемому приключению?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас и мы подберём идеальный яхт-тур для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-sky-50 px-8 py-3 text-lg font-semibold">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Получить каталог
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;