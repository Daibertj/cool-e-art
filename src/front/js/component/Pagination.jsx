import React from 'react'

function Pagination({ creatorsPerPage, currentPage, setCurrentPage, totalPages }) {

    // Función para cambiar a la página anterior
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    // Función para cambiar a la página siguiente
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center ">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link btn btn-dark bg-black text-white" onClick={goToPrevPage}>
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map((pageNumber) => (
                        <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                            <button className=" btn btn-dark bg-black page-link text-white" onClick={() => setCurrentPage(pageNumber)}>
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link btn btn-dark bg-black text-white" onClick={goToNextPage}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination