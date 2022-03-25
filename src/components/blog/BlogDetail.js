import styles from "./blog.module.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Message from "../message/Message";
import { useParams, useNavigate } from "react-router-dom";

import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { listBlogDetails } from "../../actions/blogActions";
import { BLOG_LIST_FAIL } from "../../constants/blogConstants";


const BlogDetail = ({ match }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const blogId = useParams().id;

  const blogDetails = useSelector(state => state.blogDetails)
  const { loading, error, blog } = blogDetails

  useEffect(() => {
    dispatch(listBlogDetails(blogId));
  }, [dispatch, match]);

  return (
    <div className={styles.blogMainDiv}>
      <div className="container-sm">

      {loading ? <Loading /> : error ? <Message variant='danger'>{error}</Message>
      : (
        <>
          {blog && blog?.length !== 0 ? (

            <div className={styles.blogDiv}>

                <div className={styles.blogInner}>
                <h1>{blog.h1}</h1>
                <div className={styles.blogTime}>
                  <AccessTimeIcon className="text-muted" style={{fontSize: '18px', marginTop: '5px', marginRight: '3px'}}/>
                  <p className="text-muted">{''}{new Date(blog.created).toString().substring(0, 10)}</p>
                </div>
                <hr></hr>
                <p>{blog.paragraph_1}</p>
                <h3>{blog.h2}</h3>
                <p>{blog.paragraph_2}</p>
                <h3>{blog.h3}</h3>
                <p>{blog.paragraph_3}</p>
                <h3>{blog.h4}</h3>
                <p>{blog.paragraph_4}</p>
                <h3>{blog.h5}</h3>
                <p>{blog.paragraph_5}</p>

                <hr></hr>
              </div>

            </div>

          ) : (
            <p className="text-center py-3" style={{marginBottom: '230px'}}>No Blogs Yet</p>
          )}
        </>
        )
      }
      </div>
    </div>
  );
};

export default BlogDetail;
