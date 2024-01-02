import React, { useContext } from 'react'
import Poster from '../Assets/Poster.png'
import videoICON from '../Assets/onDemandVideo.png'
import chatICON from '../Assets/chat.png'
import { AppContext } from '../ContextStore/ContextStore'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function HomePage() {
    const { Data } = useContext(AppContext);


    return (
        <section className='home__Section'>

            <div className="homeSection__HeaderContainer">
                <img src={Poster} alt="Poster" className='homeSection__HeaderPoster' />
                <h3 className='HeaderContainer_InstructorName HeaderContainer__Text'>{Data.instructor.name}</h3>
                <h1 className="HeaderContainer_CourseTitle HeaderContainer__Text">{Data.course.title}</h1>
            </div>

            <div className="homeSection__mainContainer">
                <div className="homeSection_LeftContainer">

                    <div className="LeftContainer__TabsContainer">
                        <p className="TabsContainer_tabName active_tabName">about</p>
                        <p className="TabsContainer_tabName">instructor</p>
                        <p className="TabsContainer_tabName">reviews</p>
                    </div>

                    <div className="LeftContainer__aboutCourseBox">

                        <h2 className="aboutCourseBox__title">About the course</h2>
                        <p className='aboutCourseBox_about'>
                            ut enim ad minima veniam. quis nostrum exercitatiooem ullarn
                            suscsprt jabonosam. nisi ut aliqutd ex ea
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea
                            voluptate veut esse quam molesOae consequatv. urn qui
                            dolorem eum tugiat quo voluptas nuna pariatur? <br /> <br />

                            Sed ut unde omnis isle natus error sit voluptatem
                            accusanourn dolorernque laudanfrum. totam rem aperiarn.
                            ipsa quae ab Do nventore veritatis et quasi architecto beatae vitae
                            dicta sunt expiicabo. <br /> <br />

                            Temponbus autern quibusdam et aut offcsis debitis aut rerum
                            necessitatibus eveniet ut et voiuptates repudindae Sint et
                            moiest'ae non recusandae. 'taque earum rerum tenetur a
                            sapiente delectus ut aut reiciendis wluptat bus rtuiores alias
                            consequatur aut perfereros doloribus asperiores repellat. <br /> <br />
                        </p>
                    </div>

                    <div className="LeftContainer_expectBox">
                        <h2 className="expectBox__Title">What to expect from the course</h2>

                        <ul className='expectBox_List'>
                            <li className='expectBox_ListItem'>Learn to manage your relationships</li>
                            <li className='expectBox_ListItem'>Better communication</li>
                            <li className='expectBox_ListItem'>Time management</li>
                            <li className='expectBox_ListItem'>Forgiveness</li>
                        </ul>

                    </div>

                    <div className="LeftContainer_KeyTopicBox">
                        <h3 className='KeyTopic__title'>Key Topics Covered</h3>
                        <p className="KeyTopic__titleDesc">Tempor&as wtem qujbusdam et ut offices debit's aut rerum necessitatibus eveniet ut et voiuptates repudiÜXiae Sint et non recusandee. ttaque arum NC tenetur asapiente delectus ut aut reiciendis voluptatbus maiores alias consequatur aut perfereoots dolonbus aspenores repellat.</p>

                        <ul className='expectBox_List'>
                            <li className='expectBox_ListItem'><b>10 written and audio sessions</b> guide you in the of numbers so that you can easily receive their signs and messages.</li>

                            <li className='expectBox_ListItem'><b>Intuitive exercises and homework</b> walk you through the energies and values of numbers and number sequences so you can become your own authority.</li>

                            <li className='expectBox_ListItem'><b>A handy reference</b> to numerical meanings so you can uncover your soul's gifts, challenges, lessons, and purpose - receive spritual guidance along your path.</li>

                            <li className='expectBox_ListItem'><b>Expert techniques</b> for manifestation offer simple ways to user numbers to co-create with the universe.</li>
                        </ul>


                    </div>

                </div>

                <div className="homeSection_RightContainer">
                    <div className="courseFees_popup">
                        <h2 className="courseFees_popupTitle">Course fees</h2>
                        <h2 className="courseFees_priceTag">₹{Data.course.fee.amount}</h2>
                        <h4 className='courseFees_secondaryTitle'>what's included</h4>

                        <p className="courseFees_includedItem"><img src={videoICON} alt="ICON" className='includedItem_ICON' /> {Data.course.inclusions.on_demand_videos} on-demand videos</p>

                        <p className="courseFees_includedItem"><img src={chatICON} alt="ICON" className='includedItem_ICON' />{Data.course.inclusions.live_qa_sessions && `Live Q&A sessions with ${Data.instructor.name}`}</p>

                        <p className="courseFees_includedItem"><img src={chatICON} alt="ICON" className='includedItem_ICON' /> {Data.course.inclusions.whatsapp_community && ` An active whatsapp community`}</p>

                        <button className='coursefees_PopupBUtton'>Registred Today</button>
                    </div>
                </div>
            </div>


            <h2 className="homeSection__aboutInstructorHeader">About the Instructor</h2>
            <div className="homeSection__aboutInstructorContainer">
                <img src="https://pbs.twimg.com/profile_images/1650049387224080384/WAVo3FHK_400x400.jpg" alt="InstructorProfile" className='instructorProfile_image' />

                <p className='aboutInstructorContainer__instructorDescription'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,. totam rem apetiam. eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <p className='aboutInstructorContainer__instructorDescription'>At vero eos et accusamus et iusto odio digmssimos ducimus qui blanditiis praesentiurn voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui offc.a deserunt mollitja animi. id est labarum et dolorum fuga.</p>
            </div>

            <div className="homeSection__SocialSiteLInks">
                <a href="www.facebook.com" target='_blank' className='SocialSite_Item'><i className="fa-brands fa-facebook socialIcon"></i> Facebook</a>

                <a href="www.facebook.com" target='_blank' className='SocialSite_Item'><img src="https://faithapp.in/icons/twitter.svg" alt="X" /> Twitter</a>

                <a href="www.facebook.com" target='_blank' className='SocialSite_Item'><i className="socialIcon fa-brands fa-youtube"></i> YouTube</a>

                <a href="www.facebook.com" target='_blank' className='SocialSite_Item'><i className="socialIcon fa-brands fa-square-instagram"></i> Instagram</a>
            </div>

            <div className="homeSection__testimonialContainer">
                <Carousel className='testimonialSlider_container'>
                    <div className='testimonialBox'>
                        <p className='testimonialBox_Title'>"But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system."</p>
                    </div>

                    <div className='testimonialBox'>
                        <p className='testimonialBox_Title'>"But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system."</p>

                    </div>

                    <div className='testimonialBox'>
                        <p className='testimonialBox_Title'>"But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system."</p>

                    </div>

                    <div className='testimonialBox'>
                        <p className='testimonialBox_Title'>"But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system."</p>

                    </div>
                    
                    <div className='testimonialBox'>
                        <p className='testimonialBox_Title'>"But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system."</p>

                    </div>

                </Carousel>
            </div>



        </section>
    )
}

export default HomePage
