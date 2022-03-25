import styles from "./blog.module.css";
import React, { useState, useEffect } from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import Message from "../message/Message";
import { Helmet } from "react-helmet";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { listBlogs } from "../../actions/blogActions";
import { BLOG_LIST_FAIL } from "../../constants/blogConstants";

const Blog = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className={styles.blogMainDiv}>
          <div className="container">
            <Helmet>
              <title>Smart Pills Blog Post – Modatabs.com</title>
              <meta
                name="description"
                content="We are providing up to date information on daytime sleepiness and smart Pills that effectively treat this condition for short-time of period. "
              />
            </Helmet>
            <>
              {blogs && blogs?.length !== 0 ? (
                <div className={styles.blogDiv}>
                  <CardGroup>
                    <Row xs={1} md={4} className="g-4">
                      {blogs?.map((blog) => (
                        <Col key={blog.id}>
                          <Card className="h-100">
                            <Link
                              to={`/blog/${blog.id}`}
                              className={styles.productImg}
                            >
                              <Card.Img
                                variant="top"
                                src={blog.image}
                                fluid={true}
                              />
                              {/* <img src={blog.image} alt="img" /> */}
                            </Link>
                            <Card.Body>
                              <Card.Title>{blog.h1}</Card.Title>
                              <Card.Text>
                                {blog.paragraph_1.slice(0, 200)}...
                              </Card.Text>
                              <Link
                                to={`/blog/${blog.id}`}
                                style={{ textDecoration: "none" }}
                              >
                                <p className={styles.blogLink}>
                                  Continue Reading {">"}
                                </p>
                              </Link>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </CardGroup>
                </div>
              ) : (
                <p
                  className="text-center py-3"
                  style={{ marginBottom: "230px" }}
                >
                  No Blogs Yet
                </p>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
