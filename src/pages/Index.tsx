import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={24} />
              <span className="text-xl font-bold text-primary">HELLCAT</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">ГЛАВНАЯ</a>
              <a href="#specs" className="hover:text-primary transition-colors">ХАРАКТЕРИСТИКИ</a>
              <a href="#gallery" className="hover:text-primary transition-colors">ГАЛЕРЕЯ</a>
              <a href="#tuning" className="hover:text-primary transition-colors">ТЮНИНГ</a>
              <a href="#history" className="hover:text-primary transition-colors">ИСТОРИЯ</a>
            </div>
            <Button variant="outline" className="hidden md:block">
              <Icon name="Play" size={16} className="mr-2" />
              ВИДЕО
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
        <img 
          src="/img/c654299d-b8f1-4151-b223-13757b3ad8a1.jpg" 
          alt="Dodge Challenger SRT Hellcat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground text-lg px-6 py-2">
            707 HP SUPERCHARGED
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            DODGE<br />
            <span className="text-primary">HELLCAT</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            ЧИСТАЯ МОЩЬ. АГРЕССИВНЫЙ ДИЗАЙН. ЛЕГЕНДАРНАЯ ПРОИЗВОДИТЕЛЬНОСТЬ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 text-lg">
              <Icon name="Zap" size={20} className="mr-2" />
              ХАРАКТЕРИСТИКИ
            </Button>
            <Button size="lg" variant="outline" className="font-bold py-4 px-8 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              СЛУШАТЬ ЗВУК
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">707</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide">ЛОШАДИНЫХ СИЛ</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">6.2</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide">ЛИТРА V8</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">3.6</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide">СЕК ДО 100</div>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">328</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide">КМ/Ч МАКС</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 animate-slide-up">
            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
          </h2>
          
          <Tabs defaultValue="engine" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="engine" className="text-xs md:text-sm">ДВИГАТЕЛЬ</TabsTrigger>
              <TabsTrigger value="performance" className="text-xs md:text-sm">ДИНАМИКА</TabsTrigger>
              <TabsTrigger value="dimensions" className="text-xs md:text-sm">РАЗМЕРЫ</TabsTrigger>
              <TabsTrigger value="features" className="text-xs md:text-sm">ОПЦИИ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="engine" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Icon name="Zap" className="text-primary mr-3" size={32} />
                      <h3 className="text-2xl font-bold">SUPERCHARGED HEMI V8</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Объём двигателя:</span>
                        <span className="font-bold text-primary">6.2 л</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Мощность:</span>
                        <span className="font-bold text-primary">707 л.с.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Крутящий момент:</span>
                        <span className="font-bold text-primary">881 Н⋅м</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Наддув:</span>
                        <span className="font-bold text-primary">Supercharger</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <img 
                      src="/img/06d37e9a-1aab-45be-a637-f398b266fe15.jpg" 
                      alt="HEMI V8 Engine"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-muted-foreground">
                      Supercharged 6.2L HEMI® V8 SRT Hellcat engine — самый мощный серийный V8 двигатель
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <Icon name="Timer" className="text-primary mx-auto mb-4" size={48} />
                    <h4 className="text-xl font-bold mb-2">РАЗГОН</h4>
                    <div className="text-3xl font-bold text-primary mb-2">3.6</div>
                    <p className="text-sm text-muted-foreground">секунд до 100 км/ч</p>
                    <Progress value={85} className="mt-4" />
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <Icon name="Gauge" className="text-primary mx-auto mb-4" size={48} />
                    <h4 className="text-xl font-bold mb-2">МАКСИМАЛЬНАЯ СКОРОСТЬ</h4>
                    <div className="text-3xl font-bold text-primary mb-2">328</div>
                    <p className="text-sm text-muted-foreground">км/ч</p>
                    <Progress value={95} className="mt-4" />
                  </CardContent>
                </Card>
                
                <Card className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <Icon name="Target" className="text-primary mx-auto mb-4" size={48} />
                    <h4 className="text-xl font-bold mb-2">1/4 МИЛИ</h4>
                    <div className="text-3xl font-bold text-primary mb-2">11.5</div>
                    <p className="text-sm text-muted-foreground">секунд</p>
                    <Progress value={90} className="mt-4" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dimensions">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">ГАБАРИТЫ</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">5084</div>
                      <div className="text-sm text-muted-foreground">мм длина</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">1923</div>
                      <div className="text-sm text-muted-foreground">мм ширина</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">1448</div>
                      <div className="text-sm text-muted-foreground">мм высота</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2946</div>
                      <div className="text-sm text-muted-foreground">мм база</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: "Settings", title: "LAUNCH CONTROL", desc: "Система старта" },
                  { icon: "Shield", title: "LINE LOCK", desc: "Блокировка передних колёс" },
                  { icon: "Thermometer", title: "SRT DRIVE MODES", desc: "7 режимов вождения" },
                  { icon: "Speedometer", title: "PERFORMANCE PAGES", desc: "Мониторинг производительности" },
                  { icon: "Volume2", title: "ACTIVE EXHAUST", desc: "Активная выхлопная система" },
                  { icon: "Cpu", title: "SRT TRACK APPS", desc: "Трековые приложения" }
                ].map((feature, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                    <CardContent className="p-6 text-center">
                      <Icon name={feature.icon as any} className="text-primary mx-auto mb-4" size={40} />
                      <h4 className="font-bold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sound Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ЗВУК <span className="text-primary">МОЩНОСТИ</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Услышьте рёв supercharged V8 — звук, который заставляет сердце биться быстрее
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <Icon name="Volume2" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">ЗАПУСК ДВИГАТЕЛЯ</h3>
                <p className="text-muted-foreground mb-4">Холодный старт Hellcat</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Play" size={16} className="mr-2" />
                  ВОСПРОИЗВЕСТИ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <Icon name="Zap" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">РАЗГОН</h3>
                <p className="text-muted-foreground mb-4">Full throttle acceleration</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Play" size={16} className="mr-2" />
                  ВОСПРОИЗВЕСТИ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <Icon name="Flame" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">ВЫХЛОП</h3>
                <p className="text-muted-foreground mb-4">Active exhaust system</p>
                <Button variant="outline" className="w-full">
                  <Icon name="Play" size={16} className="mr-2" />
                  ВОСПРОИЗВЕСТИ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ГОТОВ К <span className="text-primary">HELLCAT</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Испытай мощь 707 лошадиных сил. Запланируй тест-драйв уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              ТЕСТ-ДРАЙВ
            </Button>
            <Button size="lg" variant="outline" className="font-bold py-4 px-8 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              СВЯЗАТЬСЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-primary" size={24} />
                <span className="text-xl font-bold text-primary">HELLCAT</span>
              </div>
              <p className="text-muted-foreground">
                Официальный сайт, посвящённый легендарному Dodge Challenger SRT Hellcat
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">РАЗДЕЛЫ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#specs" className="hover:text-primary transition-colors">Характеристики</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Галерея</a></li>
                <li><a href="#tuning" className="hover:text-primary transition-colors">Тюнинг</a></li>
                <li><a href="#history" className="hover:text-primary transition-colors">История</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">ИНФОРМАЦИЯ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Обзоры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Видео</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">События</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">КОНТАКТЫ</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (xxx) xxx-xx-xx</p>
                <p></p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Instagram" className="hover:text-primary cursor-pointer transition-colors" size={20} />
                  <Icon name="Youtube" className="hover:text-primary cursor-pointer transition-colors" size={20} />
                  <Icon name="Facebook" className="hover:text-primary cursor-pointer transition-colors" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Hellcat Fan Site. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}