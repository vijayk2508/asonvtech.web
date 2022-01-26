/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Layout from "../../../components/_layout";
import { Blogdata } from '../../../constants/generaldata';
import { link } from '../../../routes/routeLink';
function BlogDetail() {
    const params = useParams()
    const [data, setData] = useState({
        id: -1,
        title: "",
        url: "",
        description: ""
    })

    const history = useHistory()

    useEffect(() => {
        let redirectStatus = true
        if (params?.id) {
            const blogDataById = Blogdata.find(blog => blog.id === parseInt(params?.id))
            if (blogDataById) {
                setData(blogDataById)
                redirectStatus = false
            }
        }

        if (redirectStatus) {
            history.push(link.BLOG)
        }

    }, [params?.id])
    const { id, title, url, description } = data

    return <Layout>
        <div id="main-content" class="blog-page">
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-12 left-box">
                        <div class="card single_post">
                            <div class="body">
                                <div class="img-post">
                                    <img class="d-block img-fluid" src={url} alt="First slide" />
                                </div>
                                <h3><a href="blog-details.html">{title}</a></h3>
                                <p>{description}</p>
                            </div>
                        </div>
                        {/* <div class="card">
                            <div class="header">
                                <h2>Comments 3</h2>
                            </div>
                            <div class="body">
                                <ul class="comment-reply list-unstyled">
                                    <li class="row clearfix">
                                        <div class="icon-box col-md-2 col-4"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                        <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 class="m-b-0">Gigi Hadid </h5>
                                            <p>Why are there so many tutorials on how to decouple WordPress? how fast and easy it is to get it running (and keep it running!) and its massive ecosystem. </p>
                                            <ul class="list-inline">
                                                <li><a href="javascript:void(0);">Mar 09 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="row clearfix">
                                        <div class="icon-box col-md-2 col-4"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Awesome Image" /></div>
                                        <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 class="m-b-0">Christian Louboutin</h5>
                                            <p>Great tutorial but few issues with it? If i try open post i get following errors. Please can you help me?</p>
                                            <ul class="list-inline">
                                                <li><a href="javascript:void(0);">Mar 12 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="row clearfix">
                                        <div class="icon-box col-md-2 col-4"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Awesome Image" /></div>
                                        <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 class="m-b-0">Kendall Jenner</h5>
                                            <p>Very nice and informative article. In all the years I've done small and side-projects as a freelancer, I've ran into a few problems here and there.</p>
                                            <ul class="list-inline">
                                                <li><a href="javascript:void(0);">Mar 20 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h2>Leave a reply <small>Your email address will not be published. Required fields are marked*</small></h2>
                            </div>
                            <div class="body">
                                <div class="comment-form">
                                    <form class="row clearfix">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea rows="4" class="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                            </div>
                                            <button type="submit" class="btn btn-block btn-primary">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div class="col-lg-4 col-md-12 right-box">
                        {/* <div class="card">
                            <div class="body search">
                                <div class="input-group m-b-0">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Search..." />
                                </div>
                            </div>
                        </div> */}
                        <div class="card">
                            <div class="header">
                                <h2>Categories Clouds</h2>
                            </div>
                            <div class="body widget">
                                <ul class="list-unstyled categories-clouds m-b-0">
                                    <li><a href="javascript:void(0);">eCommerce</a></li>
                                    <li><a href="javascript:void(0);">Microsoft Technologies</a></li>
                                    <li><a href="javascript:void(0);">Creative UX</a></li>
                                    <li><a href="javascript:void(0);">Wordpress</a></li>
                                    <li><a href="javascript:void(0);">Angular JS</a></li>
                                    <li><a href="javascript:void(0);">Enterprise Mobility</a></li>
                                    <li><a href="javascript:void(0);">Website Design</a></li>
                                    <li><a href="javascript:void(0);">HTML5</a></li>
                                    <li><a href="javascript:void(0);">Infographics</a></li>
                                    <li><a href="javascript:void(0);">Wordpress Development</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div class="card">
                            <div class="header">
                                <h2>Popular Posts</h2>
                            </div>
                            <div class="body widget popular-post">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="single_post">
                                            <p class="m-b-0">Apple Introduces Search Ads Basic</p>
                                            <span>jun 22, 2018</span>
                                            <div class="img-post">
                                                <img src="https://via.placeholder.com/280x280/87CEFA/000000" alt="Awesome Image" />
                                            </div>
                                        </div>
                                        <div class="single_post">
                                            <p class="m-b-0">new rules, more cars, more races</p>
                                            <span>jun 8, 2018</span>
                                            <div class="img-post">
                                                <img src="https://via.placeholder.com/280x280/87CEFA/000000" alt="Awesome Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h2>Instagram Post</h2>
                            </div>
                            <div class="body widget">
                                <ul class="list-unstyled instagram-plugin m-b-0">
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                    <li><a href="javascript:void(0);"><img src="https://via.placeholder.com/100x100/87CEFA/000000" alt="image description" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h2>Email Newsletter <small>Get our products/news earlier than others, let’s get in touch.</small></h2>
                            </div>
                            <div class="body widget newsletter">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Enter Email" />
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="icon-paper-plane"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </Layout>
}

export default BlogDetail;
