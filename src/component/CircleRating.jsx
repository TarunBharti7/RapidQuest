import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../index.css"

const CircleRating =({ rating , value }) => {
  return (
    <div className='circleRating'>
      <CircularProgressbar className='z-10'
        value={rating}
        maxValue={100}
        // text={${rating}%}  
        styles={buildStyles({
          pathColor: rating < 50 ? 'red' : '#23D5AA',
          textColor: 'black',
        })}
      />
      <p className='text-black font-extrabold z-40 text-center mt-[-48px]'>{rating}<sup>%</sup></p>
      <p className='my-7 text-center'>{value}</p>
    </div>
  );
};

export default CircleRating;