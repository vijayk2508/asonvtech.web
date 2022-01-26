/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import { link } from "../../../routes/routeLink";

function BlogCard(props) {
  const { id, title, url, description } = props;
  const history = useHistory()

  function onHandleClick(e) {
    e.preventDefault()
    history.push(`${link.BLOG}/${id}`)
  }

  return (
    <div class="col-lg-4 col-md-6 mb-2-6">
      <article class="card card-style2">
        <div class="card-img">
          <img class="rounded-top" src={url} alt="..." />
          <div class="date">
            <span>15</span>Sep
          </div>
        </div>
        <div class="card-body">
          <h3 class="h5">
            <a onClick={onHandleClick}>{title}</a>
          </h3>
          <p class="display-30">{description}</p>
          <a onClick={onHandleClick} class="read-more">
            read more
          </a>
        </div>
        <div class="card-footer">
          <ul>
            <li>
              <a onClick={onHandleClick}>
                <i class="fas fa-user"></i>Asonv Tech
              </a>
            </li>
            {/* <li>
              <a onClick={onHandleClick}>
                <i class="far fa-comment-dots"></i>
                <span>26</span>
              </a>
            </li> */}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
