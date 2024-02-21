import React from 'react'
import { Link } from 'react-router-dom'
import './PrimaryButton.scss'

function PrimaryButton(props) {

    const title = props.title;
    const link = props.link;

    if(props.type === 'submit') return (
        <section className='primaryButton'>
            <img className='leftButton' src="/svg/PrimaryButton/left.svg" alt="" />
            <section className='primaryButtonWrapper'>
                <img className='topButton' src="/svg/PrimaryButton/top.svg" alt="" />
                <section className='primaryButtonCenter'>
                    <img className='leftButtonCenter' src="/svg/PrimaryButton/Center/left.svg" alt="" />
                    <section className='primaryButtonCenterWrapper'>
                        <img className='topButtonCenter' src="/svg/PrimaryButton/Center/top.svg" alt="" />
                        <button type='submit' className='primaryButtonMiddle'>
                            {title}
                        </button>
                        <img className='bottomButtonCenter' src="/svg/PrimaryButton/Center/bottom.svg" alt="" />
                    </section>
                    <img className='rightButtonCenter' src="/svg/PrimaryButton/Center/right.svg" alt="" />
                </section>
                <img className='bottomButton' src="/svg/PrimaryButton/bottom.svg" alt="" />
            </section>
            <img className='rightButton' src="/svg/PrimaryButton/right.svg" alt="" />
        </section>
    )

    return (
        <Link to={link}>
            <section className='primaryButton'>
                <img className='leftButton' src="/svg/PrimaryButton/left.svg" alt="" />
                <section className='primaryButtonWrapper'>
                    <img className='topButton' src="/svg/PrimaryButton/top.svg" alt="" />
                    <section className='primaryButtonCenter'>
                        <img className='leftButtonCenter' src="/svg/PrimaryButton/Center/left.svg" alt="" />
                        <section className='primaryButtonCenterWrapper'>
                            <img className='topButtonCenter' src="/svg/PrimaryButton/Center/top.svg" alt="" />
                            <button className='primaryButtonMiddle'>
                                {title}
                            </button>
                            <img className='bottomButtonCenter' src="/svg/PrimaryButton/Center/bottom.svg" alt="" />
                        </section>
                        <img className='rightButtonCenter' src="/svg/PrimaryButton/Center/right.svg" alt="" />
                    </section>
                    <img className='bottomButton' src="/svg/PrimaryButton/bottom.svg" alt="" />
                </section>
                <img className='rightButton' src="/svg/PrimaryButton/right.svg" alt="" />
            </section>

        </Link>
    )
}

export default PrimaryButton