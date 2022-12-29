import Carousel from 'react-bootstrap/Carousel';
function AnnouncementCarousel() {
  return (
    <Carousel controls={false} fade={true} indicators={false}>
      <Carousel.Item interval={1000}>
        <p>Services now available in Temecula and Menifee areas!</p>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <p>We are actively hiring for new positions! Click here to explore our openings</p>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <p>We offer ABA, Speech Therapy, OT, and a variety of other developmental therapies!</p>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <p>Want to speak to an enrollment specialist? Call 123-456-7890 or make an appointment today!</p>
      </Carousel.Item>
    </Carousel>
  )
}
export default AnnouncementCarousel;
