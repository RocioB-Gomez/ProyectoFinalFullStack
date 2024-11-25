const { validationResult, body, check } = require("express-validator");

//separamos las reglas por un lado
const rulesUser = () => [
    body('mail')
        .notEmpty().withMessage('el mail no puede estar vacio')
        .isEmail().withMessage('por favor ingrese un mail valido')
        .normalizeEmail(),
    body('pass')
        .notEmpty().withMessage('la contraseña no puede estar vacia')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
        .isLength({ max: 16 }).withMessage('La contraseña debe tener menos 16 caracteres')
]


const alumnoRules = () => [
    // Validación para DNI (ej. Argentina: 8 dígitos, sin puntos ni guiones)
    check('dni')
        .isInt({ min: 1000000, max: 99999999 })
        .withMessage('DNI debe ser un número de 7 a 8 dígitos'),

    // Validación para nombre (solo letras, mínimo 2 caracteres)
    check('nombre')
        .isAlpha('es-ES', { ignore: ' ' })
        .withMessage('El nombre debe contener solo letras')
        .isLength({ min: 2, max: 50 })
        .withMessage('El nombre debe tener entre 2 y 50 caracteres'),

    // Validación para apellido (solo letras, mínimo 2 caracteres)
    check('apellido')
        .isAlpha('es-ES', { ignore: ' ' })
        .withMessage('El apellido debe contener solo letras')
        .isLength({ min: 2, max: 50 })
        .withMessage('El apellido debe tener entre 2 y 50 caracteres'),

    check('anio_ingreso')
        .isInt().withMessage('El año de ingreso debe ser un entero'),
       
    check('curso')
        .matches(/^[A-Z][1-9]$/).withMessage('El curso debe ser una letra mayúscula seguida de un número del 1 al 9')

];

   
  
  

// y el atrapador de errores por otro lado
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = { validate, rulesUser, alumnoRules };
