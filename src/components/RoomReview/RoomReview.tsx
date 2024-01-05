import axios from 'axios';
import { FC } from 'react';
import useSWR from 'swr';

import { Review } from '@/models/review';
import Rating from '../Rating/Rating';


const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };

  const {
    data: roomReviews,
    error,
    isLoading,
  } = useSWR('/api/room-reviews', fetchRoomReviews);

  if (error) throw new Error('Cannot fetch data');
  if (typeof roomReviews === 'undefined' && !isLoading)
    throw new Error('Cannot fetch data');

  console.log(roomReviews);

  return (
    <>
      {roomReviews &&
        roomReviews.map(review => (
          <div
            className='bg-gray-100 dark:bg-[#B46060] p-4 rounded-lg'
            key={review._id}
          >
            <div className='font-semibold mb-2 flex'>
              <p>{review.user.name}</p>
              <div className='ml-4 flex items-center text-yellow-400 text-lg'>
                <Rating rating={review.userRating} />
              </div>
            </div>

            <p>{review.text}</p>
          </div>
        ))}
    </>
  );
};

export default RoomReview;