class Carousel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // We start out rendering the first slide. 0 denotes the index of the
        // active item.
        currentSlide: 0,
      };
    }
    /**
     * Handler function that transitions to the next slide in the carousel.
     * This is the function that will be run once the user clicks the "next"
     * button.
     */
    goNext = () => {
      const previousSlide = this.state.currentSlide;
      this.setState({ currentSlide: previousSlide + 1 });
    }
    /**
     * Equivalent to `goNext`. Handler function that will be invoked when clicking
     * the "back" button.
     */
    goBack = () => {
      const previousSlide = this.state.currentSlide;
      this.setState({ currentSlide: previousSlide - 1 });
    }
    render() {
      // Magic goes here
    }
  }
