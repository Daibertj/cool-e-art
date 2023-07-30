import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { SocialIcon } from 'react-social-icons'

function ContactModal({ alias }) {
    const { store } = useContext(Context)
    const { allUsersData } = store
    const ilustratorVisited = allUsersData.find((user) => user.alias === alias)


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">My Social Media</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black text-center">
                        {ilustratorVisited && (
                            <>
                                {ilustratorVisited.facebook && (
                                    <h5 >
                                        <a href={`https://www.facebook.com/${ilustratorVisited.facebook}`}>Facebook </a>
                                        <span className="badge">
                                            <SocialIcon network="facebook" url={`https://www.facebook.com/${ilustratorVisited.facebook}`} />
                                        </span>
                                    </h5>
                                )}
                                {ilustratorVisited.instagram && (
                                    <h5 >
                                        <a href={`https://www.instagram.com/${ilustratorVisited.instagram}`} > Instagram</a>
                                        <span className="badge">
                                            <SocialIcon network="instagram" url={`https://www.instagram.com/${ilustratorVisited.instagram}`} />
                                        </span>
                                    </h5>
                                )}
                                {ilustratorVisited.twitter && (
                                    <h5>
                                        <a href={`https://www.twitter.com/${ilustratorVisited.twitter}`} >Twitter</a>
                                        <span className="badge">
                                            <SocialIcon network="twitter" url={`https://www.twitter.com/${ilustratorVisited.twitter}`} />
                                        </span>
                                    </h5>
                                )}
                                {!ilustratorVisited.facebook && !ilustratorVisited.instagram && !ilustratorVisited.twitter && (
                                    <h5 className='text-white'>No Social Media yet registered but reach me at  {ilustratorVisited.email}</h5>
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