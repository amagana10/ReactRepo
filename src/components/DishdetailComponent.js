import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';


    function RenderComments ({allComments}){
        if(allComments != null){
                    const comms = allComments.map((comm)=>{
                        return(
                            <div key={comm.id} className="col-12 mt-5">
                                <ul>
                                    <li>{comm.comment}</li>
                                    <li>-- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}</li>
                                </ul>
                            </div>
                        );
                    });

                    return(
                        <div>
                            <h4>Comments</h4>
                            <div>
                            {comms}
                            </div>
                            <CommentForm />
                        </div>




                    );
                }else{
                    return(
                        <div></div>
                    );}
    }
    const  DishDetail = (props) => {

            const dish = props.dish;
            if (dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                    <CardBody>
                                     <CardTitle>{dish.name}</CardTitle>
                                      <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                         <div className="col-12 col-md-5 m-1">
                            <RenderComments allComments ={props.comments} />
                         </div>
                    </div>
                </div>
            );}
            else{
                return ( <div></div> );
            }
        }


export default DishDetail;