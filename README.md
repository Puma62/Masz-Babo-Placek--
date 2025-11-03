# Masz Babo Placek — gotowy projekt

Pliki do wdrożenia na Netlify z działającym Netlify CMS i Google Maps.

## Co zawiera
- index.html
- style.css
- js/main.js
- data/menu.json
- admin/config.yml
- images/ (przykładowe zdjęcia: hero-placeholder.jpg, gallery-1/2/3)
- .env.example (wzór)

## Szybki start
1. Utwórz repozytorium na GitHub i wrzuć zawartość tego folderu.
2. Na Netlify dodaj stronę podłączając repozytorium.
3. W Netlify -> Site settings -> Environment variables ustaw wartości zgodnie z .env.example
   - GOOGLE_MAPS_API_KEY
   - RESTAURANT_ADDRESS
   - RESTAURANT_PHONE
   - RESTAURANT_LAT / RESTAURANT_LNG
4. W Netlify włącz Identity i Git Gateway (aby Netlify CMS działało).

## Edycja
Po wdrożeniu panel CMS będzie dostępny pod: /admin
