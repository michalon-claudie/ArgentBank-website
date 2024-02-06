import React from 'react';
import '../designs/css/main.css';
import '../designs/scss/Home.scss'
import Header from '../Component/Header'
import Hero from '../Component/Hero'
import Feature from '../Component/Feature'
import iconChat from '../designs/img/icon-chat.webp'
import iconSecurity from '../designs/img/icon-security.webp'
import iconMoney from '../designs/img/icon-money.webp'
import Footer from '../Component/Footer'

function Home(){
    return (
        <>
        <Header/>
        <main>
            <Hero/>
            <section className='features'>
                <h2 className="sr-only">Features</h2>
                <Feature
                srcIcon={iconChat}
                title ="You are our #1 priority"
                description="Need to talk to a representative?
                You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                <Feature
                srcIcon={iconMoney}
                title ="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"/>
                <Feature
                srcIcon={iconSecurity}
                title ="Security you can trust"
                description="We use top of the line encryption to make sure your data and money is always safe."/>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Home;