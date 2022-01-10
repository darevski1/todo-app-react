import React from 'react';
import "./pricing.css"
const Pricing = () => {
    return (
        <div>
           <div className='pricing__page-intro'>
               <div class="container">
                    <h1>Find the plan that’s right for you</h1>
                    <p>Start for free, or as low as US$3 a month.</p>
                </div>
                <div className='image__container'>
                    <img src='../../../assets/pricing.svg' alt='pricing image' />
                </div>
            </div>
            <div className='pricing__plans'>
               <div class="container">
                    <div className='box__plan'>
                        <div className='heading__box'>
                                <h1>Free</h1>
                                <p>For Starter</p>
                                <h2>0 <span>$</span></h2>
                        </div>
                    </div>
                    <div className='box__plan'>
                        <div className='heading__box'>
                                <h1>Free</h1>
                                <p>For power users</p>
                                <h2>3<span>$</span></h2>
                        </div>
                    </div>
                    <div className='box__plan'>
                        <div className='heading__box'>
                                <h1>Free</h1>
                                <p>For Businnes</p>
                                <h2>10 <span>$</span></h2>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Pricing;