import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaStar } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import treatmentCategories from "../components/Treatment Card/treatmentCategories";
import "./home.css";

function Home() {
  const navigate = useNavigate();
  const { auth } = useAppContext(); // Access auth context
  const videoRef = useRef(null);

  // Fetch the video only for logged-in users
 /* useEffect(() => {
    if (auth.token) {
      fetch("/video", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to load video");
          return response.blob();
        })
        .then((blob) => {
          const videoUrl = URL.createObjectURL(blob);
          videoRef.current.src = videoUrl;
        })
        .catch((error) => console.error(error));
    }
  }, [auth.token]);*/

  const [reviews] = useState([]);

  return (
    <div id="homepage">
      <section className="hero-section">
          <video
            className="hero-video"
            ref={videoRef}
            controls
            autoPlay
            loop
            muted
          >
            <source src={assets.Ads} />
          </video>
          <div className="hero-placeholder">
          </div>
      </section>

      <div className="category-container">
        <section className="treatment-categories">
          <div className="title-treatment-cate">
            <h2>Treatment Categories</h2>
          </div>
          <div className="block-category">
            {treatmentCategories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => navigate(category.path)}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && navigate(category.path)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </section>

        {/* About Our Salon */}
        <section className="about-salon">
          <h2>About Our Salon</h2>
          <p>
            Experience luxury and relaxation at our state-of-the-art beauty
            salon. Our expert stylists and aestheticians are dedicated to
            enhancing your natural beauty and providing a rejuvenating
            experience.
          </p>
          <div className="salon-details">
            <div>
              <h3>Opening Hours</h3>
              <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h3>Contact Information</h3>
              <div className="icon-text">
                <FaPhoneAlt className="icon" />
                <a href="tel:+33610322965" className="link">
                  +33(0) 610322965
                </a>
              </div>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:mymiconseil@gmail.com" className="email-link">
                  mymiconseil@gmail.com
                </a>
              </p>
              <p>13 Rue des Gentilhommieres, 91700 Villiers sur Orge, France</p>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="client-reviews">
          <h2>Client Reviews</h2>
          <p>
            <FaStar style={{ color: "#FFD700" }} />
            <FaStar style={{ color: "#FFD700" }} />
            <FaStar style={{ color: "#FFD700" }} />
            <FaStar style={{ color: "#FFD700" }} />
            <FaStar style={{ color: "#FFD700" }} /> 5 Stars (based on 55
            reviews)
          </p>

          <div className="review-container">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <h4>{review.name}</h4>
                  <p>{review.review_text}</p>
                </div>
              ))
            ) : (
              <p>No reviews available at the moment.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
