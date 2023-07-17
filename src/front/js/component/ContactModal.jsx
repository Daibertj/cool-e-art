import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { SocialIcon } from 'react-social-icons'

function ContactModal({ alias }) {
    const { store } = useContext(Context)
    const { allUsersData } = store
    const ilustratorVisited = allUsersData.find((user) => user.alias === alias)
    console.log("este es", ilustratorVisited)

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Mis Redes</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black text-center">
                        {ilustratorVisited && (
                            <>
                                {ilustratorVisited.facebook && (
                                    <h5>
                                        Facebook
                                        <span className="badge">
                                            <SocialIcon network="facebook" url={ilustratorVisited.facebook} />
                                        </span>
                                    </h5>
                                )}
                                {ilustratorVisited.instagram && (
                                    <h5>
                                        Instagram
                                        <span className="badge">
                                            <SocialIcon network="instagram" url={ilustratorVisited.instagram} />
                                        </span>
                                    </h5>
                                )}
                                {ilustratorVisited.twitter && (
                                    <h5>
                                        Twitter
                                        <span className="badge">
                                            <SocialIcon network="twitter" url={ilustratorVisited.twitter} />
                                        </span>
                                    </h5>
                                )}
                            </>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactModal