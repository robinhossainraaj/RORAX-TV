// RORAx-TV Homepage Interaction Engine
// Core functionality for importing lists, rendering quick-preview, and updating site stats.

document.addEventListener('DOMContentLoaded', () => {
  // Load playlist data first
  if (typeof window.loadPlaylistData === 'function') {
    window.loadPlaylistData();
  }

  // Define DOM queries
  const statsChannelCount = document.getElementById('stats-channels-count');
  const statsCategoryCount = document.getElementById('stats-categories-count');
  const trendingRow = document.getElementById('trending-channels-row');

  // Handle visual page state stats
  updateStatsDisplay();

  // Populate trending row cards on homepage
  populateTrendingRow();

  // Manage visual statistics on Homepage elements
  function updateStatsDisplay() {
    const totalCount = window.currentPlaylist ? window.currentPlaylist.length : 0;
    
    // Compute unique categories count
    let categories = new Set();
    if (window.currentPlaylist) {
      window.currentPlaylist.forEach(ch => {
        if (ch.category) categories.add(ch.category);
      });
    }
    const catCount = categories.size || 0;

    if (statsChannelCount) {
      statsChannelCount.textContent = totalCount.toLocaleString();
    }
    if (statsCategoryCount) {
      statsCategoryCount.textContent = catCount.toLocaleString();
    }
  }

  // Populate horizontal Netflix rows with standard channels
  function populateTrendingRow() {
    if (!trendingRow) return;
    trendingRow.innerHTML = '';

    // Take up to 10 cards for horizontal trending list
    const sliceList = window.currentPlaylist ? window.currentPlaylist.slice(0, 10) : [];
    
    sliceList.forEach((ch, idx) => {
      const card = document.createElement('div');
      card.className = "w-44 sm:w-52 aspect-[1.75/1] shrink-0 rounded-[20px] border border-white/5 bg-gradient-to-b from-[#26262c] to-[#0d0d10] p-4 flex items-center justify-center relative transition-all duration-300 group hover:scale-[1.03] hover:border-red-500/30 cursor-pointer snap-start shadow-[0_4px_12px_rgba(0,0,0,0.5)] overflow-hidden";
      
      const logoMarkup = ch.logo
        ? `<img src="${ch.logo}" alt="${ch.name}" class="max-w-[94%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-[1.08] pointer-events-none z-10 opacity-95 group-hover:opacity-100 filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)] mix-blend-screen select-none" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-placeholder').style.display='flex';">`
        : '';
        
      card.innerHTML = `
        <!-- Top-Right LIVE Pill Badge -->
        <div class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#E50914] text-[8px] font-extrabold text-white uppercase tracking-wider flex items-center gap-1 shadow-md select-none z-10">
          <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          LIVE
        </div>

        <!-- Soft Dynamic Ambient Glow for Logo Blending -->
        <div class="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-all duration-300 pointer-events-none select-none z-0">
          <div class="w-24 h-24 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-xl"></div>
        </div>

        <!-- Centered Logo or Text fallback -->
        ${logoMarkup}
        <div class="w-full h-full flex items-center justify-center z-10 fallback-placeholder" style="display: ${ch.logo ? 'none' : 'flex'}">
          <span class="text-xs sm:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-200 uppercase tracking-widest text-center px-2 line-clamp-1 select-none">
            ${ch.name}
          </span>
        </div>

        <!-- Bottom Neon Crimson Glowing Slit highlight -->
        <div class="absolute bottom-0 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent rounded-full shadow-[0_-1px_6px_#E50914,0_0_12px_#E50914] opacity-80 group-hover:opacity-100 transition-opacity"></div>
        
        <!-- Smooth Play Overlay hover trigger -->
        <div class="absolute inset-0 rounded-[19px] bg-black/45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <div class="w-9 h-9 rounded-full bg-[#E50914] flex items-center justify-center text-white shadow-lg shadow-[#E50914]/20 scale-90 group-hover:scale-100 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill ml-0.5" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (typeof window.playHLSStream === 'function') {
          window.playHLSStream(ch.url, ch.name, ch.logo, ch.fallbackLogoText);
        } else {
          // Redirect to channels view and trigger the play index
          window.location.href = `./channels.html?playIndex=${idx}`;
        }
      });

      trendingRow.appendChild(card);
    });
  }

  // Loader UI state toggle helpers 
  function setBtnStateLoading(btn, isLoading, label) {
    if (!btn) return;
    if (isLoading) {
      btn.disabled = true;
      btn.innerHTML = `
        <span class="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
        <span>${label}</span>
      `;
    } else {
      btn.disabled = false;
      btn.innerHTML = `
        <span>${label}</span>
      `;
    }
  }

  // Action feedback message notification bar
  function showActionNotification(msg, type = "success") {
    const oldBar = document.getElementById('notification-overlay-toast');
    if (oldBar) oldBar.remove();

    const colors = {
      success: 'bg-emerald-600/90 border-emerald-500',
      error: 'bg-red-600/90 border-red-500',
      info: 'bg-blue-600/90 border-blue-500'
    };

    const container = document.createElement('div');
    container.id = 'notification-overlay-toast';
    container.className = `fixed bottom-8 right-8 z-50 px-6 py-4 rounded-2xl border backdrop-blur-md shadow-2xl flex items-center gap-3 slide-in transition-all duration-300 text-white font-medium ${colors[type] || colors.success}`;
    
    container.innerHTML = `
      <span>${msg}</span>
      <button class="ml-2 hover:opacity-80 text-white font-bold" onclick="this.parentElement.remove()">×</button>
    `;

    document.body.appendChild(container);

    setTimeout(() => {
      container.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => container.remove(), 400);
    }, 4500);
  }
});
