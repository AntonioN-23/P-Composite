import { PCBuild, PCPart } from '../composite';
 
const p = (name, desc, price, cat, tier) =>
  new PCPart(name, desc, price, cat, tier);
 
// ============================================================
// GAMA ECONÓMICA
// ============================================================
const economica = new PCBuild(
  'Gama Económica',
  'Gaming casual con presupuesto ajustado. Ideal para comenzar.',
  'economica'
);
 
// CPU
economica.add(p('AMD Ryzen 5 5600',     '6C/12T · 3.5 GHz base · AM4 · Incluye cooler Wraith Stealth.',           199, 'CPU',         'economica'));
economica.add(p('Intel Core i3-12100F', '4C/8T · 3.3 GHz base · LGA1700 · Gran rendimiento por precio.',          109, 'CPU',         'economica'));
economica.add(p('AMD Ryzen 5 4600G',    '6C/12T · GPU integrada Vega 7 · AM4 · Ideal sin GPU discreta.',          129, 'CPU',         'economica'));
 
// GPU
economica.add(p('RX 6600 8 GB',         'Entry-level · FidelityFX SR · 1080p 60+ FPS en títulos modernos.',       229, 'GPU',         'economica'));
economica.add(p('RTX 3060 12 GB',       'DLSS 2 · Ray tracing básico · 1080p excelente en cualquier juego.',      259, 'GPU',         'economica'));
economica.add(p('RX 6500 XT 4 GB',      'Compacta · 1080p ajustes medios · Muy bajo consumo energético.',         149, 'GPU',         'economica'));
 
// RAM
economica.add(p('Kingston 16 GB DDR4',  '2×8 GB · DDR4 3200 MHz · Plug & play sin XMP requerido.',                49, 'RAM',         'economica'));
economica.add(p('Corsair 16 GB DDR4',   '2×8 GB · DDR4 3000 MHz · Perfil bajo · Fácil instalación.',              45, 'RAM',         'economica'));
economica.add(p('TeamGroup 8 GB DDR4',  'Módulo único · DDR4 2666 MHz · Opción mínima viable para gaming.',        29, 'RAM',         'economica'));
 
// Motherboard
economica.add(p('MSI B450M PRO-VDH',    'AM4 · Micro-ATX · 4× DDR4 · USB 3.2 · HDMI/DVI · Económica.',           79, 'Motherboard', 'economica'));
economica.add(p('Gigabyte B660M DS3H',  'LGA1700 · Micro-ATX · DDR4 · PCIe 4.0 · Buena VRM i3/i5.',              89, 'Motherboard', 'economica'));
economica.add(p('ASRock B550M HDV',     'AM4 · Micro-ATX · PCIe 4.0 · Soporte Ryzen 3000/5000 nativo.',           74, 'Motherboard', 'economica'));
 
// Storage
economica.add(p('Kingston NV2 500 GB',  'NVMe PCIe 4.0 · 3500 MB/s lectura · M.2 2280 · Gran valor.',             39, 'Storage',     'economica'));
economica.add(p('WD Blue 1 TB HDD',     'HDD 7200 RPM · SATA III · Alta capacidad · Ideal para archivos.',         39, 'Storage',     'economica'));
economica.add(p('Crucial BX500 480 GB', 'SSD SATA III · 540 MB/s · Upgrade enorme vs HDD a bajo costo.',          35, 'Storage',     'economica'));
 
// PSU
economica.add(p('EVGA 500 W BR',        '500W · 80+ Bronze · Semi-modular · Protección OVP/OCP/SCP.',              49, 'PSU',         'economica'));
economica.add(p('Corsair CV550',        '550W · 80+ Bronze · No modular · Fiable para builds entry-level.',         55, 'PSU',         'economica'));
economica.add(p('Thermaltake Smart 600W','600W · 80+ White · No modular · Precio mínimo con certificación.',        45, 'PSU',         'economica'));
 
