
-- Poblar la tabla CATEGORIAS DE PRODUCTOS
INSERT INTO categories (name) VALUES ('Indumentaria');
INSERT INTO categories (name) VALUES ('Viajes');
INSERT INTO categories (name) VALUES ('Bazar');
INSERT INTO categories (name) VALUES ('Servicios');


-- Poblar la tabla de PRODUCTOS
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC001', 'Camiseta Argentina', 'Camiseta titular Selección Argentina', 'Camiseta titular Selección Argentina', 2500, '0', 'camiseta, seleccion, argentina, mundial', 'camiseta.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC002', 'Pantalon Perú', 'Pantalón titular Selección Argentina', 'Pantalón titular Selección Peruana', 2300, '0', 'pantalón, seleccion, peru, mundial', 'camiseta.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC003', 'Camiseta Bolivia', 'Camiseta titular Selección Argentina', 'Camiseta titular Selección Argentina', 2500, '0', 'camiseta, seleccion, argentina, mundial', 'camiseta.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC004', 'Botínes  Perú', 'Botines titular Selección Argentina', 'Botines titular Selección Boliviana', 2300, '0', 'botines, seleccion, bolivia, mundial', 'camiseta.jpg', 1);
INSERT INTO products (sku, product_name, short_description, long_description, price, discount, tags, image_url, category_id) VALUES ('GC005', 'Camiseta Colombia', 'Camiseta titular Selección Colombiana', 'Camiseta titular Selección Colombia', 2500, '0', 'camiseta, seleccion, colombia, mundial', 'camiseta.jpg', 1);




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


