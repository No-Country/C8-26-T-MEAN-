
-- Poblar la tabla CATEGORIAS DE PRODUCTOS
INSERT INTO categories (name) VALUES ('ESPECIAL MUNDIAL');
INSERT INTO categories (name) VALUES ('Viajes');
INSERT INTO categories (name) VALUES ('Electro');
INSERT INTO categories (name) VALUES ('Servicios');


-- Poblar la tabla de PRODUCTOS
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC001', 'CAMISETA DE ARGENTINA', 'ADIDAS OFICIAL MESSI 10 BLANCA', 'ADIDAS OFICIAL MESSI 10 BLANCA', 8000, '0', 'camiseta, seleccion, argentina, mundial', 'http://localhost:3000/camiseta-argentina.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC002', 'SHORT PERU', 'SHORT OFICIAL PERU', 'SHORT OFICIAL PERU', 3000, '0', 'pantalón, seleccion, peru, mundial', 'http://localhost:3000/short-peru.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC003', 'CAMISETA DE BOLIVIA', 'CAMISETA OFICIAL BOLIVIA', 'CAMISETA OFICIAL BOLIVIA', 8000, '0', 'camiseta, seleccion, bolivia, mundial', 'http://localhost:3000/camiseta-bolivia.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC004', 'MEDIAS ARGENTINA', 'MEDIAS OFICIAL ARGENTINA', 'MEDIAS OFICIAL ARGENTINA', 4000, '0', 'medias, argentina', 'http://localhost:3000/medias-argentina.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC005', 'CAMISETA DE COLOMBIA', 'CAMISETA OFICIAL COLOMBIA', 'CAMISETA OFICIAL COLOMBIA', 8000, '0', 'camiseta, seleccion, colombia, mundial', 'http://localhost:3000/camiseta-colombia.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC006', 'PELOTA DE FUTBOL', 'PELOTA OFICIAL FUTBOL', 'PELOTA OFICIAL FUTBOL', 2000, '0', 'pelota, futbol', 'http://localhost:3000/pelota-adidas.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC007', 'PELOTA DE BOCA', 'PELOTA OFICIAL BOCA', 'PELOTA OFICIAL BOCA', 2000, '0', 'pelota, futbol, boca', 'http://localhost:3000/pelota-boca.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC008', 'PELOTA DE RIVER', 'PELOTA OFICIAL RIVER', 'PELOTA OFICIAL RIVER', 2000, '0', 'pelota, futbol, river', 'http://localhost:3000/pelota-river.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC009', 'ZAPATILLAS NIÑO NIÑA NEGRA', 'Comodidad y estilo para tus entrenamientos con las nuevas ATOMIK Sigma. Cuenta con cordones elásticos y ajuste de velcro.', 'Comodidad y estilo para tus entrenamientos con las nuevas ATOMIK Sigma. Cuenta con cordones elásticos y ajuste de velcro.', 4000, '0', 'zapatillas, velcro', 'http://localhost:3000/zapatillas-running.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC010', 'ZAPATILLAS ATOMIK KEOPS', 'Liviandad, diseño y comodidad. Resistentes e ideales para tiempo libre.', 'Liviandad, diseño y comodidad. Resistentes e ideales para tiempo libre.', 4000, '0', 'zapatillas, running', 'http://localhost:3000/zapatillas-velcro.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC011', 'CAFETERA PRIMA LATTE OSTER', 'Tipo de producto Cafeteras express. Origen China.', 'Tipo de producto Cafeteras express. Origen China.', 25000, '0', 'cafetera, oster', 'http://localhost:3000/maquina-cafe.jpg', 3);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC012', 'HORNO ELECTRICO', '¿Qué incluye? Pinza para extracción, rejilla, bandeja para migas, bandeja para hornear.', '¿Qué incluye? Pinza para extracción, rejilla, bandeja para migas, bandeja para hornear.', 30000, '0', 'horno, electrico', 'http://localhost:3000/horno-electrico.jpg', 3);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC013', 'PARRILLA ELECTRICA', 'Control de temperatura ajustable. Bandeja de grasa integrada.', 'Control de temperatura ajustable. Bandeja de grasa integrada.', 30000, '0', 'parrilla, electrica', 'http://localhost:3000/parrilla-electrica.jpg', 3);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC014', 'LAVARROPAS', 'Centrifugado:Sí. Carga Frontal. Clase A+. Programa:15', 'Centrifugado:Sí. Carga Frontal. Clase A+. Programa:15', 35000, '0', 'lavarropas', 'http://localhost:3000/lavarropas.jpg', 3);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC015', 'KIT CUIDADO BEBE', 'Contiene: tijera, cepillo, lima, corta uña, termometro, aspirador nasal, cepillo de dientes.', 'Contiene: tijera, cepillo, lima, corta uña, termometro, aspirador nasal, cepillo de dientes.', 8000, '0', 'kit, cuidado, bebe', 'http://localhost:3000/kit-cuidado-bebe.jpg', 3);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC016', 'PROCESADORA', 'Accesorios: Cuchilla en S, jarra de 2 litros, disco para cortar en rodajas y disco para cortar en tiras.', 'Accesorios: Cuchilla en S, jarra de 2 litros, disco para cortar en rodajas y disco para cortar en tiras.', 15000, '0', 'procesadora', 'http://localhost:3000/procesadora.jpg', 3);


-- Poblar la tabla OPCIONES DE PRODUCTO
INSERT INTO options (name) VALUES ('Talles');
INSERT INTO options (name) VALUES ('Colores');

-- Poblar la tabla intermedia PRODUCTOS - OPCIONES DE PRODUCTO
INSERT INTO products_options (option_id, product_id) VALUES (1, 1);
INSERT INTO products_options (option_id, product_id) VALUES (1, 4);
INSERT INTO products_options (option_id, product_id) VALUES (1, 5);

-- Poblar la tabla ROLES DE USUARIO
INSERT INTO users_roles (name) VALUES ('admin');
INSERT INTO users_roles (name) VALUES ('customer');

-- Poblar la tabla de USUARIOS
INSERT INTO users (first_name, last_name, phone_number, email, birth_date, address,  password, image_url, user_role_id, points) VALUES ('Santiago', 'Chaves', 1199999999, 'admin@gmail.com', '1992-03-17', 'Av. Siempreviva 1945', 'admin123', 'user1.jpg', '1', "0");
INSERT INTO users (first_name, last_name, phone_number, email, birth_date, address,  password, image_url, user_role_id, points) VALUES ('Carlos', 'Peréz', 1193229999, 'customer@gmail.com', '1990-06-29', 'Av. Siempremuerta 1925', 'customer123', 'user12.jpg', '2', "100000");

-- Poblar la tabla PRODUCTOS VISITADOS DEL USUARIO
INSERT INTO users_visited_products (user_id, product_id, last_visited) VALUES (2, 1, '2022-10-25');
INSERT INTO users_visited_products (user_id, product_id, last_visited) VALUES (2, 2, '2022-10-22');
INSERT INTO users_visited_products (user_id, product_id, last_visited) VALUES (2, 3, '2022-09-16');
INSERT INTO users_visited_products (user_id, product_id, last_visited) VALUES (2, 4, '2022-11-16');
INSERT INTO users_visited_products (user_id, product_id, last_visited) VALUES (2, 5, '2022-03-05');


-- Poblar la tabla ESTADOS DE ORDENES (CARRITOS)
INSERT INTO orders_status (name) VALUES ('Pendiente');
INSERT INTO orders_status (name) VALUES ('Enviado');
INSERT INTO orders_status (name) VALUES ('Finalizado');

-- Poblar la tabla de ORDENES (CARRITOS)
INSERT INTO orders (user_id, ammount, items_q, shipping_address, billing_address, email, date, status_id) VALUES (2, 5000, 2,'Av. Siempreviva 1945', 'Av. Siempremuerta 1925', 'customer@gmail.com', '2022-08-08', 3);
INSERT INTO orders (user_id, ammount, items_q, shipping_address, billing_address, email, date, status_id) VALUES (2, 6900, 3,'Av. Siempreviva 1945', 'Av. Siempremuerta 1925', 'customer@gmail.com', '2022-08-13', 1);

-- Estructura de la tabla intermedia ORDENES (CARRITOS) - PRODUCTOS
INSERT INTO orders_details (order_id, product_id, price, quantity) VALUES (1, 1, 2500, 2);
INSERT INTO orders_details (order_id, product_id, price, quantity) VALUES (2, 2, 2300, 3);