// Case
economica.add(p('Aerocool Cylon RGB',   'ATX Mid-Tower · Panel RGB · 1 ventilador · Panel acrílico lateral.',      45, 'Case',        'economica'));
economica.add(p('Cougar MX330',         'ATX Mid-Tower · Diseño limpio · 1 fan trasero · Buen airflow.',            49, 'Case',        'economica'));
economica.add(p('Deepcool MATREXX 30',  'Micro-ATX · Panel acero · Compacto y funcional · Sin RGB.',               35, 'Case',        'economica'));
 
// Cooling
economica.add(p('Cooler Master Hyper 212','Disipador aire · 120mm · AM4/LGA1700 · Silencioso y popular.',          35, 'Cooling',     'economica'));
economica.add(p('ID-Cooling SE-214-XT', 'Disipador aire · 120mm · 4 heat pipes · Bajo perfil de ruido.',           29, 'Cooling',     'economica'));
economica.add(p('Deepcool AG300',        'Disipador aire · 120mm · Multi-socket · Compacto y eficiente.',           25, 'Cooling',     'economica'));
 
// Monitor
economica.add(p('AOC 24G2 24"',         '1080p IPS · 144Hz · 1ms MPRT · FreeSync · HDMI+DisplayPort.',            149, 'Monitor',     'economica'));
economica.add(p('LG 24MP60G 24"',       '1080p IPS · 75Hz · 1ms MBR · FreeSync · Colores precisos.',              119, 'Monitor',     'economica'));
economica.add(p('Acer KG241Y 24"',      '1080p VA · 165Hz · 1ms · FreeSync Premium · Alto contraste.',            129, 'Monitor',     'economica'));
 
// Keyboard
economica.add(p('Redragon K552',        'Mecánico TKL · Outemu Red · RGB por tecla · USB · Sólido.',               35, 'Keyboard',    'economica'));
economica.add(p('HyperX Alloy Core',    'Membrana RGB · Anti-ghosting · Resistente derrames · Silencioso.',         39, 'Keyboard',    'economica'));
economica.add(p('Logitech K845',        'Mecánico TKL · TTC Red · Aluminio · Sin RGB · Muy confiable.',             49, 'Keyboard',    'economica'));
 
// Mouse
economica.add(p('Logitech G203',        '8000 DPI · 6 botones · RGB · Sensor óptico preciso · Cable.',             29, 'Mouse',       'economica'));
economica.add(p('Redragon M711 Cobra',  '10000 DPI · 7 botones · RGB · Pesos ajustables · Ergonómico.',            25, 'Mouse',       'economica'));
economica.add(p('SteelSeries Rival 3',  '8500 DPI · 6 botones · RGB · 77g ligero · TrueMove Core sensor.',         29, 'Mouse',       'economica'));
 
// Headset
economica.add(p('HyperX Cloud Stinger', 'Drivers 50mm · Micrófono desmontable · Estéreo · USB/3.5mm.',             39, 'Headset',     'economica'));
economica.add(p('Logitech G432',        '7.1 Surround · Drivers 50mm · Micrófono cardioide · Cómodo.',             49, 'Headset',     'economica'));
economica.add(p('Redragon H510 Zeus',   '7.1 Surround · Micrófono flexible · RGB · USB · Sonido sólido.',          35, 'Headset',     'economica'));
 
// Mousepad
economica.add(p('SteelSeries QcK M',   '450×400mm · Superficie suave · Base antideslizante · Clásico.',            14, 'Mousepad',    'economica'));
economica.add(p('Corsair MM100',        '320×270mm · Tela alta densidad · Costuras perimetrales · Compacto.',       12, 'Mousepad',    'economica'));
economica.add(p('Redragon P003 XL',    '800×300mm · Extra grande · Superficie rápida · Base caucho.',              18, 'Mousepad',    'economica'));
 
// ============================================================
// GAMA MEDIA
// ============================================================
const media = new PCBuild(
  'Gama Media',
  'Balance rendimiento-precio. Gaming 1080p/1440p fluido.',
  'media'
);
 
