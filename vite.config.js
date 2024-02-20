import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/',

    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                searchResults: resolve(
                    __dirname,
                    'src/searchResults/index.html'
                ),
                LocationDetails: resolve(
                    __dirname,
                    'src/LocationDetails/index.html'
                ),
                PhotoGallery: resolve(__dirname, 'src/PhotoGallery/index.html'),
                favorites: resolve(__dirname, 'src/favorites/index.html'),
                ReloadFavorites: resolve(__dirname, 'src/ReloadFavorites/index.html'),
            },
        },
    },
});
