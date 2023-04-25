
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export default function CustomerReview() {
  const reviewCards = [{
    src: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_crop,w_50,h_50,g_face/r_max,c_scale,w_80/f_auto,q_100/v1681371071/pexels-pixabay-39866_dzld9t.jpg',
    alt: 'A person writing',
    review: "I recently purchased a new sofa from this furniture ecommerce website and I couldn't be happier with my purchase! The website was easy to navigate and had a wide variety of options to choose from.",
    width: 70,
    height: 29,
    name: 'John Doe',
    title: 'Manager'
  },
  {
    src: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_crop,w_50,h_50,g_face/r_max/c_scale,w_80/f_auto,q_100/v1681371039/pexels-andrea-piacquadio-845457_b9irpz.jpg',
    alt: 'A person standing and looking to a direction',
    review: "The ordering process was straightforward and the delivery was quick and efficient. ",
    width: 70,
    height: 30,
    name: 'Chima Anyaso',
    title: 'Software Engineer'
  },
  {
    src: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_crop,w_50,h_50,g_face/r_max/c_scale,w_80/f_auto,q_100/v1681370985/pexels-andrea-piacquadio-837358_rmtmyd.jpg',
    alt: 'A person standing and looking to a direction',
    review: " I would definitely recommend this website to anyone in the market for furniture. Overall, a great experience and a satisfied customer!",
    width: 70,
    height: 29,
    name: 'Raphael Okoye',
    title: 'Interior Designer'
  },
  {
    src: 'https://res.cloudinary.com/dvcx5l1vb/image/upload/c_crop,w_50,h_50,g_face/r_max/c_scale,w_80/f_auto,q_100/v1681370950/pexels-andrea-piacquadio-762080_vbvjwp.jpg',
    alt: 'A woman reading',
    review: " The quality of the sofa is top-notch and exactly what I was looking for",
    width: 70,
    height: 29,
    name: 'Harry Edwards',
    title: 'Interior Designer'
  }]
  return (
    <article className="review-section">
      <h2>Let's see what our customers say</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviewCards.map((card, index) => (
          <SwiperSlide key={index}>
            <article className="review-cards">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="quote-icon"><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" /></svg>
                <p>{card.review}</p>
                <div className="bio-section">
                  <div className="profile-pics">
                    <img src={card.src} alt={card.alt} width={card.width} height={card.height} loading="lazy" />
                  </div>
                  <div>
                    <span>{card.name}</span>
                    <span>{card.title}</span>
                  </div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}