// CPU
media.add(p('AMD Ryzen 7 7700X',    '8C/16T · 4.5 GHz base · AM5 · TDP 105W · Gran IPC generacional.',         349, 'CPU',         'media'));
media.add(p('Intel Core i5-13600K', '14C(6P+8E)/20T · 3.5 GHz · LGA1700 · Gaming y productividad top.',       319, 'CPU',         'media'));
media.add(p('AMD Ryzen 5 7600X',    '6C/12T · 4.7 GHz base · AM5 · Alto IPC · Bajo consumo relativo.',        249, 'CPU',         'media'));
 
// GPU
media.add(p('RTX 4070 12 GB',       'DLSS 3 · Ada Lovelace · 1440p ultra fluido · Ray tracing avanzado.',      599, 'GPU',         'media'));
media.add(p('RX 7700 XT 12 GB',     'RDNA 3 · FSR 3 · 1440p excelente · Mejor precio que Nvidia equivalente.',449, 'GPU',         'media'));
media.add(p('RTX 4060 Ti 16 GB',    'DLSS 3 · 16 GB VRAM · 1080p/1440p · Eficiencia energética notable.',     499, 'GPU',         'media'));
 
// RAM
media.add(p('Corsair 32 GB DDR5',   '2×16 GB · DDR5 5600 MHz · Perfil bajo · Ideal AM5/LGA1700.',              109, 'RAM',         'media'));
media.add(p('G.Skill Ripjaws 32 GB','2×16 GB · DDR4 3600 MHz · CL18 · Excelente para Ryzen 5000.',              89, 'RAM',         'media'));
media.add(p('Kingston Fury 32 GB',  '2×16 GB · DDR5 5200 MHz · XMP 3.0 · Disipador aluminio negro.',           99, 'RAM',         'media'));
 
// Motherboard
media.add(p('MSI B650 Gaming Plus', 'AM5 · ATX · DDR5 · PCIe 5.0 · USB 3.2 Gen2 · WiFi 6 integrado.',        199, 'Motherboard', 'media'));
media.add(p('ASUS Prime Z690-P',    'LGA1700 · ATX · DDR5 · PCIe 5.0 · 2.5G LAN · VRM robusta.',             189, 'Motherboard', 'media'));
media.add(p('Gigabyte B760 AORUS',  'LGA1700 · ATX · DDR5 · USB4 · 2.5G LAN · 16+1+2 VRM fases.',            179, 'Motherboard', 'media'));
 
// Storage
media.add(p('Samsung 970 EVO 1 TB', 'NVMe PCIe 3.0 · 3500/2500 MB/s · MLC NAND · Confiabilidad probada.',      89, 'Storage',     'media'));
media.add(p('WD Black SN770 1 TB',  'NVMe PCIe 4.0 · 5150/4900 MB/s · Sin DRAM cache · Gran relación precio.', 79, 'Storage',     'media'));
media.add(p('Seagate Barracuda 2 TB','HDD 7200 RPM · SATA III · Alta capacidad para juegos y backups.',          59, 'Storage',     'media'));
 
// PSU
media.add(p('Corsair RM750x',       '750W · 80+ Gold · Full modular · Zero RPM mode · Muy silenciosa.',        129, 'PSU',         'media'));
media.add(p('EVGA SuperNOVA 750 G6','750W · 80+ Gold · Full modular · ECO mode · Garantía 10 años.',           119, 'PSU',         'media'));
media.add(p('Seasonic Focus GX-650','650W · 80+ Gold · Full modular · Fan híbrido · Alta eficiencia real.',     109, 'PSU',         'media'));
 
// Case
media.add(p('Lian Li Lancool 216',  'ATX Mid-Tower · 2× 160mm ARGB fans · Excelente airflow frontal.',         109, 'Case',        'media'));
media.add(p('Fractal Pop Air',      'ATX Mid-Tower · Vidrio templado · 3 fans incluidos · Silencioso.',          99, 'Case',        'media'));
media.add(p('NZXT H510',           'ATX Mid-Tower · Vidrio templado · Cable mgmt premium · Minimalista.',        79, 'Case',        'media'));
 
