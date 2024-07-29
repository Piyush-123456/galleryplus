// Import necessary modules and styles
"use client";
import React, { useEffect, useState } from "react";
import { asyncAddImages } from "@/store/actions/galleryactions";
import { removeerror } from "@/store/reducers/gallerReducer";
import { useDispatch, useSelector } from "react-redux";
import css from './page.module.css';
import Link from "next/link";
import 'remixicon/fonts/remixicon.css';

const shuffleArray = (array) => {
    // Create a copy of the original array
    const shuffledArray = [...array];

    // Shuffle the copy using Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
};

const Page = () => {
    const { images, errors } = useSelector((state) => state.gallerReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncAddImages());
    }, []);

    if (errors) {
        alert(errors);
        dispatch(removeerror());
    }

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Shuffle the images array randomly
    const shuffledImages = shuffleArray(images);

    // Inline CSS Styles
    const mainStyle = {
        // Your styles for the main content
    };

    const footerStyle = {
        marginTop: "-250px",
        color: '#fff',
        backgroundImage: 'linear-gradient(90deg, #373737 0%, #59515E 100%)',
        position: 'relative',
        height: '350px',
        top: '350px',
        borderTopLeftRadius: '70px',
        fontSize: '0.8rem',
    };

    const mainContainerStyle = {
        // Your styles for the main container
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        margin: '0 auto',
        maxWidth: '1200px',
    };

    const logoRowStyle = {
        // Your styles for the logo row
        flex: '1',
        marginRight: '20px',
    };

    const footerHeaderStyle = {
        fontSize: '1.5rem',
        marginBottom: '20px',
    };

    const manikLogoStyle = {
        width: '120px',
    };

    const logoDescriptionStyle = {
        // Your styles for the logo description
    };

    const knowMoreButtonStyle = {
        // Your styles for the "Know More" button
        display: 'block',
        marginTop: '10px',
        textDecoration: 'none',
        backgroundColor: '#fff',
        color: 'black',
        padding: '5px 10px',
        borderRadius: '5px',
    };

    const officeRowStyle = {
        // Your styles for the office row
        flex: '1',
        marginRight: '20px',
    };

    const officeDescriptionStyle = {
        // Your styles for the office description
    };

    const officeEmailStyle = {
        // Your styles for the office email
        display: 'block',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '1rem',
        marginTop: '10px',
    };

    const officePhoneNumberStyle = {
        fontSize: '1rem',
        fontWeight: '500',
    };

    const linkRowStyle = {
        // Your styles for the link row
        flex: '1',
        marginRight: '20px',
    };

    const linkDescriptionStyle = {
        // Your styles for the link description
    };

    const footerLinksStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
        display: 'block',
        marginBottom: '10px',
    };

    const newsletterRowStyle = {
        // Your styles for the newsletter row
        flex: '1',
    };

    const newsletterDescriptionStyle = {
        // Your styles for the newsletter description
    };

    const subscribeStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const emailInputStyle = {
        border: 'none',
        padding: '5px',
        borderBottom: '1px solid #fff',
        backgroundColor: 'transparent',
        fontSize: '0.8rem',
        marginRight: '10px',
    };

    const iconsStyle = {
        // Your styles for the icons
    };

    const copyrightStyle = {
        textAlign: 'center',
        marginTop: '20px',
    };

    const hrStyle = {
        width: '90%',
        margin: '2px auto',
        opacity: '40%',
        border: '0.01px solid white',
    };

    return (
        <div style={{ position: "relative", overflowX:"hidden", height:'100vh' }}>
            {/* Hero Section */}
            <section
                style={{
                    background: "url('https://images.unsplash.com/photo-1528190240347-03ccaffd0674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHBob3RvZ3JhcGhlciUyMGJsYWNrfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=70') center/cover no-repeat",
                    color: "white",
                    padding: "100px 0",
                    height: "720px",
                    textAlign: "center",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* Semi-Black Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        zIndex: "0",
                    }}
                ></div>

                {/* Navbar */}
                <nav
                    style={{
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "10px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        zIndex: "1",
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            textDecoration: "none",
                            fontFamily: "cursive",
                            color: "white",
                            fontSize: "18px",
                            marginLeft: "20px",
                            transition: "all 0.3s ease-in-out",
                            zIndex: "9999999999999999"

                        }}
                    >
                        GalleryPlus
                    </Link>
                </nav>

                <h1
                    style={{ fontFamily: "cursive", fontSize: "55px", marginBottom: "20px" }}
                >
                    Welcome to GalleryPlus
                </h1>
                <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                    Explore stunning images from talented photographers.
                </p>
                <div
                className={css.search}
                    style={{
                        padding: "0px 10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            marginRight: "10px",
                            height: "44px",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "43px",
                            backgroundColor: "white",
                        }}
                    >
                        <i
                            style={{
                                color: "black",
                                fontSize: "23px",
                            }}
                            className="ri-search-line"
                        ></i>
                    </div>
                    <input
                        type="text"
                        placeholder="Search images"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        style={{
                            outline: "none",
                            border: "none",
                            padding: "10px",
                            width: "150px",
                            borderRadius: "5px",
                            marginRight: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            zIndex: "9999999999999999"
                        }}
                    />
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        style={{
                            width:"120px",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            default: "none",
                            outline: "none",
                            zIndex: "9999999999999999"

                        }}
                    >
                        <option
                            style={{ color: "grey" }}
                            value="none"
                        >
                            All Categories
                        </option>
                        <option
                            style={{ color: "grey" }}
                            value="nature"
                        >
                            Nature
                        </option>
                        <option
                            style={{ color: "grey" }}
                            value="architecture"
                        >
                            Architecture
                        </option>
                        <option
                            style={{ color: "grey" }}
                            value="people"
                        >
                            People
                        </option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
            </section>

            {/* Rest of your content */}

            <div className={css.main} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {shuffledImages.length > 0 ? (
                    shuffledImages.map((p, index) => (
                        <div
                            className={css.card}
                            key={p.id}
                            style={{
                                width: `${Math.floor(Math.random() * 150) + 350}px`,
                                height: `${Math.floor(Math.random() * 200) + 400}px`,
                                margin: `${index % 2 === 0 ? '10px' : '10px'}`, // Add margin every other card
                            }}
                        >
                            <img className={css.img} src={`https://picsum.photos/id/${p.id}/5000/3333`} alt="" />
                            <div className={css.content}>
                                <h4>
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                        href={`${p.id}`}
                                    >
                                        {" "}
                                        {p.author}{" "}
                                    </Link>
                                </h4>
                                <span>Brașov, Romania</span>
                            </div>
                            <div className={css.cover}></div>
                            <div className={css.shadow}></div>
                        </div>
                    ))
                ) : (
                    <button
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "150px",
                            transform: "translate(-50%,50%)",
                        }}
                        className="btn btn-primary"
                        type="button"
                        disabled
                    >
                        <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        Loading...
                    </button>
                )}
            </div>

            {/* Footer */}
            <footer style={footerStyle}>
                <div style={mainContainerStyle}>
                    <div style={logoRowStyle}>
                        <div style={footerHeaderStyle}>
                            <img src="https://i.postimg.cc/tgk8X2w7/manik-low-resolution-logo-white-on-transparent-background.png" style={manikLogoStyle} alt="" />
                        </div>
                        <div style={logoDescriptionStyle}>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            <a href="#" style={knowMoreButtonStyle}>Know More</a>
                        </div>
                    </div>
                    <div style={officeRowStyle}>
                        <div style={footerHeaderStyle}>
                            <h3>Office</h3>
                        </div>
                        <div style={officeDescriptionStyle}>
                            <p>here are <br /> many variations of passages<br />of Lorem Ipsum<br />available</p>
                            <a href="#" style={officeEmailStyle}>manikmaity.haker2003@gmail.com</a>
                            <p style={officePhoneNumberStyle}>+91-9999999999</p>
                        </div>
                    </div>
                    <div style={linkRowStyle}>
                        <div style={footerHeaderStyle}>
                            <h3>Links</h3>
                        </div>
                        <div style={linkDescriptionStyle}>
                            <a href="#" style={footerLinksStyle}>Home</a>
                            <a href="#" style={footerLinksStyle}>About</a>
                            <a href="#" style={footerLinksStyle}>Services</a>
                            <a href="#" style={footerLinksStyle}>Gallery</a>
                            <a href="#" style={footerLinksStyle}>Contact</a>
                        </div>
                    </div>
                    <div style={newsletterRowStyle}>
                        <div style={footerHeaderStyle}>
                            <h3>Newsletter</h3>
                        </div>
                        <div style={newsletterDescriptionStyle}>
                            <div style={subscribeStyle}>
                                <i className="ri-mail-check-fill sub-icon" />
                                <input type="email" placeholder="Enter Email ID" required style={emailInputStyle} />
                                <i className="ri-arrow-right-line sub-icon" />
                            </div>
                            <div style={iconsStyle}>
                                <a href="#"><i className="ri-facebook-fill social-icon"></i></a>
                                <a href="#"><i className="ri-instagram-line social-icon"></i></a>
                                <a href="#"><i className="ri-linkedin-fill social-icon"></i></a>
                                <a href="#"><i className="ri-github-line social-icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={copyrightStyle}>
                    <hr style={hrStyle} />
                    <p>© Copyright 2022 Manik Maity.</p>
                </div>
            </footer>
        </div>
    );
}

export default Page;
