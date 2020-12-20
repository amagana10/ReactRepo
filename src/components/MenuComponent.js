import React, { Component} from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);

        this.state = {
           selectedDish: null
        }
    }
    onDishSelected(dish){
        this.setState({ selectedDish:dish });
    }

    renderDish(dish){
        if(dish != null)
            return(
                <DishDetail selectedDish = {this.state.selectedDish} />
            );
        else
            return(
                <div></div>
            );
    }

    render(){

        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 mt-5">
                    <div  className="col-12 col-md-5 m-1">
                        <Card key={dish.id}
                          onClick={() => this.onDishSelected(dish)}>
                          <CardImg width="100%" src={dish.image} alt={dish.name} />
                          <CardImgOverlay>
                              <CardTitle>{dish.name}</CardTitle>
                          </CardImgOverlay>
                        </Card>
                      </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                 </div>
            </div>
        );
    }
}

export default Menu;