// Cooling
media.add(p('be quiet! Dark Rock 4','Disipador aire · 2× fan 120/135mm · Muy silencioso · 200W TDP.',           74, 'Cooling',     'media'));
media.add(p('Deepcool AK620',       'Dual-tower · 2× 120mm fans · 260W TDP · Rendimiento top aire.',            59, 'Cooling',     'media'));
media.add(p('CM MasterLiquid 240', 'AIO 240mm · 2× 120mm ARGB fans · Bomba silenciosa · Fácil montaje.',        79, 'Cooling',     'media'));
 
// Monitor
media.add(p('LG 27GL850 27"',       '1440p IPS · 144Hz · 1ms · G-Sync compatible · sRGB 98%.',                 329, 'Monitor',     'media'));
media.add(p('Samsung Odyssey G5 27"','1440p VA · 165Hz · 1ms · FreeSync Premium · Alto contraste nativo.',      279, 'Monitor',     'media'));
media.add(p('AOC Q27G2S 27"',       '1440p IPS · 165Hz · 1ms · FreeSync · DisplayHDR 400 · Preciso.',          299, 'Monitor',     'media'));
 
// Keyboard
media.add(p('Logitech G Pro X',     'Mecánico TKL · Hot-swap · GX switches · RGB · Estándar pro esports.',      149, 'Keyboard',    'media'));
media.add(p('Corsair K70 RGB MK.2', 'Mecánico full · Cherry MX Red · RGB · Aluminio cepillado · Sólido.',      139, 'Keyboard',    'media'));
media.add(p('SteelSeries Apex Pro', 'Mecánico · OmniPoint ajustable · OLED display · RGB · Top mid.',          159, 'Keyboard',    'media'));
 
// Mouse
media.add(p('Logitech G502 X',      '25600 DPI · 13 botones · LIGHTFORCE hybrid switch · Pesos incluidos.',      79, 'Mouse',       'media'));
media.add(p('Razer DeathAdder V3',  '30000 DPI · 6 botones · 59g ultra-ligero · Focus Pro sensor.',             69, 'Mouse',       'media'));
media.add(p('SteelSeries Rival 600','12000 DPI · Doble sensor óptico · 8 botones · Pesos modulares · RGB.',      79, 'Mouse',       'media'));
 
// Headset
media.add(p('HyperX Cloud Alpha',   'Drivers duales 50mm · Hi-Fi · Micrófono desmontable · Muy cómodo.',         99, 'Headset',     'media'));
media.add(p('SteelSeries Arctis 7', 'Inalámbrico 2.4GHz · 24h batería · ClearCast mic · DTS 7.1.',             149, 'Headset',     'media'));
media.add(p('Corsair HS80 Wireless','Inalámbrico · Dolby Atmos · 20h batería · Micrófono omnidireccional.',     129, 'Headset',     'media'));
 
// Mousepad
media.add(p('SteelSeries QcK XXL',  '900×400mm · Superficie control · Base caucho gruesa · Costuras.',           39, 'Mousepad',    'media'));
media.add(p('Corsair MM350 Pro XL', '930×400mm · Tela premium · Base 5mm antideslizante · Durable.',            44, 'Mousepad',    'media'));
media.add(p('HyperX Fury S XL',     '900×420mm · Micro-textured cloth · Costuras reforzadas · Veloz.',          34, 'Mousepad',    'media'));
 
// ============================================================
// GAMA ALTA
// ============================================================
const alta = new PCBuild(
  'Gama Alta',
  'Máximo rendimiento. Gaming 4K + creación de contenido profesional.',
  'alta'
);
 
// CPU
alta.add(p('Intel Core i9-14900K',   '24C(8P+16E)/32T · 6.0 GHz boost · LGA1700 · El rey absoluto del gaming.',  589, 'CPU',         'alta'));
alta.add(p('AMD Ryzen 9 7950X',      '16C/32T · 5.7 GHz boost · AM5 · Workstation + gaming top-tier.',           699, 'CPU',         'alta'));
alta.add(p('AMD Ryzen 9 7900X3D',    '12C/24T · 3D V-Cache · AM5 · Mejor CPU gaming en títulos optimizados.',    549, 'CPU',         'alta'));
 
