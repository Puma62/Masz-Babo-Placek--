// main.js

// ustawienia / dane do wstawienia
const settings = {
  phone: '+48 534 476 323',
  address: 'Warszawska 12, 41-200 Sosnowiec',
  lat: 50.286,
  lng: 19.1048
};

// uzupełnij nagłówki na starcie
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('phone').href = `tel:${settings.phone}`;
  document.getElementById('phone').textContent = settings.phone;
  document.getElementById('addr').textContent = settings.address;
  document.getElementById('address-text').textContent = settings.address;
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  loadMenu();
});

// ładowanie menu z pliku data/menu.json
async function loadMenu(){
  try{
    const res = await fetch('data/menu.json');
    const menu = await res.json();
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';
    menu.items.forEach(d => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.innerHTML = `<h3>${escapeHtml(d.name)} <span style="float:right">${escapeHtml(d.price)}</span></h3>
                        <p class="desc">${escapeHtml(d.description)}</p>`;
      grid.appendChild(card);
    });
  }catch(e){
    console.error('Nie udało się załadować menu', e);
  }
}

function escapeHtml(str){
  if(!str) return '';
  return str.replace(/[&<>"']/g, function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m];});
}

// Google Maps callback. W pliku index.html w <script> podaj swój klucz i callback=initMap
function initMap(){
  const center = { lat: settings.lat, lng: settings.lng };
  const map = new google.maps.Map(document.getElementById('map'), {
    center,
    zoom: 15
  });
  const marker = new google.maps.Marker({position:center, map});
}
