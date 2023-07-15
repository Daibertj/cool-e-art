import React from 'react'
import { SocialIcon } from 'react-social-icons'

function ContactModal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Mis Redes</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-black text-center">
                        <h5>Facebook
                            <span class="badge ">
                                <SocialIcon network="facebook" />
                            </span>
                        </h5>
                        <h5>Instagram
                            <span class="badge ">
                                <SocialIcon network="instagram" />
                            </span>
                        </h5>
                        <h5>Twitter
                            <span class="badge ">
                                <SocialIcon network="twitter" />
                            </span>
                        </h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactModal