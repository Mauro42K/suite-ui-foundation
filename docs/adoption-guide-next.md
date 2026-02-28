# Adopcion en Next.js App Router

1. Copiar `react/` a `src/web/components/suite-auth/`.
2. Crear el mark propio de la app en esa carpeta si no existe.
3. Cambiar `app/(auth)/layout.tsx` para delegar el viewport completo al shell auth.
4. Reemplazar `login`, `forgot-password` y `reset-password` con `SuiteAuthShell`.
5. Mantener la logica de auth, fetch y rutas sin cambios.

## Regla

No importar CSS global nuevo si no es necesario; el shell ya puede funcionar con los componentes vendorizados.
