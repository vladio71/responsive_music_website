import React from 'react';
import './styles/global.css'
import css from './styles/Home.module.css';
import {useEffect, useRef, useState} from "react";
import FooterLink from "./Components/link";
import Select from "./Components/Select";
import Navigation, {ColumnNavigation} from "./Components/Navigation";
import LogoComponent from "./Components/logoComponent";
import Arrow from "./Components/Arrow";


const App = () => {

    const [lastTopScroll, setLastTopScroll] = useState(0)
    const [isNavActive, setIsNavActive] = useState(false)
    const [animate, setAnimate] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const stickyNav = useRef(null)
    const color = isModalActive ? 'white' : 'black'


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastTopScroll, stickyNav, isNavActive])

    useEffect(() => {

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [modalShow, typeof window !== 'undefined' ? window.innerWidth : 0])
    useEffect(() => {
        handleResize()
    }, [typeof window !== 'undefined' ? window.innerWidth : 0])

    function handleScroll() {
        const scrollTopPosition = window.pageYOffset
        const delta = scrollTopPosition - lastTopScroll

        if (scrollTopPosition > lastTopScroll) {
            if (delta > 15 && isNavActive) {
                setIsNavActive(false)
                stickyNav.current.animate([
                    {
                        position: 'sticky',
                        top: '0',
                        opacity: 1
                    },
                    {
                        position: 'relative',
                        top: '-3rem',
                        opacity: 0
                    }
                ], {
                    duration: 100,
                    iterations: 1,
                })
                stickyNav.current.style.position = 'relative'
            }
        } else if (scrollTopPosition < lastTopScroll) {
            if (delta < 40 && !isNavActive) {
                setIsNavActive(true)
                stickyNav.current.style.position = 'sticky'
                stickyNav.current.animate([
                    {
                        top: '-3rem',
                        opacity: 0
                    },
                    {
                        top: '0',
                        opacity: 1
                    }
                ], {
                    duration: 200,
                    iterations: 1,
                })
            }
        }

        setLastTopScroll(scrollTopPosition <= 0 ? 0 : scrollTopPosition)
    }


    function getWindowWidth() {
        return Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
        );
    }

    function handleResize() {
        if (getWindowWidth() > 1200) {
            if (modalShow)
                setModalShow(false)
        } else {
            if (!modalShow)
                setModalShow(true)
        }
    }

    function handleAnimationDelay() {
        if (isModalActive) {
            setAnimate(true)
            setTimeout(() => {
                setIsModalActive(false)
                setAnimate(false)
            }, 280)
        } else {
            setIsModalActive(true)
        }
    }

    return (

        <main className={css.container}>

            <header>
                <nav className={css.flexNavigation}>
                    <LogoComponent isModalActive={isModalActive}/>
                    {modalShow ?
                        <>
                            {/*style={{zIndex: 10, position: 'absolute'}}*/}
                            <span
                                onClick={handleAnimationDelay}
                                style={{zIndex: '10', color: `${color}`}}>
                                <div style={{position: 'relative', display: 'inline-block', width: '100px'}}>
                                Menu
                                    <Arrow open={isModalActive}/>
                                </div>
                            </span>
                            {isModalActive &&

                            <ColumnNavigation animate={animate} active={isModalActive}/>
                            }
                        </>
                        :
                        <>
                            <Navigation/>
                        </>
                    }

                </nav>
            </header>
            <div className={css.divider}></div>
            <nav ref={stickyNav} className={css.stickyNavigation}>

                <div className={css.orange}>
                    About
                </div>
                <div>
                    Jobs
                </div>
                <div>
                    Apprenticeships
                </div>
            </nav>

            <div className={`${css.largeImage} ${css.Music}`}>
                <h1 className={css.mainCaption}>
                    Ableton
                </h1>
            </div>
            <div className={css.textBlock}>
                <div>
                    <p className={css.headText}>
                        We make Live, Push and Link — unique software and hardware for music creation and performance.
                        With
                        these products, our community of users creates amazing things.
                    </p>
                    <p className={css.captionText}>
                        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are
                        used by
                        a community of dedicated musicians, sound designers, and artists from across the world.
                    </p>
                </div>
            </div>

            <div className={css.PhotoCollage}>
                <div className={`${css.yellowBack} ${css.collageBack}`}>
                </div>
                <div className={`${css.firstMusic} ${css.collagePhoto}`}>
                </div>
                <div className={`${css.secondMusic} ${css.collagePhoto}`}>
                </div>
            </div>


            <div className={css.textBlock}>
                <div>
                    <p className={css.headText}>

                        Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s
                        incredibly rewarding.
                    </p>
                    <p className={css.captionText}>
                        We feel the same way about making Ableton products. The driving force behind Ableton is our
                        passion
                        for what
                        we make, and the people we make it for.
                    </p>
                </div>

            </div>
            <div className={css.videoContainer}>
                <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                        src="https://www.youtube.com/embed/vvvvcpwFw5o?autoplay=0"
                        frameBorder="0"/>
            </div>
            <div className={css.textBlock}>
                <div>
                    <p className={css.headText}>
                        We are more than 350 people from 30 different countries divided between our headquarters in
                        Berlin
                        and our offices in Los Angeles and Tokyo.
                    </p>
                    <p className={css.captionText}>
                        Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day.
                        We
                        come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are
                        self-taught, and most of us are somewhere in between. What connects us is the shared belief that
                        each of us has the skills and knowledge to contribute to something big: helping to shape the
                        future
                        of music culture.
                    </p>
                </div>
            </div>


            <div className={css.PhotoCollage} style={{height: '80vw'}}>
                <div className={`${css.greenBack} ${css.collageBack}`}/>
                <div className={`${css.firstMedia} ${css.collagePhoto}`}/>
                <div className={`${css.secondMedia} ${css.collagePhoto}`}/>
                <div className={`${css.thirdMedia} ${css.collagePhoto}`}/>

            </div>


            <div className={css.textBlock}>
                <div>
                    <p className={css.headText}>

                        We believe it takes focus to create truly outstanding instruments. We only work on a few
                        products
                        and we strive to make them great.
                    </p>
                    <p className={css.captionText}>
                        Rather than having a one-size-fits-all process, we try to give our people what they need to work
                        their magic and grow. We’ve learned that achieving the best results comes from building teams
                        that
                        are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t
                        always agree with each other, but opinion and debate are valued and openly encouraged.
                    </p>
                </div>
            </div>

            <div className={`${css.largeImage} ${css.Media}`}/>

            <div className={css.textBlock}>
                <div>
                    <p className={css.headText}>

                        We’re passionate about what we do, but we’re equally passionate about improving who we are.

                    </p>
                    <p className={css.captionText}>
                        We work hard to foster an environment where people can grow both personally and professionally,
                        and
                        we strive to create a wealth of opportunities to learn from and with each other.
                    </p>
                    <p className={css.captionText}>
                        Alongside an internal training program, employees are actively supported in acquiring new
                        knowledge
                        and skills, and coached on applying these in their daily work. In addition, staff-organized
                        development and music salons are a chance to discuss new technologies, production techniques and
                        best practices.
                    </p>
                </div>
            </div>

            <div className={css.PhotoCollage}>
                <div className={`${css.purpleBack} ${css.collageBack}`}/>
                <div className={`${css.firstMeet} ${css.collagePhoto}`}/>
                <div className={`${css.secondMeet} ${css.collagePhoto}`}/>

            </div>


            <div className={css.textBlock}>
                <div>
                    <p className={css.headText}>
                        We want our employees to love it here. Since we’re looking for exceptional talent from around
                        the
                        world, we will do everything we can to make your transition as easy as possible.

                    </p>
                    <p className={css.captionText}>
                        If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you
                        with free German or English lessons. Plus, working in Germany means you can expect comprehensive
                        health insurance for you and your family, as well as generous maternity and paternity leave.
                        Office
                        hours are flexible, but it’s not all work; we have several company and team outings throughout
                        the
                        year as well as a variety of fun, informal small-group activities.
                    </p>
                </div>
            </div>

            <div className={css.InfoCard}>
                <div className={css.cardPhoto}/>
                <div className={css.cardCaption}>
                    <div className={css.headText} style={{width: '20rem'}}>
                        We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d
                        like to be a part of it, please join us.
                        <div className={css.link}>
                            See latest jobs
                            <div className={css.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1024 1024">
                                    <path fill="currentColor"
                                          d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/>
                                </svg>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.divider}/>

            <section className={css.footer}>
                <div className={css.largeCaption}>
                    Ableton
                </div>
                <div className={css.feetBox}>

                    <div className={css.feet}>
                        <div className={css.inputContainer}>
                            <p>
                                Sign up to our newsletter
                                Enter your email address to stay up to date with the latest offers, tutorials,
                                downloads,
                                surveys and more.
                            </p>
                            <div className={css.inputBox}>
                                <input type={'text'} placeholder={"Email Address"} className={css.customInput}/>
                                <div className={css.emailButton}>
                                    SignUp
                                </div>
                            </div>
                        </div>

                        <div>
                            <FooterLink text={'Register Live or Push'}/>
                            <FooterLink text={'About Ableton'}/>
                            <FooterLink text={'Jobs'}/>

                        </div>
                        <div>
                            <h3>
                                Education
                            </h3>
                            <FooterLink text={'Offers for students and teachers'}/>
                            <FooterLink text={'Ableton for the Classroom'}/>
                            <FooterLink text={'Ableton for Colleges and Universities'}/>
                        </div>
                        <div>
                            <h3>
                                Community
                            </h3>
                            <FooterLink text={'Find Ableton User Groups'}/>
                            <FooterLink text={'Find Certified Training'}/>
                            <FooterLink text={'Become a Certified Trainer'}/>

                        </div>
                        <div>
                            <h3>
                                Language and Location
                            </h3>
                            <Select options={['responsive', 'Ipsum', 'Present']}/>
                            <Select options={['layout', 'Lorem', 'the']}/>

                        </div>

                    </div>

                    <div className={css.footerNavigation}>
                        {/*<div className={css.footerItems}>*/}
                        <div className={css.footerItem}>
                            Contact
                        </div>
                        <div className={css.footerItem}>
                            UsPress
                        </div>
                        <div className={css.footerItem}>
                            ResourcesLegal
                        </div>
                        <div className={css.footerItem}>
                            InfoPrivacy
                        </div>
                        <div className={css.footerItem}>
                            PolicyCookie
                        </div>
                        <div className={css.footerItem}>
                            SettingsImprint
                        </div>
                        {/*</div>*/}
                        <div className={`${css.footerItem} ${css.foterCaption}`}>
                            Made in Berlin
                            <div style={{transform: 'scale(.7)'}}>
                                <LogoComponent/>
                            </div>
                        </div>
                    </div>

                </div>


            </section>


        </main>

    );
}

export default App