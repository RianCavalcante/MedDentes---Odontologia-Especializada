import React, { useState } from 'react';
import { NAV_ITEMS, SERVICES, TESTIMONIALS, CONTACT_INFO } from './constants';
import GeminiImage from './components/GeminiImage';
import SectionTitle from './components/SectionTitle';
import WhatsAppButton from './components/WhatsAppButton';
import { Menu, X, MapPin, Phone, Instagram, Star, ArrowRight, CheckCircle2, ShieldPlus, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="font-sans text-slate-800 antialiased bg-slate-50 selection:bg-blue-100 selection:text-[#3757A0]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-40 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3757A0] rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-blue-200 shadow-lg">M</div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-[#3757A0] leading-none tracking-tight">MedDentes</span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-1">Odontologia Especializada</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-[#3757A0] font-medium transition-colors text-sm uppercase tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3757A0] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#3757A0] p-2 hover:bg-blue-50 rounded-lg transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div
          className={`md:hidden fixed top-[72px] left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-slate-700 hover:text-[#3757A0] hover:pl-2 transition-all"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="mt-4 bg-[#3757A0] text-white py-3 rounded-lg text-center font-bold"
              onClick={closeMenu}
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/4 z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-[#3757A0] px-4 py-2 rounded-full text-sm font-semibold shadow-sm animate-fade-in-up">
              <MapPin size={16} /> 
              <span>Fortaleza e Eusébio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Seu sorriso merece <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3757A0] to-blue-400">o melhor cuidado.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Na MedDentes, unimos tecnologia e humanização. Atendimento particular e convênios com especialistas prontos para transformar sua autoestima.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3757A0] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Agendar Consulta <ArrowRight size={20} />
              </a>
              <a
                href="#servicos"
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
              <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                       <img src={`https://picsum.photos/seed/${i+50}/100/100`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                 ))}
              </div>
              <p>+2.000 sorrisos transformados</p>
            </div>
          </div>

          <div className="md:w-1/2 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white aspect-[4/3] transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
               <GeminiImage
                  prompt="Modern bright dental clinic interior, soft cinematic lighting, depth of field, minimalist design, blurred background, ultra realistic, professional aesthetic"
                  alt="Clínica MedDentes"
                  className="w-full h-full object-cover"
                  fallbackSrc="https://picsum.photos/800/600"
               />
               
               {/* Floating Card */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Agilidade no Atendimento</p>
                    <p className="text-xs text-slate-500">Horários flexíveis para você.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-28 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <GeminiImage
                prompt="Friendly male dentist doctor portrait, Dr Alan, warm smile, crossing arms, wearing white coat, clean modern clinic background, soft lighting, high end photography"
                alt="Dr. Alan da Ponte"
                className="rounded-2xl shadow-xl aspect-[3/4] object-cover max-w-sm mx-auto z-10 relative"
                fallbackSrc="https://picsum.photos/600/800"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20 max-w-[200px]">
                 <p className="text-[#3757A0] font-bold text-lg">Dr. Alan da Ponte</p>
                 <p className="text-slate-500 text-xs mt-1">CRO 8906 • EPAO 883</p>
                 <div className="w-10 h-1 bg-[#3757A0] mt-3 rounded-full"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <SectionTitle title="Sobre a MedDentes" subtitle="Excelência e dedicação em cada detalhe." centered={false} />
              
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                A MedDentes não é apenas uma clínica, é um espaço de transformação. Com unidades em <strong className="text-[#3757A0]">Fortaleza e Eusébio</strong>, nossa missão é oferecer odontologia de alta performance com um toque humano.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 {[
                    'Equipe Multidisciplinar',
                    'Tecnologia Digital',
                    'Ambiente Acolhedor',
                    'Biossegurança Rigorosa'
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                       <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                       <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                 ))}
              </div>

              <a href="#contato" className="text-[#3757A0] font-bold hover:underline inline-flex items-center gap-2">
                 Conheça nossa estrutura <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Especialidades"
            subtitle="Tratamentos personalizados para a sua necessidade."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full overflow-hidden group">
                <div className="h-56 overflow-hidden relative">
                   <GeminiImage
                     prompt={service.imagePrompt}
                     alt={service.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-[#3757A0] shadow-md">
                      {service.icon}
                   </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#3757A0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-50">
                     <span className="text-xs font-bold text-[#3757A0] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                        Saiba mais <ArrowRight size={12} />
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Convenios Banner */}
          <div className="mt-20 bg-[#3757A0] rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="flex items-center gap-6 flex-col md:flex-row">
                   <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
                     <ShieldPlus size={48} className="text-white" />
                   </div>
                   <div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Aceitamos Convênios</h3>
                     <p className="text-blue-100 text-lg max-w-lg">Cuidar da sua saúde bucal nunca foi tão acessível. Consulte a cobertura do seu plano.</p>
                   </div>
                </div>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá, gostaria de saber quais convênios a MedDentes aceita.`}
                  className="bg-white text-[#3757A0] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
                >
                  Consultar Planos
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Depoimentos" subtitle="O carinho de quem confia na MedDentes." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#3757A0] text-white flex items-center justify-center font-bold text-xl shadow-md">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <span className="text-xs text-[#3757A0] font-medium bg-blue-50 px-2 py-0.5 rounded-full">Paciente Verificado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Fale Conosco" subtitle="Estamos prontos para te receber." />
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 p-10 bg-[#3757A0] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Informações de Contato</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Unidades</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">Fortaleza e Eusébio, Ceará</p>
                    <a href={CONTACT_INFO.addressLink} target="_blank" rel="noreferrer" className="text-white underline text-xs mt-2 inline-block hover:text-blue-200">Ver no mapa</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Atendimento</h4>
                    <p className="text-blue-100">{CONTACT_INFO.phone}</p>
                    <p className="text-blue-100 text-sm opacity-70 mt-1">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/90 mb-1">Siga-nos</h4>
                    <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-blue-100 hover:text-white transition-colors">
                      {CONTACT_INFO.instagram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                 <p className="text-sm text-blue-200">Precisa de agilidade?</p>
                 <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="mt-3 w-full bg-white text-[#3757A0] py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="md:w-3/5 relative min-h-[400px] bg-slate-200">
               <div className="absolute inset-0 bg-cover bg-center grayscale opacity-80" style={{backgroundImage: "url('https://static.maps.cne.uol.com.br/images/google-maps.png')"}}></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={CONTACT_INFO.addressLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white text-slate-800 px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 border border-slate-100"
                  >
                    <MapPin size={24} className="text-[#3757A0]" />
                    <span>Abrir Localização</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
             <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">MedDentes</h3>
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                   Referência em odontologia especializada em Fortaleza e Eusébio. Tecnologia de ponta e atendimento humanizado para o seu sorriso.
                </p>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3757A0] hover:text-white transition-colors cursor-pointer">
                      <Instagram size={20} />
                   </div>
                </div>
             </div>
             
             <div>
                <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
                <ul className="space-y-3 text-sm">
                   {NAV_ITEMS.map(item => (
                      <li key={item.label}><a href={item.href} className="hover:text-white transition-colors">{item.label}</a></li>
                   ))}
                </ul>
             </div>

             <div>
                <h4 className="text-white font-bold mb-6">Legal</h4>
                <ul className="space-y-3 text-sm">
                   <li><span className="text-slate-500">Resp. Técnico:</span> Dr. Alan da Ponte</li>
                   <li>CRO 8906 | EPAO 883</li>
                   <li className="pt-4"><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                </ul>
             </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} MedDentes Odontologia Especializada.</p>
            <p className="flex items-center gap-1">Feito com 💙 para seu sorriso.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;