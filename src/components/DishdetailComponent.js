import React, { Component} from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
            super(props);
        }
    renderComments(allComments){
        if(allComments != null){
                    const comms = allComments.map((comm)=>{
                        return(
                            <div key={comm.id} className="col-12 mt-5">
                                <ul>
                                    <li>{comm.comment}</li>
                                    <li>-- {comm.author}, {comm.date}</li>
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
    render(){

            const dish = this.props.selectedDish;


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
                            {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
}

export default DishDetail;