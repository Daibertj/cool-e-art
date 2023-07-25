import React from 'react'

function Pagination({ creatorsPerPage, currentPage, setCurrentPage, totalCreators }) {
    const totalPages = Math.ceil(totalCreators / creatorsPerPage);

    // Función para cambiar a la página anterior
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Función para cambiar a la página siguiente
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }


    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={goToPrevPage}>
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map((pageNumber) => (
                        <li
                            key={pageNumber}
                            className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
                        >
                            <button className="page-link" onClick={() => setCurrentPage(pageNumber)}
                                disabled={pageNumber === currentPage}>
                                {pageNumber}
                            </button>



                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={goToNextPage}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination