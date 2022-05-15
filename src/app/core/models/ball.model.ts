interface BallModel {
    backgroundColor: string;
    color: string;
    number: number;
    checked: boolean;  
}

const EMPTY_BALL: BallModel = {
    backgroundColor: "grey",
    color: 'white',
    number: 0,
    checked: false    
  };

  export { BallModel, EMPTY_BALL}