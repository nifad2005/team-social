import author from '../assets/images/handsome-bearded-businessman-rubbing-hands-having-deal.jpg';
import post from '../assets/images/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.avif';
import { IoIosTimer } from "react-icons/io";
import { BiLike, BiComment, BiShareAlt } from "react-icons/bi";
import { LuSendHorizontal } from "react-icons/lu";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    const [openComment, setOpenComment] = useState(false);
    return (
        <div className='border border-gray-300 inline-block p-1 shadow-2xl'>
            <div className='flex items-center gap-3'>
                <img className='w-14 h-14 border border-blue-600 p-1 rounded-full' src={author} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>Murad</h2>
                    <p className='text-[12px] font-thin flex gap-1 items-center'><IoIosTimer className='text-sm text-black'></IoIosTimer>10 hours ago</p>
                </div>
            </div>
            <div className='mt-1'>
                <img className='w-96 h-52' src={post} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-1'><button className='cursor-pointer'><BiLike></BiLike></button><span>Like</span></p>
                <p className='flex items-center gap-1'><button onClick={() =>setOpenComment(!openComment)} className='cursor-pointer'><BiComment></BiComment></button><span>Comment</span></p>
                
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button">
                        <p className='flex items-center gap-1'><button className='cursor-pointer'><BiShareAlt></BiShareAlt></button><span>Share</span></p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                      <Link>share with friends</Link>
                      <Link>share with friends</Link>
                    </ul>
                </div>
            </div>
            <div>
                {
                    openComment &&
                    <div className='mt-1 relative'>
                        <input className='bg-zinc-200 w-full outline-none border border-gray-300 px-5 rounded-xl' type="text" placeholder='your comment' />
                        <button className='absolute top-[5px] right-2 cursor-pointer'>
                            <LuSendHorizontal></LuSendHorizontal>
                        </button>
                    </div>
                }
            </div>
            <div>
                <h1>new change</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, dicta.</p>
            </div>
        </div>
    );
};

export default Post;