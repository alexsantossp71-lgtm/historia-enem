/**
 * lessonList.js
 * Redesigned for maximum visual impact. Every card features a vibrant image.
 */
window.renderLessonList = async function(appInstance) {
  try {
    const resp = await fetch('content/data/lessonsIndex.json');
    if (!resp.ok) throw new Error('Failed to load lessons index');
    const allLessons = await resp.json();
    
    const lessons = allLessons.filter(l => l.category !== 'Outras Matérias');
    const brasilLessons = lessons.filter(l => l.category === 'História do Brasil');
    const geralLessons = lessons.filter(l => l.category === 'História Geral');

    const container = document.getElementById('lesson-list');
    if (!container) return;
    
    // Helper to render a card
    const renderCard = (l) => `
      <div class="glass-card flex flex-col h-full group cursor-pointer border border-white/40 p-0 overflow-hidden relative shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-3xl" onclick="${appInstance}.load('${l.id}')">
        <!-- Image Header -->
        <div class="h-52 relative overflow-hidden bg-indigo-950/10">
          <img src="${l.thumbnail}" alt="${l.title}" class="absolute inset-0 w-full h-full object-cover brightness-[1.1] group-hover:scale-110 group-hover:brightness-125 transition-all duration-1000">
          
          <!-- Premium Overlay (Lighter to show the image) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          
          <!-- Period Badge over Image -->
          <div class="absolute top-4 left-4">
             <span class="bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">${l.period}</span>
          </div>

          <!-- Themed Icon/Symbol (Replaces the paper icon) -->
          <div class="absolute bottom-4 right-4 bg-white/10 backdrop-blur-lg border border-white/20 p-2 rounded-xl shadow-2xl group-hover:bg-emerald-500/20 transition-colors">
            <i class="fas fa-landmark text-white text-lg"></i>
          </div>
        </div>
        
        <!-- Content Body -->
        <div class="p-8 flex flex-col flex-grow bg-white/80 backdrop-blur-md">
          <h3 class="text-xl font-extrabold outfit text-indigo-950 mb-3 group-hover:text-emerald-700 transition-colors leading-tight line-clamp-3">
             ${l.title}
          </h3>
          
          <!-- Analytics/Tags Row -->
          <div class="flex flex-wrap gap-2 mb-6">
            ${l.tags.slice(0, 2).map(tag => `
              <span class="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-tighter border border-emerald-100">${tag}</span>
            `).join('')}
          </div>
          
          <!-- Bottom Row -->
          <div class="mt-auto flex items-center justify-between pt-5 border-t border-gray-100">
            <div class="flex items-center gap-2">
               <div class="flex text-amber-400 text-[10px]">
                 ${'★'.repeat(l.relevance)}${'☆'.repeat(5 - l.relevance)}
               </div>
               <span class="text-[8px] font-bold text-gray-400 uppercase tracking-widest">ENEM</span>
            </div>
            
            <div class="flex items-center text-xs font-black text-indigo-950 uppercase tracking-widest group-hover:text-emerald-600 transition-all">
              ESTUDAR <i class="fas fa-arrow-right ml-2 text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>
    `;

    // Helper to render a section
    const renderSection = (title, items) => {
        if (items.length === 0) return '';
        return `
          <div class="mb-20">
            <div class="flex items-center justify-between mb-12">
               <div class="flex items-center gap-6 flex-grow">
                  <h3 class="text-4xl font-black outfit text-indigo-950">${title}</h3>
                  <div class="h-[1px] flex-grow bg-gradient-to-r from-gray-200 to-transparent"></div>
               </div>
               <span class="ml-6 flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap">
                  <i class="fas fa-book-open"></i> ${items.length} Aulas disponíveis
               </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
               ${items.map(l => renderCard(l)).join('')}
            </div>
          </div>
        `;
    };

    container.innerHTML = `
      ${renderSection('⚓ História do Brasil', brasilLessons)}
      ${renderSection('🌍 História Geral', geralLessons)}
    `;

  } catch (e) {
    console.error('Lesson list error:', e);
  }
}
