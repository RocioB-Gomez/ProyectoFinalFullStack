-- Insertar usuarios
INSERT INTO usuario (mail, contraseña, nombre, apellido, rol) VALUES
('sofia.machado@example.com', 'password1', 'Sofia', 'Machado', 'Tutor'),
('samuel.sanchez@example.com', 'password2', 'Samuel', 'Sanchez', 'Tutor'),
('lorena.perez@example.com', 'password3', 'Lorena', 'Perez', 'Tutor'),
('sofia.aguilar@example.com', 'password4', 'Sofia', 'Aguilar', 'Tutor'),
('lautaro.zarate@example.com', 'password5', 'Lautaro', 'Zarate', 'Tutor'),
('LuciaMachado@example.com', 'password6', 'Lucia', 'Machado', 'Tutor'),
('SamuelRivero@example.com', 'password7', 'Samuel', 'Rivero', 'Tutor'),
('LorenaMonic@example.com', 'password8', 'Lorena', 'Monic', 'Tutor'),
('RaquelLemes@example.com', 'password9' ,'Raquel', 'Lemes', 'Tutor'),
('LisandroCisneros@example.com', 'password10', 'Lisandro', 'Cisneros', 'Tutor');


-- Insertar tutores
INSERT INTO tutor (id_tutor, direccion, telefono, fk_usuario) VALUES
(1, 'Direccion 1', '123456789', 1),
(2, 'Direccion 2', '234567890', 2),
(3, 'Direccion 3', '345678901', 3),
(4, 'Direccion 4', '456789012', 4),
(5, 'Direccion 5', '567890123', 5),
(6, 'Direccion 1', '12345782', 6),
(7, 'Direccion 2', '155567890', 7),
(8, 'Direccion 3', '541278901', 8),
(9, 'Direccion 4', '487789012', 9),
(10, 'Direccion 5', '598890123', 10);



INSERT INTO alumno (dni, anio_ingreso, nombre, apellido, curso, fk_tutor) VALUES
(38456287, 2012, "Sofia", "Machado", "6B", 1),
(34578217, 2013, "Samuel", "Sanchez", "5B", 2),
(42548755, 2014, "Lorena", "Perez", "5B", 3),
(45785624, 2015, "Sofia", "Aguilar", "6B", 4),
(52478963, 2016, "Lautaro", "Zarate", "3B", 5),
(48759963, 2003, 'Lucia', 'Machado', '1A', 6),
(45521463, 2006, 'Samuel', 'Rivero', '2C', 7),
(35678963, 2007, 'Lorena', 'Monic', '3D', 8),
(58789653, 2008, 'Raquel', 'Lemes', '4A' , 9),
(36478963, 2014, 'Lisandro', 'Cisneros', '5B', 10);

