import React from 'react';
import S from './style.js';
import Footer from "../../layout/Footer.jsx";
import { Link } from 'react-router-dom';


export const PostOrangeList = () => {
    return (
        <div>
         <S.PostOrange>
                <div className='post-box'>
                    <div className='button'>
                        <Link to={"../orange"}><button className='oringe'></button></Link>
                        <Link to={"../gold"}><button className='gold'></button></Link>
                        <Link to={"../gradation"}><button className='gradation'></button></Link>
                        <Link to={"../light-purple"}><button className='lightPurple'></button></Link>
                        <Link to={"../deep-purple"}><button className='deepPurple'></button></Link>
                        <Link to={"../../post"}> <button className='all'>All</button></Link>
                    </div>

                    <p className='all-text'>#Orange</p>

                    <div className="All">
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post10.svg" alt="게시물10" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>고기고기냠냠냠</p>
                            </div>
                        </div>
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post2.svg" alt="게시물2" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>지나 안지나</p>
                            </div>
                        </div>
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post7.svg" alt="게시물7" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>철을 밀면 민철</p>
                            </div>
                        </div>
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post4.svg" alt="게시물4" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>재금이 다음 재은</p>
                            </div>
                        </div>

                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>연을 세우면 세연</p>
                            </div>
                        </div>
                    </div>

                    <div className="All">
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post10.svg" alt="게시물10" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>고기고기냠냠냠</p>
                            </div>
                        </div>
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post2.svg" alt="게시물2" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>지나 안지나</p>
                            </div>
                        </div>
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post3.svg" alt="게시물3" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>철을 밀면 민철</p>
                            </div>
                        </div>
                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post7.svg" alt="게시물7" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>재금이 다음 재은</p>
                            </div>
                        </div>

                        <div className='post'>
                            <img className='AllPost' src="/assets/images/community/post5.svg" alt="게시물5" />
                            <div className='profile-box'>
                                <img className='profile' src="/assets/images/community/profile.svg" alt="프로필" />
                                <p className='nick-name'>연을 세우면 세연</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </S.PostOrange>

              <Footer />
        </div>
    );
};

export default PostOrangeList;