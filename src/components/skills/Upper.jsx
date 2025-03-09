import React from 'react'

const Upper = () => {
    return (
        <>
            <div className='skills__content'>
                <h3 className='skills__title'>
                    <i className='uil uil-brackets-curly'></i> Frontend Development</h3>

                <div className='skills__box'>
                    <div className='skills__group'>
                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>HTML/CSS</h3>
                                <span className='skills__level'>Advance</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>JavaScript</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>React</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Taiwind</h3>
                                <span className='skills__level'>Advance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skills__content'>
                <h3 className='skills__title'>
                    <i className='uil uil-server-connection'></i> Backend Development</h3>

                <div className='skills__box'>
                    <div className='skills__group'>
                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>NodeJS</h3>
                                <span className='skills__level'>Advance</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>Express/NestJS</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>MongoDB/PostgreSQL</h3>
                                <span className='skills__level'>Intermediate</span>
                            </div>
                        </div>

                        <div className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>
                                    Prisma ORM</h3>
                                <span className='skills__level'>Beginner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upper