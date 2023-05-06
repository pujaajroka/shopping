import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import './about.css'
import Footer from '../../components/Footer/Footer'
import Newsletter from '../../components/Newsletter/Newsletter'

const About = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className='inner-container'>
        <h1>ABOUT</h1>
        <p>

          XTYLES is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
        </p>
        <p>
          Founded in 2018, XTYLES has come a long way from its beginnings in Kalimpong. When we first started out, our passion for providing the best-branded products to every consumer in our neighborhood drove us to start our own business.
        </p>
        <p>
          The world is evolving quick, determined by various shopping propensities and always cutting edge innovation for the customer. Fashion is the biggest of all retail portions and is moving on the web. In addition, the quick development of shopping utilizing cell phones opens new chances. We are all around situated to exploit these long haul basic patterns to assist our clients, accomplices, and investors.
        </p>
        <p>
          We understood then, as we do today, that maintaining our everyday focus on best product on a better price, to provide you the best and satisfying services, here is what we do:
        </p>
        <ul>
          <li> We buy direct from suppliers whenever possible, we bargain hard to get the best price, and then pass the savings on to you.
          </li>
          <li>
            We buy in volume and contract early to get the best prices.
          </li>
          <li>
            Most buyers charge their suppliers fees for putting an item on the shelf. This results in higher prices… so we don’t do it.
          </li>
          <li>
            We keep our costs low—because every penny we save is a penny you save.
          </li>
          <li>
            We provide delivery facilities so that you can save some on your transportation and carrying charges.
          </li>
          <li>
            You can pay utilizing your Visa/Mastercard/Rupay or with cash on delivery as per your conveyance.
          </li>
          <li>
            Our team provide best support and assistance to our customer to complete purchase smoother and easier.
          </li>
        </ul>

        <p>
          To help make life a little easier, we’re offering Delivery grocery items within KALIMPONG. </p>

        <p> We ensure that your time will be saved and you will receive best quality!</p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us.
        </p>
        <p>
          For any questions and queries please reach us at support@xtyles.in or +91 9867969377
        </p>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default About
