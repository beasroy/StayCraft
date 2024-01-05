'use client';
import { Room } from '@/models/room';
import { FC } from 'react';
import { useEffect,useState } from 'react';
import { getFeaturedRooms } from '@/libs/apis';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay,Pagination } from 'swiper/modules';

import FeaturedRoom from '../FeaturedRoom/FeaturedRoom';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay, Pagination]);

const FeaturedRoomsSlider: FC =  () => {

  const fetchFeaturedRooms = async () => {
    try {
      const rooms = await getFeaturedRooms();
      setFeaturedRooms(rooms);
    } catch (error) {
      console.error('Error fetching featured rooms:', error);
    }
  };
    const [featuredRooms, setFeaturedRooms] = useState<Room[]>([]);

    useEffect(() => {
      
  
      fetchFeaturedRooms();
    }, []);

    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
        >
            {featuredRooms?.map((room) => (
                <SwiperSlide key={room._id}>
                    <FeaturedRoom featuredRoom={room} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FeaturedRoomsSlider;