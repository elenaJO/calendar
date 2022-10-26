export const getEnvVariables = () => {

	//obtiene las variables de entorno
	// import.meta.env por q falla al hacer el build en vite

	return {
		// ...import.meta.env
		VITE_APP_URL: import.meta.env.VITE_APP_URL
	}
}