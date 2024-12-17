
// [1, 2, 3, 4, 5,..., 7]
// [1, 2, 3,..., 48, 49, 50]
export const generatePaginationNumbers = ( currentPage: number, totalPages: number) => {
    // Si el numero total de paginas es 7 o menos
    // Vamos a mostrar todas las paginas sin puntos suspensivos
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Si la pagina actual esta entre las primeras 3 paginas
    // Mostrar las primer 3, puntos suspensivos, y las ultimas 2

    if (currentPage <=  3) {
        return [1, 2, 3, '...', totalPages-1,  totalPages];
    }

    // Si la página actual está entre las últimas 3 páginas
    // mostrar las primeras 2, puntos suspensivos, las últimas 3

    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages-2, totalPages-1, totalPages];
    }

    // Si la página actual está en otro lugar medio
    // mostrar la primera página, puntos suspensivos, la página actual y vecinos

    return [
        1, 
        '...', 
        currentPage -1,  
        currentPage,
        currentPage + 1, 
        '...',
        totalPages
    ];


}