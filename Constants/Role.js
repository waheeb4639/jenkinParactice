function define(name, value) {
  Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
  });
}

// Roles
define("SUPER_SUPER_ADMIN", "Super_Super_Admin");
define("SUPER_ADMIN", "Super_Admin");
define("ADMIN", "Admin");
define("HR", "hr");
define("EMPLOYEE", "Employee");
define("SUPPLICANT", "Supplicant");