// GPU
alta.add(p('RTX 4090 24 GB',         'DLSS 3.5 · 4K ultra 100+ FPS · Ada Lovelace · La GPU más potente.',       1599, 'GPU',         'alta'));
alta.add(p('RTX 4080 Super 16 GB',   'DLSS 3 · 4K ultra 80+ FPS · Mejor eficiencia relativa · Top tier.',        999, 'GPU',         'alta'));
alta.add(p('RX 7900 XTX 24 GB',      'RDNA 3 · 24 GB VRAM · 4K excelente · FSR 3 · Alternativa AMD top.',        899, 'GPU',         'alta'));
 
// RAM
alta.add(p('G.Skill Trident Z5 64 GB','2×32 GB · DDR5 6000 MHz · CL30 · RGB · Rendimiento extremo.',             219, 'RAM',         'alta'));
alta.add(p('Corsair Dominator 64 GB', '2×32 GB · DDR5 5600 MHz · DHX cooling · RGB CAPELLIX · Premium.',         229, 'RAM',         'alta'));
alta.add(p('Kingston Fury Beast 32 GB','2×16 GB · DDR5 6400 MHz · XMP 3.0 · Alta frecuencia pura.',              149, 'RAM',         'alta'));
 
// Motherboard
alta.add(p('ASUS ROG Maximus Z790',  'LGA1700 · E-ATX · DDR5 · PCIe 5.0 · WiFi 6E · Thunderbolt 4 · Top.',      699, 'Motherboard', 'alta'));
alta.add(p('MSI MEG X670E ACE',      'AM5 · ATX · DDR5 · PCIe 5.0 · 10G LAN · WiFi 6E · Top AMD platform.',     599, 'Motherboard', 'alta'));
alta.add(p('Gigabyte Z790 AORUS Master','LGA1700 · ATX · DDR5 · 10G LAN · Thunderbolt 4 · 20+1 VRM fases.',     499, 'Motherboard', 'alta'));
 
// Storage
alta.add(p('Samsung 990 Pro 2 TB',   'NVMe PCIe 4.0 · 7450/6900 MB/s · MLC · Endurance extrema · Élite.',       189, 'Storage',     'alta'));
alta.add(p('WD Black SN850X 2 TB',   'NVMe PCIe 4.0 · 7300/6600 MB/s · Compatible PS5 · Rendimiento élite.',    169, 'Storage',     'alta'));
alta.add(p('Seagate FireCuda 530 2TB','NVMe PCIe 4.0 · 7300/6900 MB/s · Disipador incluido · Alta durabilidad.', 179, 'Storage',     'alta'));
 
// PSU
alta.add(p('Corsair HX1000i',        '1000W · 80+ Platinum · Full modular · Control digital · iCUE compatible.',  249, 'PSU',         'alta'));
alta.add(p('Seasonic PRIME TX-1000', '1000W · 80+ Titanium · Full modular · Fanless a carga baja · Premium.',     299, 'PSU',         'alta'));
alta.add(p('EVGA SuperNOVA 1000 P6', '1000W · 80+ Platinum · Full modular · ECO mode · Garantía 10 años.',       219, 'PSU',         'alta'));
 
// Case
alta.add(p('Lian Li O11 Dynamic EVO','Full-Tower · Dual chamber · 3× vidrio templado · 6 fan slots · Icónico.',  179, 'Case',        'alta'));
alta.add(p('Fractal Torrent RGB',    'ATX Mid-Tower · 2× 180mm front fans · Airflow máximo · Vidrio templado.',   189, 'Case',        'alta'));
alta.add(p('Corsair 5000D Airflow',  'ATX Mid-Tower · Panel mallado · Cable mgmt premium · Muy espacioso.',       174, 'Case',        'alta'));
 
