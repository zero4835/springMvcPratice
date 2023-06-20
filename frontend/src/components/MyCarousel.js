import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


// use require to take pic!
const items = [
    {
        id: 1,
        src:require("../img/7mXlKog.jpg"),
        altText: 'Slide 1',
        caption: 'Slide A'
    },
    {
        id: 2,
        src:require("../img/58767754_p0.jpg"),
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        id: 3,
        src:require("../img/86110106_p0.jpg"),
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class MyCarousel extends Component{

    constructor(props){
        super(props);
        this.state={activeIndex:0};
        this.next=this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting(){
        this.animating = true;
    }

    onExited(){
        this.animating = false;
    }

    next(){
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length -1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex : nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map(item => {
            return (
                <CarouselItem
                    className="custom-tag"
                    onExiting={this.onExiting}
                    onExited={this.onExited}>
                    <img style={{ width: 1200, height: 300 }} src={item.src} alt={item.altText} />
                    <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

export default MyCarousel;