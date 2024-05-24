import React, { useContext, useState } from "react";
              import { Formik } from "formik";
              import { Helmet } from "react-helmet-async";
              import * as Yup from "yup";
              import MainContext from "../../../context/context";
              import axios from "axios";
              import { MAIN_URL } from "../../../config/config";
              
              const Add = () => {
                const { data, setData } = useContext(MainContext);
                const [isSubmitting, setIsSubmitting] = useState(false);
              
                const validationSchema = Yup.object().shape({
                  title: Yup.string().required('Title is required'),
                  description: Yup.string().required('Description is required'),
                  image: Yup.string().url('Invalid URL').required('Image URL is required'),
                  price: Yup.number().required('Price is required').positive('Price must be a positive number'),
                  category: Yup.string().required('Category is required')
                });
              
                return (
                  <div>
                    <Helmet>
                      <title>Add</title>
                    </Helmet>
                    <Formik
                      initialValues={{ image: "", title: "", price: "", description: "", category: "all brunch  " }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { resetForm }) => {
                        setIsSubmitting(true);
                        axios
                          .post(MAIN_URL, {
                            title: values.title,
                            price: values.price,
                            image: values.image,
                            description: values.description,
                            category: values.category,
                          })
                          .then((res) => {
                            setData([...data, res.data]);
                            resetForm();
                            setIsSubmitting(false);
                            alert('Product added successfully!');
                          })
                          .catch((error) => {
                            console.error("There was an error adding the product!", error);
                            setIsSubmitting(false);
                            alert('Failed to add product. Please try again.');
                          });
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      }) => (
                        <form
                          className="container text-light text-center  p-5 gap-3 d-flex flex-column w-50 mt-5 rounded-3 mb-5 bg-success "
                          onSubmit={handleSubmit}
                        >
                          <label htmlFor="title" className="form-label">
                            Product Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            className="form-control"
                            id="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                          />
                          {errors.title && touched.title && <div className="text-danger">{errors.title}</div>}
              
                          <label htmlFor="description" className="form-label">
                            Product Description
                          </label>
                          <input
                            type="text"
                            name="description"
                            placeholder="Enter description"
                            className="form-control"
                            id="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                          />
                          {errors.description && touched.description && <div className="text-danger">{errors.description}</div>}
              
                          <label htmlFor="image" className="form-label">
                            Product Image
                          </label>
                          <input
                            type="text"
                            name="image"
                            placeholder="Enter image url"
                            className="form-control"
                            id="image"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                          />
                          {errors.image && touched.image && <div className="text-danger">{errors.image}</div>}
              
                          <label htmlFor="price" className="form-label">
                            Product Price
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Enter price"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                          />
                          {errors.price && touched.price && <div className="text-danger">{errors.price}</div>}
              
                          <label htmlFor="category" className="form-label">
                            Product Category
                          </label>
                          <select
                            name="category"
                            id="category"
                            className="form-control"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category}
                          >
                            <option value="all brunch ">Brunch</option>
                            <option value="all lunch">Lunch</option>
                            <option value="all dinner ">Dinner</option>

                          </select>
                          {errors.category && touched.category && <div className="text-danger">{errors.category}</div>}
              
                          <button className="btn btn-secondary mt-3 w-50 m-auto  " type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Adding...' : 'ADD'}
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
              );
            };
            
            export default Add;