// Cooling
alta.add(p('NZXT Kraken Z73 360mm', 'AIO 360mm · LCD display animado · 3× 120mm fans · Silencioso · Top.',       279, 'Cooling',     'alta'));
alta.add(p('Corsair iCUE H150i',    'AIO 360mm · 3× LL120 RGB fans · Software iCUE · Bomba ultra silenciosa.',    259, 'Cooling',     'alta'));
alta.add(p('EK-AIO Elite 360',      'AIO 360mm · Radiador cobre · 3× fans PWM D-RGB · Rendimiento élite.',        249, 'Cooling',     'alta'));
 
// Monitor
alta.add(p('LG 27GN950-B 4K 27"',   '4K IPS · 144Hz · 1ms · G-Sync+FreeSync · DCI-P3 98% · HDR600.',           699, 'Monitor',     'alta'));
alta.add(p('ASUS ROG Swift PG279QM', '1440p IPS · 240Hz · 1ms · G-Sync · sRGB 99% · Overclock 280Hz.',          649, 'Monitor',     'alta'));
alta.add(p('Samsung Neo G8 4K',      '4K VA · 240Hz · 1ms · Mini-LED · HDR2000 · G-Sync compatible · Brutal.',   799, 'Monitor',     'alta'));
 
// Keyboard
alta.add(p('Wooting 60HE+',         'Mecánico 60% · Lekker analógico · Rapid trigger · Estándar pro esports.',   175, 'Keyboard',    'alta'));
alta.add(p('Keychron Q1 Pro',        'Mecánico 75% · CNC aluminio · Hot-swap · Wireless BT5 · RGB sur-led.',      199, 'Keyboard',    'alta'));
alta.add(p('Corsair K100 RGB',       'Mecánico full · OPX optical · iCUE · Rueda multimedia · Aluminio premium.', 229, 'Keyboard',    'alta'));
 
// Mouse
alta.add(p('Logitech G Pro X SL 2', '32000 DPI · 60g · HERO 2 sensor · Inalámbrico LIGHTSPEED · Pro gaming.',    159, 'Mouse',       'alta'));
alta.add(p('Razer DeathAdder V3 Pro','30000 DPI · 64g · Inalámbrico HyperSpeed · 90h batería · Top pro.',        149, 'Mouse',       'alta'));
alta.add(p('Pulsar X2H Wireless',   '3395 sensor · 55g · Inalámbrico 4K polling · Simétrico · Élite.',           139, 'Mouse',       'alta'));
 
// Headset
alta.add(p('SteelSeries Arctis Nova Pro','Inalámbrico dual · ANC activo · Hi-Res Audio · Infinity power · Top.',  349, 'Headset',     'alta'));
alta.add(p('Audeze Maxwell Wireless','Planar magnetic · Dolby Atmos · USB-C/Wireless · 80h batería · Premium.',   299, 'Headset',     'alta'));
alta.add(p('HyperX Cloud Alpha Pro', 'Inalámbrico · 300h batería récord · Dual chamber · Hi-Res Audio.',          199, 'Headset',     'alta'));
 
// Mousepad
alta.add(p('Artisan Zero XL Soft',  '490×420mm · Tela japonesa premium · Deslizamiento perfecto · Pro.',           79, 'Mousepad',    'alta'));
alta.add(p('Logitech Powerplay',    '340×321mm · Carga inalámbrica continua · Compatible G502/G903 · Único.',     119, 'Mousepad',    'alta'));
alta.add(p('SteelSeries QcK Prism XL','900×300mm · RGB 2 zonas · Superficie dual-texture · USB powered.',          69, 'Mousepad',    'alta'));
 
// ============================================================
// EXPORTACIONES
// ============================================================
export const catalog = { economica, media, alta };
 
export const CATEGORIES = [
  'CPU', 'GPU', 'RAM', 'Motherboard', 'Storage',
  'PSU', 'Case', 'Cooling', 'Monitor',
  'Keyboard', 'Mouse', 'Headset', 'Mousepad',
];