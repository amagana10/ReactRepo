import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


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
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                 <CardTitle>{dish.name}</CardTitle>
                                  <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                            <RenderComments allComments ={dish.comments} />
                    </div>
                </div>
            );}
            else{
                return ( <div></div> );
            }
        }


export default DishDetail;