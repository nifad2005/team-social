import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllPost = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: allPost = []} = useQuery({
        queryKey: ['allPost'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/allpost');
            return res.data;
        }
    });
    
    return [allPost];
};

export default useAllPost;