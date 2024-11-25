CREATE DATABASE integrador;
-- drop database integrador;
USE integrador;

-- 1. Crear tabla usuario (tabla padre para varias relaciones)
CREATE TABLE usuario (
    id_usuario INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    mail VARCHAR(50) NOT NULL UNIQUE,         
    contraseña VARCHAR(250) NOT NULL,   
    nombre VARCHAR(50) NOT NULL,       
    apellido VARCHAR(50) NOT NULL,     
    rol ENUM('Tutor', 'Docente', 'Institucion') NOT NULL
) ;

-- 2. Crear tabla institucion (depende de usuario)
CREATE TABLE institucion (
    id_institucion INT(11) PRIMARY KEY NOT NULL,
    telefono VARCHAR(30) NOT NULL,
    domicilio VARCHAR(100) NOT NULL,    
    fk_usuario INT(11) NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
) ;

-- 3. Crear tabla area_curricular (depende de institucion)
CREATE TABLE area_curricular (
    id_area INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,       
    fk_institucion INT(11) NOT NULL,
    FOREIGN KEY (fk_institucion) REFERENCES institucion(id_institucion)
) ;

-- 4. Crear tabla docente (depende de usuario e institucion)
CREATE TABLE docente (
    id_docente INT(11) PRIMARY KEY AUTO_INCREMENT,
    especialidad VARCHAR(50) NOT NULL, 
    fk_usuario INT(11) NOT NULL,
    fk_institucion INT(11) NOT NULL, 
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (fk_institucion) REFERENCES institucion(id_institucion)
) ;

-- 5. Crear tabla asignatura (depende de area_curricular y docente)
CREATE TABLE asignatura (
    id_asignatura INT(11) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,       
    fk_area INT(11) NOT NULL,
    fk_docente INT(11) NOT NULL,
    FOREIGN KEY (fk_area) REFERENCES area_curricular(id_area),
    FOREIGN KEY (fk_docente) REFERENCES docente(id_docente)
) ;

-- 6. Crear tabla tutor (depende de usuario)
CREATE TABLE tutor (
    id_tutor INT(11) PRIMARY KEY AUTO_INCREMENT,
    direccion VARCHAR(50) NOT NULL,   
    telefono VARCHAR(30) NOT NULL,
    fk_usuario INT(11) NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
) ;

-- 7. Crear tabla alumno (depende de tutor)
CREATE TABLE alumno (
    id_alumno INT(11) PRIMARY KEY AUTO_INCREMENT,
    dni INT(11) NOT NULL,  
    nombre varchar(10) NOT NULL,
    apellido varchar(10) NOT NULL,
    anio_ingreso INT(4) NOT NULL,
    curso VARCHAR(2) NOT NULL,
    fk_tutor INT(11) NOT NULL,
    FOREIGN KEY (fk_tutor) REFERENCES tutor(id_tutor)
) ;

-- 8. Crear tabla calificacion (depende de alumno y asignatura)
CREATE TABLE calificacion (
    id_calificacion INT(11) PRIMARY KEY AUTO_INCREMENT,
    fk_alumno INT(11) NOT NULL,
    fk_asignatura INT(11) NOT NULL,
    nota DECIMAL(4, 2) NOT NULL,
    FOREIGN KEY (fk_alumno) REFERENCES alumno(id_alumno),
    FOREIGN KEY (fk_asignatura) REFERENCES asignatura(id_asignatura)
) ;

