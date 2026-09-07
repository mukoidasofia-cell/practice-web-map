// 1. ІНІЦІАЛІЗАЦІЯ КАРТОГРАФІЧНОГО МОДУЛЯ
const map = L.map('map', {
    center: [49.5535, 25.5948], // Центр (Тернопіль)
    zoom: 14,
    zoomControl: true
});

// 2. ПІДКЛЮЧЕННЯ БАЗОВОГО ТАЙЛОВОГО ШАРУ (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 3. ФОРМУВАННЯ ТА ВІДОБРАЖЕННЯ ГЕОМЕТРИЧНИХ ОБ'ЄКТІВ

// Об'єкт 1: ЦНАП (Маркер)
const cnapMarker = L.marker([49.5535, 25.5948]).addTo(map);
cnapMarker.bindPopup(`
    <div class="popup-header">ЦНАП громади</div>
    <div class="popup-body">
        <b>Адреса:</b> вул. Князя Острозького, 6<br>
        <b>Графік роботи:</b> Пн-Пт 08:00–17:00<br>
        <b>Послуги:</b> Реєстрація майна, паспортні послуги.<br>
        <span class="popup-tag">Адміністративний об'єкт</span>
    </div>
`);

// Об'єкт 2: Лікарня (Маркер)
const hospitalMarker = L.marker([49.5480, 25.6000]).addTo(map);
hospitalMarker.bindPopup(`
    <div class="popup-header">Міська комунальна лікарня</div>
    <div class="popup-body">
        <b>Адреса:</b> вул. Шпитальна, 2<br>
        <b>Статус:</b> Опорний заклад охорони здоров'я<br>
        <b>Контакт:</b> +380 (352) 52-00-00<br>
        <span class="popup-tag">Медична інфраструктура</span>
    </div>
`);

// Об'єкт 3: Паркова зона (Полігон)
const parkPolygon = L.polygon([
    [49.5580, 25.5850],
    [49.5610, 25.5890],
    [49.5590, 25.5940],
    [49.5560, 25.5910]
], {
    color: '#15803d',
    fillColor: '#22c55e',
    fillOpacity: 0.35,
    weight: 2
}).addTo(map);

parkPolygon.bindPopup(`
    <div class="popup-header">Паркова зона «Топільче»</div>
    <div class="popup-body">
        <b>Кадастровий номер:</b> 6110100000:01:002:0015<br>
        <b>Площа:</b> 4.2 га<br>
        <b>Статус:</b> Землі загального користування<br>
        <span class="popup-tag">Рекреаційна зона</span>
    </div>
`);

// Об'єкт 4: Магістральний водопровід (Полілінія)
const utilityLine = L.polyline([
    [49.5535, 25.5948],
    [49.5510, 25.5980],
    [49.5480, 25.6000]
], {
    color: '#0284c7',
    weight: 4,
    dashArray: '6, 8'
}).addTo(map);

utilityLine.bindPopup(`
    <div class="popup-header">Водопровідний магістральний колектор</div>
    <div class="popup-body">
        <b>Тип:</b> Інженерна мережа водовідведення<br>
        <b>Діаметр:</b> 500 мм<br>
        <b>Балансоутримувач:</b> КП «Водоканал»
    </div>
`);

// 4. ОБРОБКА ПОДІЙ ТА ІНТЕРАКТИВНІСТЬ
map.on('click', function(e) {
    console.log(`Клік на карті! Широта: ${e.latlng.lat.toFixed(5)}, Довгота: ${e.latlng.lng.toFixed(5)}`);
});